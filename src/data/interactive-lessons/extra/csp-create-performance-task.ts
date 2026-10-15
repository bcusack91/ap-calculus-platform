import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Create Performance Task (AP Computer Science Principles).
 * Registry key / DB Topic.slug: 'csp-create-performance-task'.
 * 7 parts: teach (text) → interactive check (multiple-choice / dropdown-select / input-boxes) →
 * worked applications → Exit Quiz. Follows the current (2023 CED, unchanged for May 2027) task:
 * program code + video + Personalized Project Reference submitted in the AP Digital Portfolio,
 * then Written Response 1 and 2(a)–(c) answered on exam day using the PPR. Six rubric rows.
 * Pseudocode follows the College Board AP CSP Exam Reference (1-indexed lists, DISPLAY/INPUT,
 * RETURN(expression), etc.); the task itself allows any programming language. LaTeX uses
 * DOUBLED backslashes (template-literal strings); bare currency is escaped as \\$.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'csp-create-performance-task',
    sections: [
      {
        id: 'cpt1-intro',
        type: 'text' as const,
        content: `# 💻 Create Performance Task

**Part 1 of 7 — What the Task Is & How It's Scored**

---

### Topics in This Part

| Section |
|---------|
| What the Create Performance Task Is |
| What You Submit, and What You Write on Exam Day |
| The Six Scoring Rows |
| The Rules: Time, Collaboration, Acknowledgment |

> 🔑 **Key Concept:** The **Create performance task** is Section II of the AP CSP Exam, worth **30%** of your score. During the course you build a program and submit three components. Then, on exam day, you answer written-response prompts about **your own code**, using a reference sheet you made from it. Six rubric rows are scored, and most lost points trace back to a *missing requirement*, not bad coding.`,
      },
      {
        id: 'cpt1-overview',
        type: 'text' as const,
        content: `## Two Stages

**Stage 1 — during the course (at least 9 hours of class time).** You submit three components in the AP Digital Portfolio by the deadline in late April:

| Component | What it is | Key limit |
|-----------|-----------|-----------|
| **Program Code** | Your complete program, saved as a PDF | Must meet the program requirements |
| **Video** | A screen recording of your program **running** | $\\le 1$ minute, $\\le 30$ MB, no voice narration |
| **Personalized Project Reference (PPR)** | Screen captures of your **procedure** (and a call to it) and your **list** (where data is stored and where it is used) | No comments allowed in the captured code |

**Stage 2 — on exam day.** In Section II of the exam, you answer **Written Response 1** and **Written Response 2(a), 2(b), and 2(c)** about your program. The College Board gives you back your PPR to look at while you write.

> ⚠️ If your PPR is not submitted as final by the deadline, you will not have it on exam day.`,
      },
      {
        id: 'cpt1-q-artifacts',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of these is NOT submitted in the AP Digital Portfolio before the deadline?',
              options: [
                'A video of the program running',
                'The full program code as a PDF',
                'Your answers to the written-response prompts',
                'The Personalized Project Reference',
              ],
              correctAnswer: 2,
              explanation: 'You submit the program code, the video, and the Personalized Project Reference during the course. The written responses are answered on exam day, using your PPR.',
            },
            {
              question: 'What is the maximum length of the Create performance task video?',
              options: ['1 minute', '3 minutes', '5 minutes', '30 seconds'],
              correctAnswer: 0,
              explanation: 'The video must be at most 1 minute long and at most 30 MB, with no voice narration (text captions are allowed). It must show input, program functionality, and output.',
            },
          ],
        },
      },
      {
        id: 'cpt1-scoring',
        type: 'text' as const,
        content: `## The Six Scoring Rows

Each row is worth 1 point, and you can earn each one separately.

| # | Row | What earns the point |
|---|-----|----------------------|
| **1** | Video | The video shows the program running: **input**, program **functionality**, and **output** |
| **2** | Program Requirements | The code includes a **list**, a **procedure**, a **call** to that procedure, **selection**, and **iteration** |
| **3** | Written Response 1 | Program design, function, and purpose (e.g., an expected user and how your design meets their needs) |
| **4** | Written Response 2(a) | Algorithm development (e.g., how many times a loop runs; what would make it run forever) |
| **5** | Written Response 2(b) | Errors and testing (e.g., a change to your procedure that would cause a run-time error, and why) |
| **6** | Written Response 2(c) | Data and procedural abstraction (e.g., an algorithm that uses your list) |

> 🔑 **The headline:** rows 2 through 6 all depend on **two pieces of your code**: your **list** and your **procedure**. Choose them carefully, and know them well enough to explain on exam day.`,
      },
      {
        id: 'cpt1-input-points',
        type: 'input-boxes' as const,
        content: `**Score Arithmetic** 🧮

Section II (the Create performance task, including the written responses) is **30%** of your AP CSP score; the multiple-choice section is the rest.

**1)** How many rubric rows (points) are there for the Create performance task? Enter the number.
**2)** A student earns the Video, Program Requirements, Written Response 1, and Written Response 2(b) rows. How many of the 6 points did they earn?
**3)** What percent of the AP score comes from the multiple-choice section? Enter the number only (no % sign).`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '4', '70'],
          hint1: 'Video, Program Requirements, and four written-response prompts.',
          hint2: 'Count the rows named: four of them.',
          hint3: 'Section II is 30% of the score, so the multiple-choice section is $100 - 30$ percent.',
          explanation: '1) There are 6 rows. 2) The four rows named earn 4 points. 3) Multiple choice is 70% (Section II is 30%).',
        },
      },
      {
        id: 'cpt1-rules',
        type: 'text' as const,
        content: `## The Rules You Must Not Break

- ⏱️ Your teacher provides **at least 9 hours** of class time for the program, video, and PPR.
- 🤝 You **may collaborate** while coming up with ideas and **developing the program code**, including debugging and testing. You may **not** collaborate on the **video** or the **PPR**, and the written responses are yours alone on exam day.
- 📝 Code you did not write (a teacher's starter code, an API or open-source code, or code generated by an AI tool) must be **acknowledged with a comment in your program code**, such as "This code was generated using [AI tool name]."
- 🚫 The **PPR** may not contain comments or course content. Including them earns a score of **0** on the entire Create performance task, written responses included.
- 🖊️ Plagiarism also earns a **0** on the Create performance task, including the written responses.

> ⚠️ Built-in or existing procedures, event handlers, and main methods are **not** student-developed. Your PPR procedure must be one you wrote.`,
      },
      {
        id: 'cpt1-q-rules',
        type: 'multiple-choice' as const,
        content: `**Rules Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'During the Create performance task, which of these is ALLOWED?',
              options: [
                'Having a friend record and edit your video for you',
                'Adding comments that explain your code to the PPR',
                'Debugging your program code alongside a classmate',
                'Adding spoken narration over your demonstration video',
              ],
              correctAnswer: 2,
              explanation: 'Collaboration is allowed during ideation and development of the program code, including debugging. The video and PPR must be created independently, the PPR may not contain comments, and the video may not have narration.',
            },
            {
              question: 'Part of your program was generated by an AI tool. How should it be handled?',
              options: [
                'It is forbidden, and using any of it is an automatic zero',
                'It can be used freely and described as your own work',
                'It only needs to be mentioned in the video',
                'It needs a comment in the code that names the AI tool',
              ],
              correctAnswer: 3,
              explanation: 'AI-assisted code is allowed but must be acknowledged with a comment in the program code, and you must understand it well enough to explain it on exam day.',
            },
          ],
        },
      },
      {
        id: 'cpt1-outro',
        type: 'text' as const,
        content: `In Part 2 we lock in the **Video** row, the **Program Requirements** row, and **Written Response 1**.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'csp-create-performance-task',
    sections: [
      {
        id: 'cpt2-intro',
        type: 'text' as const,
        content: `# 💻 Create Performance Task

**Part 2 of 7 — The Video, the Program Requirements & Written Response 1**

---

> 🔑 **The Idea:** The Video row rewards a recording that shows your program **receiving input**, **doing something** (its functionality), and **producing output**. The Program Requirements row checks your code for the required parts. Written Response 1 asks you to explain your program's **design, function, and purpose**.`,
      },
      {
        id: 'cpt2-purpose',
        type: 'text' as const,
        content: `## Purpose vs. Function

These two words mean different things — don't blur them.

| Term | Question it answers | Example |
|------|--------------------|---------|
| **Purpose** | *Why* does this program exist? What problem does it solve or what interest does it pursue? | "Help a user track daily water intake to stay hydrated." |
| **Function** | *What* happens when it runs? The behavior the user sees. | "The user enters how many cups they drank; the program adds it to a running total and warns them if they're below their goal." |

**Input** can come from the user (including actions that trigger events), a device, an online data stream, or a file. **Output** can be visual, audible, tactile, or text, and it should depend on the input and the program's functionality.

> 💡 A program that only displays a fixed message, with no input, cannot show the input → functionality → output that the Video row requires.`,
      },
      {
        id: 'cpt2-q-purpose',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which statement describes a program\'s FUNCTION (not its purpose)?',
              options: [
                'The program helps people eat more healthily.',
                'The program exists because poor nutrition is a public-health concern.',
                'When the user taps a fruit, the program adds its calories to a total.',
                'The goal is to make nutrition tracking less tedious.',
              ],
              correctAnswer: 2,
              explanation: 'Function is what the program does when it runs (its observable behavior). The other three describe why the program exists, which is its purpose.',
            },
            {
              question: 'A video shows a program that displays "Hello, world!" and nothing else, with no input. Which row is at risk?',
              options: [
                'The Video row, since a click or keypress never changes the display',
                'Written Response 2(c), since that prompt covers abstraction',
                'Written Response 2(a), since that prompt covers loops',
                'No row, since displaying any text is enough for a video',
              ],
              correctAnswer: 0,
              explanation: 'The Video row requires the recording to show input, program functionality, and output. A fixed message with no input shows none of that relationship.',
            },
          ],
        },
      },
      {
        id: 'cpt2-video',
        type: 'text' as const,
        content: `## Capturing the Video

A clean video follows a simple arc:

1. **Show a starting state** (the screen before input).
2. **Provide input** — type a value, click a button, move a slider.
3. **Show the output change** — a number updates, a sprite moves, a message appears.

> 🔑 Plan your video as a **short demo of one feature**, not a tour of the whole app. One clear input → output cycle is enough.

### Video Specs to Memorize

| Spec | Requirement |
|------|------------|
| Length | $\\le 1$ minute |
| File size | $\\le 30$ MB |
| Audio | **No voice narration** (text captions are allowed) |
| Personal details | No distinguishing information about yourself |
| Format | .webm, .mp4, .wmv, .avi, or .mov |
| Must show | Input, program functionality, **and** output |

## The Program Requirements Row

Your code must include a **list**, a **procedure**, a **call** to that procedure, **selection**, and **iteration**. The point is **not** earned if the list holds only one element, if the list is never really used, or if the selection or iteration is trivial (it does not affect the program's outcome).`,
      },
      {
        id: 'cpt2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Classify Each Statement** 🔽

For a program that *recommends a movie based on the user's chosen genre*, sort each statement.`,
        exercise: {
          dropdowns: [
            {
              label: '"Makes picking a movie on a busy night faster."',
              options: ['Purpose', 'Function', 'Neither'],
            },
            {
              label: '"The user selects a genre; the program returns a randomly chosen matching title."',
              options: ['Purpose', 'Function', 'Neither'],
            },
            {
              label: '"The video must show a genre being selected and a title appearing."',
              options: ['Demonstrates input → output', 'Demonstrates purpose only', 'Is not required'],
            },
          ],
          correctAnswers: ['Purpose', 'Function', 'Demonstrates input → output'],
          hint1: 'Purpose = the *why* / the need being addressed.',
          hint2: 'Function = the observable *behavior* when the program runs.',
          hint3: 'The Video row needs input (selecting a genre) causing output (a title appearing).',
          explanation: 'The "busy night" statement is the purpose; the "select genre → return title" statement is the function; the video requirement is exactly the input → output demonstration the Video row wants.',
        },
      },
      {
        id: 'cpt2-specs-recap',
        type: 'text' as const,
        content: `## Written Response 1: Program Design, Function, and Purpose

On exam day, Written Response 1 asks about your program's design, function, and purpose. A sample prompt from the CED:

> *Identify an expected user of your program. Describe one way your program's design meets the needs of this user.*

To earn the point, **name a user** and **connect a specific design choice to that user's need** — and the description must be accurate for your program. For the water-tracker: "A student athlete who forgets to drink water. The program shows a warning in red when the running total is below the daily goal, so the user notices right away."

> 💡 Keep notes during development (a programming journal) about who your users are and why you made each design choice. You will not have your full code on exam day — only your PPR.`,
      },
      {
        id: 'cpt2-input-specs',
        type: 'input-boxes' as const,
        content: `**Video Specs** 🧮

Fill in the official Create performance task video limits.

**1)** Maximum video length, in **minutes**?
**2)** Maximum file size, in **MB**?
**3)** How many seconds of **voice narration** are allowed in the video?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '30', '0'],
          hint1: 'The video may be at most one minute long.',
          hint2: 'The file-size cap is thirty megabytes.',
          hint3: 'No voice narration is permitted at all (captions are fine).',
          explanation: '1) $\\le 1$ minute. 2) $\\le 30$ MB. 3) $0$ seconds — the video may not contain voice narration, though text captions are allowed.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'csp-create-performance-task',
    sections: [
      {
        id: 'cpt3-intro',
        type: 'text' as const,
        content: `# 💻 Create Performance Task

**Part 3 of 7 — Data Abstraction with a List**

---

> 🔑 **The Idea:** Your program must use a **list** (or another collection type) to store data that is **used** to manage complexity and help fulfill the program's purpose. The PPR's List section needs two captures: (i) code showing how data are **stored** in the list, and (ii) code showing the data in that **same list being used**.`,
      },
      {
        id: 'cpt3-list',
        type: 'text' as const,
        content: `## What a List Buys You

A **list** (also called an array) stores **multiple values under one name**. In AP CSP pseudocode, lists are **1-indexed** — the first element is at index $1$.

$$\\text{scores} \\leftarrow [88, 92, 75, 100]$$

| Operation | Pseudocode | Result for the list above |
|-----------|-----------|---------------------------|
| Access first element | $\\text{scores}[1]$ | $88$ |
| Access third element | $\\text{scores}[3]$ | $75$ |
| Length | $\\text{LENGTH}(\\text{scores})$ | $4$ |
| Append a value | $\\text{APPEND}(\\text{scores}, 60)$ | list becomes $[88,92,75,100,60]$ |

> 💡 **Why a list manages complexity:** without a list you'd need a separate variable for *every* value — \`s1, s2, s3, s4, …\`. With a list, **one loop** handles all of them, and adding a fifth score changes the data, not the code.`,
      },
      {
        id: 'cpt3-input-index',
        type: 'input-boxes' as const,
        content: `**Index Practice (1-indexed!)** 🧮

Using the AP CSP pseudocode list $\\text{names} \\leftarrow [\\text{"Ada"}, \\text{"Grace"}, \\text{"Alan"}, \\text{"Katherine"}]$:

**1)** What value is at $\\text{names}[2]$? *(type the name)*
**2)** What does $\\text{LENGTH}(\\text{names})$ return?
**3)** After $\\text{APPEND}(\\text{names}, \\text{"Linus"})$, what index holds "Linus"?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['Grace', '4', '5'],
          hint1: 'AP CSP lists start at index 1, so $\\text{names}[1]$ is "Ada" and $\\text{names}[2]$ is the second element.',
          hint2: 'LENGTH counts the elements: Ada, Grace, Alan, Katherine.',
          hint3: 'APPEND adds to the END. The list had 4 elements, so the new one is at index 5.',
          explanation: '1) $\\text{names}[2] = $ "Grace" (1-indexed). 2) LENGTH = 4. 3) APPEND puts "Linus" at index 5, the new last position.',
        },
      },
      {
        id: 'cpt3-managing',
        type: 'text' as const,
        content: `## Managing Complexity

Having a list is not enough. The list must be **used**: the program creates new data from it or accesses multiple elements of it, as part of the program's purpose. Written Response 2(c) can ask you to explain or extend an algorithm that uses your list, so be ready to explain **with vs. without**:

> "The list \`highScores\` stores all the leaderboard entries. **Without** it, I would need a separate variable for each score and separate code to compare each one. **With** the list, a single \`FOR EACH\` loop checks every entry, so adding more players never requires new code."

> ⚠️ **Traps:** a list that is created but never read again, or a list with only **one** element, does not earn the Program Requirements row. The data must flow into the program's behavior.`,
      },
      {
        id: 'cpt3-q-managing',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which use of a list best shows it managing complexity in a program?',
              options: [
                'A list is declared at the top of the program but never accessed again.',
                'One loop checks every quiz answer in a list instead of one IF per answer.',
                'Three separate variables x1, x2, and x3 each hold one of the numbers.',
                'A list holds a single element: the title of the program as a string.',
              ],
              correctAnswer: 1,
              explanation: 'Looping over a list to replace many near-identical statements is the textbook example of managing complexity. An unused list, separate variables, or a one-element list do not reduce complexity.',
            },
            {
              question: 'In AP CSP pseudocode, what is the index of the FIRST element of a list?',
              options: ['0', '1', '-1', 'It depends on the language'],
              correctAnswer: 1,
              explanation: 'AP CSP exam-reference pseudocode is 1-indexed: the first element is at index 1 and the last is at index LENGTH(list).',
            },
          ],
        },
      },
      {
        id: 'cpt3-other-collections',
        type: 'text' as const,
        content: `## Lists Aren't the Only Collection (for Your Program)

The task allows "a list **or other collection type**" — any type that aggregates elements in a single structure, such as a list, a database, or a set. Your program can be written in any language.

| Collection | Stores | Good when… |
|------------|--------|-----------|
| **List** | ordered values | order matters; you loop in sequence |
| **Database table** | records with named fields | the program reads stored records |
| **Set** | values with no duplicates | you only care whether a value is present |

> 💡 For most submissions a plain **list** is the safest choice: it is the easiest to loop over, and the exam-day prompts talk about "your list". The multiple-choice exam itself uses only the reference-sheet list.`,
      },
      {
        id: 'cpt3-dropdown-collections',
        type: 'dropdown-select' as const,
        content: `**List Requirements** 🔽

Pick the best answer for each.`,
        exercise: {
          dropdowns: [
            {
              label: 'The PPR List section needs one capture of data being stored in the list and one of:',
              options: ['the same list being used', 'a different list being created', 'the video'],
            },
            {
              label: 'A list helps manage complexity when:',
              options: ['A loop processes its elements instead of repeated code', 'It is declared but never used', 'It holds exactly one value'],
            },
            {
              label: 'The first element of an AP CSP list is at index:',
              options: ['1', '0', '-1'],
            },
          ],
          correctAnswers: ['the same list being used', 'A loop processes its elements instead of repeated code', '1'],
          hint1: 'Stored, then used — the same list.',
          hint2: 'Managing complexity means *reducing* repeated code.',
          hint3: 'AP CSP pseudocode is 1-indexed.',
          explanation: 'The PPR shows the list being stored and then the same list being used; a loop over a list is what manages complexity; and AP CSP lists are 1-indexed.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'csp-create-performance-task',
    sections: [
      {
        id: 'cpt4-intro',
        type: 'text' as const,
        content: `# 💻 Create Performance Task

**Part 4 of 7 — Procedural Abstraction with a Parameter**

---

> 🔑 **The Idea:** The PPR's Procedure section needs (i) a **student-developed procedure** that has **at least one parameter that affects what the procedure does**, and (ii) a capture of where that procedure is **called**. A procedure with no parameters, or with a parameter that is never used, does not meet the requirement.`,
      },
      {
        id: 'cpt4-procedure',
        type: 'text' as const,
        content: `## Anatomy of a Procedure

A **procedure** is a named group of programming instructions that may have parameters and return values. A **parameter** is an input variable of the procedure; an **argument** is the actual value passed when you call it.

\`\`\`
PROCEDURE areaOfRectangle(width, height)
{
    area ← width * height
    RETURN(area)
}
\`\`\`

| Term | In the example |
|------|----------------|
| Procedure name | \`areaOfRectangle\` |
| Parameters | \`width\`, \`height\` |
| A **call** | \`areaOfRectangle(4, 5)\` |
| Arguments in that call | \`4\` and \`5\` |
| Returned value | \`20\` |

> 🔑 **The parameter must matter.** \`areaOfRectangle(4, 5)\` returns $20$ but \`areaOfRectangle(2, 5)\` returns $10$ — the result *depends on* the parameters. That dependency is exactly what the PPR requirement checks.`,
      },
      {
        id: 'cpt4-q-procedure',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which procedure meets the PPR requirement for a student-developed procedure with a parameter?',
              options: [
                'showLogo() — always displays the same image and takes no parameters',
                'greet(name) — ignores name and always displays "Hello!"',
                'discountedPrice(price, percentOff) — returns price reduced by percentOff',
                'A built-in library function that you imported but did not write',
              ],
              correctAnswer: 2,
              explanation: 'The PPR procedure must be student-written and use a parameter that affects its functionality. discountedPrice uses both parameters. showLogo has no parameter, greet never uses its parameter, and the library function was not written by the student.',
            },
            {
              question: 'In the call discountedPrice(50, 20), the values 50 and 20 are called the ___.',
              options: ['parameters', 'arguments', 'return values', 'data abstractions'],
              correctAnswer: 1,
              explanation: 'The values passed into a call are arguments. The variable names in the procedure DEFINITION (price, percentOff) are the parameters.',
            },
          ],
        },
      },
      {
        id: 'cpt4-trace',
        type: 'text' as const,
        content: `## Tracing a Call

Reading what a procedure *returns* for given arguments is a skill the written responses and the multiple-choice section both reward.

\`\`\`
PROCEDURE applyTax(price, rate)
{
    tax ← price * rate
    RETURN(price + tax)
}
\`\`\`

For \`applyTax(100, 0.08)\`:

$$\\text{tax} = 100 \\times 0.08 = 8 \\quad\\Rightarrow\\quad \\text{RETURN } 100 + 8 = 108$$

> 💡 Practice tracing **your own** procedure with several different arguments before exam day. Written Response 2(b) can ask how a change to your procedure would cause an error, and you will need to reason about what it does with specific inputs.`,
      },
      {
        id: 'cpt4-input-trace',
        type: 'input-boxes' as const,
        content: `**Trace the Procedure** 🧮

\`\`\`
PROCEDURE applyTax(price, rate)
{
    tax ← price * rate
    RETURN(price + tax)
}
\`\`\`

**1)** What does \`applyTax(200, 0.05)\` return?
**2)** What does \`applyTax(50, 0.10)\` return?
**3)** What does \`applyTax(80, 0)\` return?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['210', '55', '80'],
          hint1: 'tax $= 200 \\times 0.05 = 10$, then RETURN $200 + 10$.',
          hint2: 'tax $= 50 \\times 0.10 = 5$, then RETURN $50 + 5$.',
          hint3: 'tax $= 80 \\times 0 = 0$, then RETURN $80 + 0$.',
          explanation: '1) $200(0.05)=10 \\Rightarrow 210$. 2) $50(0.10)=5 \\Rightarrow 55$. 3) $80(0)=0 \\Rightarrow 80$. The output changes with the arguments — proof the parameter matters.',
        },
      },
      {
        id: 'cpt4-pitfalls',
        type: 'text' as const,
        content: `## Ways a Procedure Fails the Requirement

| Mistake | Why it fails |
|---------|--------------|
| No parameter | The PPR procedure needs one or more parameters |
| Parameter never used | If the result is the same no matter the argument, the parameter has no effect on functionality |
| Not student-written | Built-in or existing procedures, event handlers, and main methods are not student-developed |
| No call captured | The PPR also needs a capture showing where the procedure is called |

> ⚠️ The deepest trap is the **unused parameter**: \`PROCEDURE greet(name)\` that always displays "Hi!" has a parameter, but because \`name\` never changes the output, it does not affect the procedure's functionality.`,
      },
      {
        id: 'cpt4-dropdown-terms',
        type: 'dropdown-select' as const,
        content: `**Parameter vs. Argument** 🔽

For \`PROCEDURE applyTax(price, rate)\` called as \`applyTax(100, 0.08)\`:`,
        exercise: {
          dropdowns: [
            {
              label: 'In the definition, \`price\` and \`rate\` are the:',
              options: ['parameters', 'arguments', 'return values'],
            },
            {
              label: 'In the call, \`100\` and \`0.08\` are the:',
              options: ['arguments', 'parameters', 'procedures'],
            },
            {
              label: 'For the PPR procedure, a parameter must:',
              options: ['affect what the procedure does', 'be unused', 'be a whole number'],
            },
          ],
          correctAnswers: ['parameters', 'arguments', 'affect what the procedure does'],
          hint1: 'The variable names in the PROCEDURE definition are parameters.',
          hint2: 'The actual values passed in a call are arguments.',
          hint3: 'The parameter has to change the procedure\'s behavior.',
          explanation: 'Definition names = parameters; values passed in = arguments; and the PPR procedure needs a parameter that affects its functionality.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'csp-create-performance-task',
    sections: [
      {
        id: 'cpt5-intro',
        type: 'text' as const,
        content: `# 💻 Create Performance Task

**Part 5 of 7 — Algorithm with Sequencing, Selection & Iteration**

---

> 🔑 **The Idea:** The procedure in your PPR must implement an **algorithm** that includes **sequencing**, **selection**, and **iteration** working together. Selection and iteration are also part of the Program Requirements row, and Written Response 2(a) asks about the first loop in your PPR procedure.`,
      },
      {
        id: 'cpt5-three',
        type: 'text' as const,
        content: `## The Three Building Blocks

Every algorithm can be built from three constructs:

| Construct | What it means | Pseudocode signal |
|-----------|---------------|-------------------|
| **Sequencing** | Steps run in the order they are written | one line after another |
| **Selection** | A choice between paths based on a condition | \`IF\` / \`ELSE\` |
| **Iteration** | Repeating steps | \`REPEAT n TIMES\` / \`REPEAT UNTIL\` / \`FOR EACH\` |

### Worked Procedure: count the passing scores

\`\`\`
PROCEDURE countPassing(scores, cutoff)
{
    count ← 0                          // sequencing
    FOR EACH s IN scores               // iteration
    {
        IF (s ≥ cutoff)                // selection
        {
            count ← count + 1
        }
    }
    RETURN(count)
}
\`\`\`

> 🔑 This **one procedure** has all three: statements in order (**sequencing**), a loop over the list (**iteration**), and an \`IF\` decision inside (**selection**). It also uses your list and a parameter that changes the result. (Your real program can be in any language; the PPR code must not contain comments like the labels above.)`,
      },
      {
        id: 'cpt5-dropdown',
        type: 'dropdown-select' as const,
        content: `**Identify the Construct** 🔽

Match each line from \`countPassing\` to the construct it demonstrates.`,
        exercise: {
          dropdowns: [
            {
              label: '\`FOR EACH s IN scores\`',
              options: ['Iteration', 'Selection', 'Sequencing'],
            },
            {
              label: '\`IF (s ≥ cutoff)\`',
              options: ['Iteration', 'Selection', 'Sequencing'],
            },
            {
              label: '\`count ← 0\` then later \`RETURN(count)\` (in order)',
              options: ['Iteration', 'Selection', 'Sequencing'],
            },
          ],
          correctAnswers: ['Iteration', 'Selection', 'Sequencing'],
          hint1: 'A loop that repeats over each element is iteration.',
          hint2: 'An IF that chooses whether to run a block is selection.',
          hint3: 'Statements that simply run one after another in order are sequencing.',
          explanation: 'FOR EACH = iteration, IF = selection, and the ordered statements (initialize, then loop, then return) = sequencing. All three appear in one procedure.',
        },
      },
      {
        id: 'cpt5-trace2',
        type: 'text' as const,
        content: `## Tracing the Algorithm

Let's run \`countPassing([88, 92, 75, 100], 80)\`:

| Step | \`s\` | \`s ≥ 80\`? | \`count\` after |
|------|-----|-----------|----------------|
| start | — | — | $0$ |
| 1 | $88$ | yes | $1$ |
| 2 | $92$ | yes | $2$ |
| 3 | $75$ | no | $2$ |
| 4 | $100$ | yes | $3$ |

$$\\text{RETURN } 3$$

> 💡 The loop body ran **4 times** — once per element, because FOR EACH visits every element of the list. Counting loop repetitions like this is exactly what Written Response 2(a) can ask about your own code.`,
      },
      {
        id: 'cpt5-input-trace',
        type: 'input-boxes' as const,
        content: `**Trace the Algorithm** 🧮

Using \`countPassing(scores, cutoff)\` from above with $\\text{scores} = [70, 85, 60, 95, 50]$:

**1)** \`countPassing(scores, 80)\` returns ___?
**2)** \`countPassing(scores, 60)\` returns ___?  *(count values $\\ge 60$)*
**3)** How many times does the loop body run during \`countPassing(scores, 100)\`?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '4', '5'],
          hint1: 'Which of 70, 85, 60, 95, 50 are $\\ge 80$?',
          hint2: 'Which are $\\ge 60$? Note that $60 \\ge 60$ is TRUE.',
          hint3: 'FOR EACH visits every element, whatever the cutoff is.',
          explanation: '1) $\\ge 80$: 85 and 95 → 2. 2) $\\ge 60$: 70, 85, 60, 95 → 4 (50 is excluded). 3) The list has 5 elements, so the body runs 5 times, even though the IF is never true.',
        },
      },
      {
        id: 'cpt5-all-three',
        type: 'text' as const,
        content: `## The "All Three" Trap

The PPR procedure needs **all three** constructs. The most common near-miss is a procedure with sequencing and a loop but no decision inside.

| Procedure has… | Meets the algorithm requirement? |
|----------------|----------------------------------|
| sequencing + selection + iteration | ✅ Yes |
| sequencing + iteration, no IF | ❌ No (missing selection) |
| sequencing + selection, no loop | ❌ No (missing iteration) |

> 🔑 **The fix is usually one line:** put an \`IF\` *inside* your loop. \`countPassing\` works because the \`IF (s ≥ cutoff)\` lives **inside** the \`FOR EACH\` — that nesting gives you all three at once. Make sure the selection and iteration actually affect the outcome; trivial ones do not count.`,
      },
      {
        id: 'cpt5-q-constructs',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A procedure loops over a list and adds every element to a running total, but contains no IF statement. Does it meet the PPR algorithm requirement?',
              options: [
                'Yes, since a loop by itself is enough',
                'No, since it is missing iteration',
                'No, since it is missing selection',
                'Yes, since only sequencing is needed',
              ],
              correctAnswer: 2,
              explanation: 'The algorithm needs sequencing AND selection AND iteration. A loop with no IF has sequencing and iteration but lacks selection.',
            },
            {
              question: 'In countPassing, which feature provides the SELECTION?',
              options: [
                'The FOR EACH loop over scores',
                'The IF statement that tests s ≥ cutoff',
                'The RETURN statement at the end',
                'The count ← 0 initialization',
              ],
              correctAnswer: 1,
              explanation: 'The IF that decides whether to increment count is the selection. The FOR EACH is iteration, and the ordered statements are sequencing.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'csp-create-performance-task',
    sections: [
      {
        id: 'cpt6-intro',
        type: 'text' as const,
        content: `# 💻 Create Performance Task

**Part 6 of 7 — The Exam-Day Written Responses**

---

> 🔑 **The Idea:** On exam day you answer two written-response questions (four prompts) about **your** program, with your Personalized Project Reference in front of you. The exact prompts change from exam to exam, but each prompt always comes from the same category. Answer exactly what is asked, and make every claim match your code.`,
      },
      {
        id: 'cpt6-prompts',
        type: 'text' as const,
        content: `## The Four Prompt Categories

| Prompt | Category | Sample prompt from the CED |
|--------|----------|----------------------------|
| **WR 1** | Program Design, Function, and Purpose | Identify an expected user and describe one way your design meets that user's needs. |
| **WR 2(a)** | Algorithm Development | For the first loop in your PPR procedure: how many times does its body run, and what condition or error would make it an infinite loop? |
| **WR 2(b)** | Errors and Testing | Describe a change to your PPR procedure that would cause a run-time error, and explain why. |
| **WR 2(c)** | Data and Procedural Abstraction | Using a given procedure isEqual(value1, value2), explain in detailed steps an algorithm that counts how many times a value appears in your list. |

> 💡 When there are several loops, procedures, or lists in your PPR, the readers score the **first** one. Put the code you know best first.`,
      },
      {
        id: 'cpt6-q-prompts',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which written response is most likely to ask how a change to your procedure could make the program crash while it runs?',
              options: [
                'Written Response 1, about program design and purpose',
                'Written Response 2(a), about algorithm development',
                'Written Response 2(b), about errors and testing',
                'Written Response 2(c), about abstraction',
              ],
              correctAnswer: 2,
              explanation: 'Written Response 2(b) covers errors and testing: identifying and correcting errors and choosing inputs that check correctness.',
            },
            {
              question: 'What do you have in front of you while answering the written responses on exam day?',
              options: [
                'Your complete program code with all of your comments',
                'Your Personalized Project Reference',
                'Your video and its captions',
                'Nothing except the prompts themselves',
              ],
              correctAnswer: 1,
              explanation: 'The College Board returns your Personalized Project Reference (if it was submitted as final by the deadline) for you to use while answering.',
            },
          ],
        },
      },
      {
        id: 'cpt6-testing',
        type: 'text' as const,
        content: `## Answering Each Prompt Well

**WR 2(a) — loops.** Count how many times the loop body runs for the inputs in the prompt (a FOR EACH over a list runs once per element). For an infinite loop, name a specific condition: for example, if \`i ← i + 1\` were removed from a REPEAT UNTIL (i > LENGTH(list)) loop, the condition would never become true.

**WR 2(b) — run-time errors.** Describe a specific change and why it fails while running: for example, changing the loop to read \`list[i + 1]\` would go past the last index, or dividing by a count that could be 0.

**WR 2(c) — abstraction.** Describe the algorithm in enough detail that someone else could write it: start a counter at 0, loop over **every** element of your list, call isEqual on each element and the target value, add 1 when it returns true, and finally return or display the counter.

> ⚠️ **Trap:** an answer that is "implausible, inaccurate, or inconsistent with the program" does not earn the point. Every claim must match the code in your PPR.`,
      },
      {
        id: 'cpt6-dropdown',
        type: 'dropdown-select' as const,
        content: `**Map Each Task → Prompt** 🔽

Match each exam-day task to the written response it most likely belongs to.`,
        exercise: {
          dropdowns: [
            {
              label: 'Explain an algorithm that counts how many list elements equal a value',
              options: ['WR 2(c)', 'WR 2(a)', 'WR 1', 'WR 2(b)'],
            },
            {
              label: 'State how many times your first loop\'s body runs',
              options: ['WR 2(a)', 'WR 2(c)', 'WR 1', 'WR 2(b)'],
            },
            {
              label: 'Describe how your design meets an expected user\'s needs',
              options: ['WR 1', 'WR 2(a)', 'WR 2(b)', 'WR 2(c)'],
            },
          ],
          correctAnswers: ['WR 2(c)', 'WR 2(a)', 'WR 1'],
          hint1: 'Data and procedural abstraction with your list.',
          hint2: 'Algorithm development: loops.',
          hint3: 'Program design, function, and purpose.',
          explanation: 'Counting with isEqual over your list is WR 2(c); loop repetitions and infinite loops are WR 2(a); users and design are WR 1. Errors and testing are WR 2(b).',
        },
      },
      {
        id: 'cpt6-checklist',
        type: 'text' as const,
        content: `## A Worked WR 2(c) Answer

Suppose the PPR list is \`colors\` and the target value is stored in \`target\`:

1. Set \`count\` to 0.
2. For each element \`c\` in \`colors\`, call \`isEqual(c, target)\`.
3. If the call returns true, add 1 to \`count\`.
4. After the loop has visited every element, return \`count\`.

> 💡 Every step names a concrete action, the loop covers **all** elements, and the result is stored and returned. That is the level of detail "someone else could write the code" means.`,
      },
      {
        id: 'cpt6-input-3d',
        type: 'input-boxes' as const,
        content: `**Count the Loop** 🧮

\`\`\`
i ← 1
REPEAT UNTIL (i > LENGTH(colors))
{
    DISPLAY(colors[i])
    i ← i + 1
}
\`\`\`

**1)** If colors has 6 elements, how many times does the loop body run?
**2)** If colors is empty, how many times does the loop body run?
**3)** If the line \`i ← i + 1\` were deleted and colors had 6 elements, how many times would the loop body run? *(type infinite)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '0', 'infinite'],
          hint1: 'i takes the values 1 through 6.',
          hint2: 'REPEAT UNTIL checks its condition before each pass: is 1 > 0?',
          hint3: 'Without the update, i stays 1 forever.',
          explanation: '1) The body runs for i = 1, 2, …, 6: 6 times. 2) With an empty list, 1 > 0 is already true, so the body runs 0 times. 3) Without i ← i + 1 the condition never becomes true, so the loop never ends.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'csp-create-performance-task',
    sections: [
      {
        id: 'cpt7-intro',
        type: 'text' as const,
        content: `# 💻 Create Performance Task

**Part 7 of 7 — Mastery Check & Exit Quiz**

---

You now know the three components, the PPR's procedure and list sections, all six rubric rows, and the four exam-day prompt categories. Let's lock it in.`,
      },
      {
        id: 'cpt7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Row | Earned by | Based on |
|-----|-----------|----------|
| **Video** | Recording shows input, functionality, and output | Video |
| **Program Requirements** | Code has a list, a procedure, a call to it, selection, and iteration | PPR (or full code) |
| **WR 1** | Design, function, and purpose (e.g., a user and how the design meets their need) | Exam-day response |
| **WR 2(a)** | Algorithm development (loop count, infinite-loop condition) | PPR + response |
| **WR 2(b)** | Errors and testing (e.g., a change causing a run-time error) | PPR + response |
| **WR 2(c)** | Data and procedural abstraction (e.g., an algorithm over your list) | PPR + response |

> 🔑 **The whole strategy in one line:** build **one list that is stored and then used** and **one procedure, with a parameter that matters, containing a loop with an IF inside**; capture both in a comment-free PPR; demonstrate input → output on video; and practice explaining that code before exam day.

> ⚠️ **Integrity reminder:** your PPR procedure must be one **you** wrote; acknowledge borrowed or AI-generated code with comments in your program code (but not in the PPR).`,
      },
      {
        id: 'cpt7-dropdown-review',
        type: 'dropdown-select' as const,
        content: `**Diagnose the Problem** 🔽

Each student has one problem. Pick the requirement it breaks.`,
        exercise: {
          dropdowns: [
            {
              label: 'The PPR procedure has a parameter and an IF, but no loop:',
              options: ['Algorithm needs iteration', 'Procedure needs a parameter', 'Program needs a list'],
            },
            {
              label: 'The video shows only a fixed message, with no input:',
              options: ['Video row (no input → output)', 'WR 2(b) (errors and testing)', 'WR 2(c) (abstraction)'],
            },
            {
              label: 'The PPR screenshots include explanatory comments:',
              options: ['The whole task can score 0', 'Only the video row is lost', 'No effect on the score'],
            },
          ],
          correctAnswers: ['Algorithm needs iteration', 'Video row (no input → output)', 'The whole task can score 0'],
          hint1: 'Sequencing + selection + iteration — what is missing?',
          hint2: 'The Video row needs input causing output.',
          hint3: 'The PPR may not contain comments or course content.',
          explanation: 'No loop means the algorithm lacks iteration; no input → output loses the Video row; comments in the PPR can earn a 0 on the entire Create performance task.',
        },
      },
      {
        id: 'cpt7-mixed-intro',
        type: 'text' as const,
        content: `## Putting It All Together

These last questions blend the rubric, the pseudocode, and the integrity rules — exactly the way a reader evaluates a real submission. Take your time on each.`,
      },
      {
        id: 'cpt7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A student\'s PPR procedure has a parameter, sequencing, and an IF statement, but no loop. Which requirement is not met?',
              options: [
                'The procedure has no parameter.',
                'The algorithm is missing iteration.',
                'The program has no list.',
                'The program has no purpose.',
              ],
              correctAnswer: 1,
              explanation: 'The PPR procedure needs sequencing AND selection AND iteration. With sequencing and selection (the IF) but no loop, iteration is missing. The parameter requirement is still met.',
            },
            {
              question: 'Which choice would JEOPARDIZE the integrity of the submission?',
              options: [
                'Describing code copied from an online tutorial as your own procedure',
                'Collaborating with a classmate while developing the program code',
                'Using a list to manage complexity in the program',
                'Tracing your procedure with several different arguments',
              ],
              correctAnswer: 0,
              explanation: 'Code you did not write must be acknowledged and cannot be your student-developed procedure; presenting it as your own is plagiarism. Collaboration during development is allowed, and the other choices are good practice.',
            },
          ],
        },
      },
      {
        id: 'cpt7-final-words',
        type: 'text' as const,
        content: `## One Last Strategy Note

If you remember nothing else: **choose your list and your procedure first, then build the rest of the program around them.** Those two pieces of code are what the PPR shows and what every Written Response 2 prompt asks about.

> 🔑 A simple program whose list and procedure you can explain in detail scores far better than an ambitious program you cannot explain on exam day.

Finish with the Exit Quiz below.`,
      },
      {
        id: 'cpt7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'How much of the AP CSP score does Section II (the Create performance task and its written responses) count for, and how many rubric rows does it have?',
              options: [
                '70% of the score; 5 rows',
                '30% of the score; 6 rows',
                '50% of the score; 8 rows',
                '100% of the score; 6 rows',
              ],
              correctAnswer: 1,
              explanation: 'Section II is 30% of the AP score (the multiple-choice section is 70%) and is scored on 6 rows: Video, Program Requirements, and Written Responses 1, 2(a), 2(b), and 2(c).',
            },
            {
              question: 'For \`countPassing([90, 70, 85], 80)\` — counting values ≥ 80 — what does the procedure return?',
              options: ['3', '2', '1', '0'],
              correctAnswer: 1,
              explanation: 'Values $\\ge 80$ are 90 and 85 (70 fails), so the count is 2.',
            },
            {
              question: 'Which procedure meets every PPR requirement for the Procedure section?',
              options: [
                'A built-in sort function that has no IF or loop you can see',
                'A procedure with a parameter but only sequential statements',
                'A list that stores data, with no procedure at all',
                'A student-written procedure whose parameter matters, with a loop holding an IF',
              ],
              correctAnswer: 3,
              explanation: 'The PPR procedure must be student-written, use a parameter that affects its functionality, and implement an algorithm with sequencing, selection, and iteration.',
            },
          ],
        },
      },
    ],
  },
]
