import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Create Performance Task (AP Computer Science Principles).
 * Registry key / DB Topic.slug: 'csp-create-performance-task'.
 * 7 parts, gold-standard structure modeled on the algebra1-completing-the-square pilot:
 * teach (text) → interactive check (multiple-choice / dropdown-select / input-boxes) →
 * worked applications → Exit Quiz. Concept-forward (non-math topic), so checks favor
 * multiple-choice + dropdown, with quantitative input-boxes where natural (scoring points,
 * list indexing, binary/data sizes). Pseudocode follows the College Board AP CSP Exam
 * Reference (1-indexed lists, DISPLAY/INPUT, MOD, etc.). LaTeX uses DOUBLED backslashes
 * (template-literal strings); bare currency is escaped as \\$.
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
| What You Submit |
| The Six Scoring Points |
| The Rules: Time, Collaboration, Plagiarism |

> 🔑 **Key Concept:** The **Create Performance Task (CPT)** is a through-course assessment for AP Computer Science Principles. You design and build a working program, then submit the **code**, a short **video** of it running, and **written responses**. It is scored against **6 points**, and almost every lost point traces back to a *missing requirement*, not bad coding.`,
      },
      {
        id: 'cpt1-overview',
        type: 'text' as const,
        content: `## What You Actually Submit

The College Board requires **four components**:

| Artifact | What it is | Key limit |
|----------|-----------|-----------|
| **Program Code** | Your full program as a single PDF | Must include the required features |
| **Video** | Screen capture of the program **running** | $\\le 1$ minute, $\\le 30$ MB, no narration/audio |
| **Personalized Project Reference (PPR)** | Screenshots of *your* procedure and *your* list, pasted into the written-response template | 2 required code segments |
| **Written Responses** | Prose answers (3a–3d) describing your program | Word limits per prompt |

> 💡 The video must show **input → output** behavior — it has to demonstrate the program *doing something* in response to input, not just a static screen.

> ⚠️ **Audio matters:** the video may **not** contain any spoken narration. Submitting a narrated video can cost you a point and risks a plagiarism-policy flag.`,
      },
      {
        id: 'cpt1-q-artifacts',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of these is NOT something you submit for the Create Performance Task?',
              options: [
                'A typed reflection essay graded for grammar and citations',
                'A video of the program running',
                'The full program code as a PDF',
                'Written responses describing the program',
              ],
              correctAnswer: 0,
              explanation: 'You submit code, a video, the Personalized Project Reference, and written responses (3a–3d). There is no graded grammar/citation essay — the written responses are scored for technical accuracy, not English-class mechanics.',
            },
            {
              question: 'What is the maximum length of the Create Performance Task video?',
              options: ['1 minute', '3 minutes', '5 minutes', '30 seconds'],
              correctAnswer: 0,
              explanation: 'The video must be at most 1 minute long and at most 30 MB, with no audio narration. It must show the program receiving input and producing output.',
            },
          ],
        },
      },
      {
        id: 'cpt1-scoring',
        type: 'text' as const,
        content: `## The Six Scoring Points

Your submission is scored against **6 independent points**. You can earn each one separately.

| # | Row | What it asks for |
|---|-----|------------------|
| **1** | Program Purpose & Function | Video shows input/output; 3a names the purpose & function |
| **2** | Data Abstraction | A **list** (or other collection) that stores data the program uses |
| **3** | Managing Complexity | The list is used in a way that makes the program *easier* than without it |
| **4** | Procedural Abstraction | A **student-developed procedure with $\\ge 1$ parameter** that affects its behavior |
| **5** | Algorithm Implementation | That procedure contains **sequencing, selection, AND iteration** |
| **6** | Testing | 3d describes two calls with different arguments and their results |

> 🔑 **The headline:** Points 2–6 are all about **two pieces of code** — your **list** and your **procedure**. Pick those two carefully and most of the rubric falls into place.`,
      },
      {
        id: 'cpt1-input-points',
        type: 'input-boxes' as const,
        content: `**Score Arithmetic** 🧮

The Create Performance Task contributes **30%** of your total AP CSP score, and the multiple-choice exam contributes the other 70%.

**1)** How many scoring points is the Create Performance Task worth? Enter the number.
**2)** A student earns points 1, 2, 4, and 6 but misses 3 and 5. How many of the 6 points did they earn?
**3)** What percent of the final AP score comes from the end-of-course multiple-choice exam? Enter the number only (no % sign).`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '4', '70'],
          hint1: 'The rubric lists points 1 through 6 — count them.',
          hint2: 'Points earned: 1, 2, 4, 6 — that is four checkmarks.',
          hint3: 'The CPT is 30% of the score, so the multiple-choice exam is the remaining $100 - 30$ percent.',
          explanation: '1) The CPT has 6 scoring points. 2) Earning points 1, 2, 4, and 6 is 4 points. 3) The exam is 70% (the CPT is 30%).',
        },
      },
      {
        id: 'cpt1-rules',
        type: 'text' as const,
        content: `## The Rules You Must Not Break

The CPT is completed **in class** under your teacher's supervision.

- ⏱️ You get **at least 12 hours** of in-class time to complete it.
- 🤝 You **may collaborate** while *developing* the program — but the **video and all written responses must be entirely your own**.
- 🚫 Borrowed code (from the internet, a friend, AI tools, or a library) must be **clearly marked** and **cannot** be the part you describe for the procedure/algorithm points.
- 🖊️ You sign that the submission is your own work; plagiarism can void your entire AP score.

> ⚠️ **The single most common disaster:** describing borrowed code as your "student-developed procedure." Points 4 and 5 require code **you wrote**. If you didn't write it, it can't earn those points — and claiming otherwise is an integrity violation.`,
      },
      {
        id: 'cpt1-q-rules',
        type: 'multiple-choice' as const,
        content: `**Rules Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'During the Create Performance Task, which of these is ALLOWED?',
              options: [
                'Collaborating with classmates while developing the program.',
                'Having a friend write your video script and record it for you.',
                'Submitting a procedure you copied from a website as your own student-developed code.',
                'Adding spoken narration over your demonstration video.',
              ],
              correctAnswer: 0,
              explanation: 'Collaboration during program development is explicitly permitted. The video and written responses must be your own, borrowed code can\'t serve as your student-developed procedure, and the video must have no narration.',
            },
            {
              question: 'How is borrowed code (from the internet, a friend, or an AI tool) handled?',
              options: [
                'It must be clearly marked and cannot be the procedure you describe for Points 4 & 5.',
                'It is forbidden entirely; using any is an automatic zero.',
                'It can be used freely and described as your own work.',
                'It only needs to be mentioned in the video.',
              ],
              correctAnswer: 0,
              explanation: 'Borrowed code is allowed but must be clearly marked, and it cannot be the student-developed procedure that earns the procedural-abstraction and algorithm points.',
            },
          ],
        },
      },
      {
        id: 'cpt1-outro',
        type: 'text' as const,
        content: `In Part 2 we lock in **Point 1** — choosing a purpose and capturing the right video.`,
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

**Part 2 of 7 — Point 1: Program Purpose, Input & Output**

---

> 🔑 **The Idea:** Point 1 rewards a program that *does something visible*. The video must show your program **respond to input** and **produce output**, and response 3a must state the program's **purpose** (what problem it addresses) and its **function** (what it does when run).`,
      },
      {
        id: 'cpt2-purpose',
        type: 'text' as const,
        content: `## Purpose vs. Function

These two words are scored separately in 3a — don't blur them.

| Term | Question it answers | Example |
|------|--------------------|---------|
| **Purpose** | *Why* does this program exist? What need does it meet? | "Help a user track daily water intake to stay hydrated." |
| **Function** | *What* happens when it runs? The behavior the user sees. | "The user enters how many cups they drank; the program adds it to a running total and warns them if they're below their goal." |

To earn Point 1, the **video** must demonstrate that function: it has to show the program **receiving input** (a click, typed value, sensor reading, etc.) and **producing output** (text, graphics, sound, or a state change) as a result.

> 💡 A program that only *prints a fixed message* with no input will **not** earn Point 1 — there must be a visible **input → output** relationship.`,
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
                'When the user clicks a fruit, the program adds its calories to a total and displays the new total.',
                'The program helps people eat more healthily.',
                'The program was created because obesity is a public-health concern.',
                'The goal is to make nutrition tracking less tedious.',
              ],
              correctAnswer: 0,
              explanation: 'Function = what the program does when it runs (the observable behavior). The other three describe why the program exists — that is the purpose.',
            },
            {
              question: 'A video shows a program that prints "Hello, world!" and nothing else, with no input. Which scoring point is at risk?',
              options: [
                'Point 1 — the video must show input producing output, and this program takes no input.',
                'Point 4 — procedural abstraction.',
                'Point 2 — data abstraction.',
                'No point is at risk; printing text is enough.',
              ],
              correctAnswer: 0,
              explanation: 'Point 1 requires the video to demonstrate input-driven output. A fixed message with no input fails to show that input → output relationship.',
            },
          ],
        },
      },
      {
        id: 'cpt2-video',
        type: 'text' as const,
        content: `## Capturing a Point-1 Video

A clean video that earns Point 1 follows a simple arc:

1. **Show a starting state** (the screen before input).
2. **Provide input** — type a value, click a button, move a slider.
3. **Show the output change** — a number updates, a sprite moves, a message appears.

> 🔑 Plan your video as a **30-second demo of one feature**, not a tour of the whole app. One crisp input → output cycle is worth more than a rushed montage.

### Video Specs to Memorize

| Spec | Requirement |
|------|------------|
| Length | $\\le 1$ minute |
| File size | $\\le 30$ MB |
| Audio | **None** (no narration) |
| Format | .mp4, .wmv, .avi, or .mov |
| Must show | Input **and** the resulting output |`,
      },
      {
        id: 'cpt2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Classify Each Part of 3a** 🔽

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
          hint3: 'For Point 1 the video must show input (selecting a genre) causing output (a title appearing).',
          explanation: 'The "busy night" statement is the purpose; the "select genre → return title" statement is the function; the video requirement is exactly the input → output demonstration Point 1 wants.',
        },
      },
      {
        id: 'cpt2-specs-recap',
        type: 'text' as const,
        content: `## Don't Lose Point 1 on a Technicality

The hardest part of Point 1 isn't the demo — it's the **specs**. Every year, otherwise-perfect submissions get flagged because the video is too long, too large, or has narration. Commit the numbers to memory.

> 💡 If your raw screen recording is over the limit, trim it to the **single feature** you're demonstrating and re-export at a lower resolution. You only need *one* clean input → output cycle.`,
      },
      {
        id: 'cpt2-input-specs',
        type: 'input-boxes' as const,
        content: `**Video Specs** 🧮

Fill in the official Create Performance Task video limits.

**1)** Maximum video length, in **minutes**?
**2)** Maximum file size, in **MB**?
**3)** How many seconds of **audio narration** are allowed in the video?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '30', '0'],
          hint1: 'The video may be at most one minute long.',
          hint2: 'The file-size cap is thirty megabytes.',
          hint3: 'No narration is permitted at all — zero seconds of audio.',
          explanation: '1) $\\le 1$ minute. 2) $\\le 30$ MB. 3) $0$ seconds — the video must contain no spoken narration.',
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

**Part 3 of 7 — Points 2 & 3: Data Abstraction with a List**

---

> 🔑 **The Idea:** A **list** is the easiest way to earn Points 2 and 3. Point 2 asks that a list **stores data** your program actually uses; Point 3 asks that using the list **manages complexity** — the program would be harder to write *without* it.`,
      },
      {
        id: 'cpt3-list',
        type: 'text' as const,
        content: `## What a List Buys You

A **list** (also called an array or collection) stores **multiple values under one name**. In AP CSP pseudocode, lists are **1-indexed** — the first element is at index $1$.

$$\\text{scores} \\leftarrow [88, 92, 75, 100]$$

| Operation | Pseudocode | Result for the list above |
|-----------|-----------|---------------------------|
| Access first element | $\\text{scores}[1]$ | $88$ |
| Access third element | $\\text{scores}[3]$ | $75$ |
| Length | $\\text{LENGTH}(\\text{scores})$ | $4$ |
| Append a value | $\\text{APPEND}(\\text{scores}, 60)$ | list becomes $[88,92,75,100,60]$ |

> 💡 **Why a list manages complexity (Point 3):** Without a list you'd need a separate variable for *every* value — \`s1, s2, s3, s4, …\`. With a list, **one loop** handles all of them. Adding a fifth score means changing data, not code.`,
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
        content: `## Point 3: Managing Complexity

Point 3 is **not** automatic just because you have a list. You must **explain in 3c** how the list makes the program manageable.

A winning explanation contrasts *with vs. without*:

> "The list \`highScores\` stores all the leaderboard entries. **Without** it, I would need a separate variable for each score and separate code to compare each one. **With** the list, a single \`FOR EACH\` loop checks every entry, so adding more players never requires new code."

> ⚠️ **Trap:** A list that is created but never *used* (e.g., you store names but never read them back) earns Point 2 at best and **fails Point 3**. The data must flow into the program's behavior.`,
      },
      {
        id: 'cpt3-q-managing',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which use of a list best demonstrates "managing complexity" for Point 3?',
              options: [
                'A loop iterates over a list of quiz answers to count how many are correct, instead of writing a separate comparison for each answer.',
                'A list is declared at the top of the program but never accessed again.',
                'Three separate variables x1, x2, x3 each hold one number.',
                'A list stores the program title as a single string.',
              ],
              correctAnswer: 0,
              explanation: 'Looping over a list to replace many near-identical statements is the textbook example of managing complexity. An unused list, separate variables, or a list holding just one value do not reduce complexity.',
            },
            {
              question: 'In AP CSP pseudocode, what is the index of the FIRST element of a list?',
              options: ['1', '0', '-1', 'It depends on the language'],
              correctAnswer: 0,
              explanation: 'AP CSP exam-reference pseudocode is 1-indexed: the first element is at index 1 and the last is at index LENGTH(list).',
            },
          ],
        },
      },
      {
        id: 'cpt3-other-collections',
        type: 'text' as const,
        content: `## Lists Aren't the Only Collection

The rubric says "list **or other collection**." A *dictionary/map*, a *set*, or a *2D list* also counts — as long as it stores multiple values your program uses.

| Collection | Stores | Good when… |
|------------|--------|-----------|
| **List** | ordered values | order matters; you loop in sequence |
| **Dictionary / Map** | key → value pairs | you look things up by name/id |
| **2D list** | a grid of values | board games, tables, images |

> 💡 For most CPT submissions a plain **list** is the safest choice — it's the easiest to loop over (helping Points 3 and 5) and the easiest to explain in 3b.`,
      },
      {
        id: 'cpt3-dropdown-collections',
        type: 'dropdown-select' as const,
        content: `**Which Collection & Why** 🔽

Pick the best answer for each.`,
        exercise: {
          dropdowns: [
            {
              label: 'You need to look up a student\'s grade by their name. Best collection:',
              options: ['Dictionary / Map', 'Single variable', 'No collection needed'],
            },
            {
              label: 'A list earns Point 3 (managing complexity) when:',
              options: ['A loop processes its elements instead of repeated code', 'It is declared but never used', 'It holds exactly one value'],
            },
            {
              label: 'The first element of an AP CSP list is at index:',
              options: ['1', '0', '-1'],
            },
          ],
          correctAnswers: ['Dictionary / Map', 'A loop processes its elements instead of repeated code', '1'],
          hint1: 'Looking up a value *by a key* (the name) points to a dictionary/map.',
          hint2: 'Point 3 is about *reducing* complexity — a loop replacing repeated statements.',
          hint3: 'AP CSP pseudocode is 1-indexed.',
          explanation: 'A dictionary maps a key (name) to a value (grade); a loop over a list is what manages complexity; and AP CSP lists are 1-indexed.',
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

**Part 4 of 7 — Point 4: Procedural Abstraction with a Parameter**

---

> 🔑 **The Idea:** Point 4 requires a **student-developed procedure** (a function/method *you* wrote) that has **at least one parameter**, where **changing the parameter changes what the procedure does**. A procedure with no parameters — or with a parameter that's never used — does **not** earn Point 4.`,
      },
      {
        id: 'cpt4-procedure',
        type: 'text' as const,
        content: `## Anatomy of a Procedure

A **procedure** is a named, reusable block of code. A **parameter** is an input variable in its definition; an **argument** is the actual value you pass when you call it.

$$\\text{PROCEDURE } \\texttt{areaOfRectangle}(\\texttt{width}, \\texttt{height})$$

\`\`\`
PROCEDURE areaOfRectangle(width, height)
{
    area ← width * height
    RETURN area
}
\`\`\`

| Term | In the example |
|------|----------------|
| Procedure name | \`areaOfRectangle\` |
| Parameters | \`width\`, \`height\` |
| A **call** | \`areaOfRectangle(4, 5)\` |
| Arguments in that call | \`4\` and \`5\` |
| Returned value | \`20\` |

> 🔑 **The parameter must matter.** \`areaOfRectangle(4, 5)\` returns $20$ but \`areaOfRectangle(2, 5)\` returns $10$ — the result *depends on* the parameters. That dependency is exactly what Point 4 checks.`,
      },
      {
        id: 'cpt4-q-procedure',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which procedure could earn Point 4 (procedural abstraction)?',
              options: [
                'PROCEDURE discountedPrice(price, percentOff) — returns price reduced by percentOff.',
                'PROCEDURE showLogo() — always displays the same image, takes no parameters.',
                'PROCEDURE greet(name) — ignores name and always prints "Hello!".',
                'A built-in library function you imported but did not write.',
              ],
              correctAnswer: 0,
              explanation: 'Point 4 needs a student-written procedure with a parameter that affects behavior. discountedPrice uses both parameters to change its result. showLogo has no parameter; greet has a parameter it never uses; the library function was not written by the student.',
            },
            {
              question: 'In the call discountedPrice(50, 20), the values 50 and 20 are called the ___.',
              options: ['arguments', 'parameters', 'return values', 'data abstractions'],
              correctAnswer: 0,
              explanation: 'The values passed into a call are arguments. The variable names in the procedure DEFINITION (price, percentOff) are the parameters.',
            },
          ],
        },
      },
      {
        id: 'cpt4-trace',
        type: 'text' as const,
        content: `## Tracing a Call

Reading what a procedure *returns* for given arguments is the skill 3d (testing) and the exam both reward.

\`\`\`
PROCEDURE applyTax(price, rate)
{
    tax ← price * rate
    RETURN price + tax
}
\`\`\`

For \`applyTax(100, 0.08)\`:

$$\\text{tax} = 100 \\times 0.08 = 8 \\quad\\Rightarrow\\quad \\text{RETURN } 100 + 8 = 108$$

> 💡 To describe "two calls with different arguments" in 3d, just trace your procedure twice with different inputs and report each result — like \`applyTax(100, 0.08) = 108\` and \`applyTax(50, 0.10) = 55\`.`,
      },
      {
        id: 'cpt4-input-trace',
        type: 'input-boxes' as const,
        content: `**Trace the Procedure** 🧮

\`\`\`
PROCEDURE applyTax(price, rate)
{
    tax ← price * rate
    RETURN price + tax
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
        content: `## Three Ways to Lose Point 4

A procedure exists, but it still might not count:

| Mistake | Why it fails Point 4 |
|---------|----------------------|
| No parameter | The point literally requires $\\ge 1$ parameter |
| Parameter never used | If the result is the same no matter the argument, the parameter doesn't *manage* anything |
| Not student-written | A built-in or copied function isn't *your* abstraction |

> ⚠️ The deepest trap is the **unused parameter**: \`PROCEDURE greet(name)\` that always prints "Hi!" has a parameter, but because \`name\` never changes the output, it does **not** demonstrate procedural abstraction.`,
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
              label: 'For Point 4, the parameter must:',
              options: ['affect what the procedure does', 'be unused', 'be a whole number'],
            },
          ],
          correctAnswers: ['parameters', 'arguments', 'affect what the procedure does'],
          hint1: 'The variable names in the PROCEDURE definition are parameters.',
          hint2: 'The actual values passed in a call are arguments.',
          hint3: 'Point 4 requires the parameter to change the procedure\'s behavior.',
          explanation: 'Definition names = parameters; values passed in = arguments; and the parameter must affect behavior to earn Point 4.',
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

**Part 5 of 7 — Point 5: Algorithm with Sequencing, Selection & Iteration**

---

> 🔑 **The Idea:** Point 5 requires that the procedure from Point 4 contains an **algorithm** built from **all three** of these working together: **sequencing**, **selection**, and **iteration**. Miss any one and you miss the point.`,
      },
      {
        id: 'cpt5-three',
        type: 'text' as const,
        content: `## The Three Building Blocks

Every algorithm is built from three constructs:

| Construct | What it means | Pseudocode signal |
|-----------|---------------|-------------------|
| **Sequencing** | Steps run in order, top to bottom | one line after another |
| **Selection** | A choice between paths | \`IF\` / \`ELSE\` |
| **Iteration** | Repeating steps | \`REPEAT\` / \`FOR EACH\` / \`UNTIL\` |

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
    RETURN count
}
\`\`\`

> 🔑 This **one procedure** hits all three: statements in order (**sequencing**), a loop over the list (**iteration**), and an \`IF\` decision inside (**selection**). That is exactly the structure Point 5 wants — and it reuses your list (Points 2–3) and your parameter (Point 4).`,
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
              label: '\`count ← 0\` then later \`RETURN count\` (in order)',
              options: ['Iteration', 'Selection', 'Sequencing'],
            },
          ],
          correctAnswers: ['Iteration', 'Selection', 'Sequencing'],
          hint1: 'A loop that repeats over each element is iteration.',
          hint2: 'An IF that chooses whether to run a block is selection.',
          hint3: 'Statements that simply run one after another in order are sequencing.',
          explanation: 'FOR EACH = iteration, IF = selection, and the ordered statements (initialize, then loop, then return) = sequencing. All three appear in one procedure, satisfying Point 5.',
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

> 💡 Changing the **argument** \`cutoff\` changes the answer: \`countPassing([88,92,75,100], 90)\` returns $2$ (only $92$ and $100$ pass). Different arguments → different results is your 3d testing evidence.`,
      },
      {
        id: 'cpt5-input-trace',
        type: 'input-boxes' as const,
        content: `**Trace the Algorithm** 🧮

Using \`countPassing(scores, cutoff)\` from above with $\\text{scores} = [70, 85, 60, 95, 50]$:

**1)** \`countPassing(scores, 80)\` returns ___?
**2)** \`countPassing(scores, 60)\` returns ___?  *(count values $\\ge 60$)*
**3)** \`countPassing(scores, 100)\` returns ___?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '4', '0'],
          hint1: 'Which of 70, 85, 60, 95, 50 are $\\ge 80$? That gives the first answer.',
          hint2: 'Which are $\\ge 60$? Note that $60 \\ge 60$ is TRUE.',
          hint3: 'Which are $\\ge 100$? None of these reach 100.',
          explanation: '1) $\\ge 80$: 85 and 95 → 2. 2) $\\ge 60$: 70, 85, 60, 95 → 4 (50 is excluded). 3) $\\ge 100$: none → 0.',
        },
      },
      {
        id: 'cpt5-all-three',
        type: 'text' as const,
        content: `## The "All Three" Trap

Point 5 is **all-or-nothing on three constructs**. The most common near-miss is a procedure that has sequencing and a loop — but no decision inside.

| Procedure has… | Earns Point 5? |
|----------------|----------------|
| sequencing + selection + iteration | ✅ Yes |
| sequencing + iteration, no IF | ❌ No (missing selection) |
| sequencing + selection, no loop | ❌ No (missing iteration) |

> 🔑 **The fix is usually one line:** drop an \`IF\` *inside* your loop. The \`countPassing\` procedure works precisely because the \`IF (s ≥ cutoff)\` lives **inside** the \`FOR EACH\` — that nesting gives you all three at once.`,
      },
      {
        id: 'cpt5-q-constructs',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A procedure loops over a list and adds every element to a running total, but contains no IF statement. Does it satisfy Point 5?',
              options: [
                'No — it has sequencing and iteration but is missing selection.',
                'Yes — a loop is enough for Point 5.',
                'No — it is missing iteration.',
                'Yes — Point 5 only needs sequencing.',
              ],
              correctAnswer: 0,
              explanation: 'Point 5 requires sequencing AND selection AND iteration. A loop with no IF has sequencing and iteration but lacks selection, so it does not earn Point 5.',
            },
            {
              question: 'In countPassing, which feature provides the SELECTION required by Point 5?',
              options: [
                'The IF (s ≥ cutoff) inside the loop.',
                'The FOR EACH loop.',
                'The RETURN statement.',
                'The count ← 0 initialization.',
              ],
              correctAnswer: 0,
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

**Part 6 of 7 — The Written Responses (3a–3d) & Point 6: Testing**

---

> 🔑 **The Idea:** The written responses are where readers *see* the points. Even perfect code loses points if the prose doesn't point to it. Each prompt maps to specific scoring rows — answer the exact question asked, nothing extra.`,
      },
      {
        id: 'cpt6-prompts',
        type: 'text' as const,
        content: `## The Four Written Prompts

| Prompt | Asks for | Feeds points |
|--------|----------|--------------|
| **3a** | Program purpose & function; what the video shows | Point 1 |
| **3b** | Your **data abstraction**: name the list, explain how it manages complexity | Points 2 & 3 |
| **3c** | Your **procedure**: paste it, name it, explain how it works | Points 4 & 5 |
| **3d** | **Testing**: two calls with **different arguments**, the condition each tests, and the result | Point 6 |

> 💡 In the **Personalized Project Reference (PPR)** you paste a screenshot of your **list code** and your **procedure code** (with line numbers). The written responses then *refer* to that code — readers grade the code in your PPR, not loose snippets.`,
      },
      {
        id: 'cpt6-q-prompts',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Response 3d (Testing / Point 6) asks you to describe:',
              options: [
                'Two calls to your procedure with different arguments, the condition each tests, and the result of each call.',
                'The purpose of the entire program in one sentence.',
                'The name of every variable in your program.',
                'Why you chose your programming language.',
              ],
              correctAnswer: 0,
              explanation: 'Point 6 (testing) requires describing two calls to the procedure with different arguments, what each call tests, and the result each produces — showing the procedure behaves correctly under different conditions.',
            },
            {
              question: 'Where do you place the screenshots of your list code and procedure code?',
              options: [
                'In the Personalized Project Reference (PPR).',
                'In the video only.',
                'Nowhere — readers run your program themselves.',
                'In a separate emailed attachment.',
              ],
              correctAnswer: 0,
              explanation: 'The two required code segments (your list and your procedure) go in the Personalized Project Reference, which the written responses then reference by line number.',
            },
          ],
        },
      },
      {
        id: 'cpt6-testing',
        type: 'text' as const,
        content: `## Writing a Clean 3d (Testing)

A full-credit 3d does **three things** for **each** of two calls:

1. **State the call** with specific arguments — e.g., \`countPassing(scores, 80)\`.
2. **State the condition it tests** — e.g., "tests a normal cutoff where some scores pass and some fail."
3. **State the result** — e.g., "returns $3$."

> ⚠️ **Trap:** Using the **same argument twice** (or two calls that hit the *same* path through the code) does not demonstrate different behavior. Choose calls that exercise **different branches** — e.g., one where the \`IF\` is true and one where it's mostly false.`,
      },
      {
        id: 'cpt6-dropdown',
        type: 'dropdown-select' as const,
        content: `**Map Prompt → Points** 🔽

Match each written-response prompt to the scoring points it primarily addresses.`,
        exercise: {
          dropdowns: [
            {
              label: '3b (your list / data abstraction)',
              options: ['Points 2 & 3', 'Points 4 & 5', 'Point 1', 'Point 6'],
            },
            {
              label: '3c (your procedure & algorithm)',
              options: ['Points 4 & 5', 'Points 2 & 3', 'Point 1', 'Point 6'],
            },
            {
              label: '3d (two calls, different arguments)',
              options: ['Point 6', 'Point 1', 'Points 2 & 3', 'Points 4 & 5'],
            },
          ],
          correctAnswers: ['Points 2 & 3', 'Points 4 & 5', 'Point 6'],
          hint1: 'The list is the DATA abstraction (storing + managing complexity).',
          hint2: 'The procedure carries procedural abstraction AND the sequencing/selection/iteration algorithm.',
          hint3: 'Two calls with different arguments is the testing evidence.',
          explanation: '3b → data abstraction (Points 2 & 3), 3c → procedure + algorithm (Points 4 & 5), 3d → testing (Point 6). 3a (not shown) covers Point 1.',
        },
      },
      {
        id: 'cpt6-checklist',
        type: 'text' as const,
        content: `## A 3d Sanity Checklist

Before you submit, count the pieces of your testing response. A complete 3d names, for **each** of two calls, the **call**, the **condition it tests**, and the **result** — so two complete calls means **6 pieces of information** in total.

> 💡 The two calls should travel **different paths**: pick one argument that makes your \`IF\` mostly true and another that makes it mostly false. Identical-behavior calls don't show your algorithm handles different conditions.`,
      },
      {
        id: 'cpt6-input-3d',
        type: 'input-boxes' as const,
        content: `**Count the Pieces** 🧮

**1)** How many calls to your procedure must 3d describe?
**2)** For each call, you state the call, the condition it tests, and the result — how many items is that per call?
**3)** Across both calls, how many items of information should a complete 3d contain? *(multiply)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '3', '6'],
          hint1: '3d asks for two calls with different arguments.',
          hint2: 'Per call: the call itself, the condition tested, and the result — count them.',
          hint3: '$2 \\text{ calls} \\times 3 \\text{ items} = ?$',
          explanation: '1) 2 calls. 2) 3 items each (call, condition, result). 3) $2 \\times 3 = 6$ items total for a full-credit 3d.',
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

You now know all six points, both required code segments, and all four written prompts. Let's lock it in.`,
      },
      {
        id: 'cpt7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Point | Earned by | Shown in |
|-------|-----------|----------|
| **1** Purpose & Function | Video shows input → output; 3a names purpose & function | Video + 3a |
| **2** Data Abstraction | A list stores data the program uses | PPR list + 3b |
| **3** Managing Complexity | List makes the program easier than without it | 3b |
| **4** Procedural Abstraction | Student-written procedure with a parameter that matters | PPR procedure + 3c |
| **5** Algorithm | That procedure has sequencing + selection + iteration | 3c |
| **6** Testing | Two calls, different arguments, conditions & results | 3d |

> 🔑 **The whole strategy in one line:** build **one list** (Points 2–3) and **one parameterized procedure containing a loop with an IF** (Points 4–5), demonstrate it on video (Point 1), then describe two contrasting calls (Point 6).

> ⚠️ **Integrity reminder:** the procedure and algorithm you describe must be **yours**. Borrowed/AI-generated code can't earn Points 4 and 5 and must be clearly marked.`,
      },
      {
        id: 'cpt7-dropdown-review',
        type: 'dropdown-select' as const,
        content: `**Diagnose the Missing Point** 🔽

Each student is missing exactly one point. Pick which one.`,
        exercise: {
          dropdowns: [
            {
              label: 'Procedure has a parameter and an IF, but no loop:',
              options: ['Point 5 (no iteration)', 'Point 4 (no parameter)', 'Point 2 (no list)'],
            },
            {
              label: 'Program runs but the video shows only a fixed message with no input:',
              options: ['Point 1 (no input → output)', 'Point 6 (testing)', 'Point 3 (managing complexity)'],
            },
            {
              label: 'A list is declared but never read or looped over:',
              options: ['Point 3 (not managing complexity)', 'Point 4 (procedure)', 'Point 1 (purpose)'],
            },
          ],
          correctAnswers: ['Point 5 (no iteration)', 'Point 1 (no input → output)', 'Point 3 (not managing complexity)'],
          hint1: 'Point 5 needs sequencing + selection + iteration — a missing loop kills iteration.',
          hint2: 'Point 1 needs the video to show input causing output.',
          hint3: 'A list that is never used can earn Point 2 but not Point 3.',
          explanation: 'No loop → Point 5 lost; no input → output in the video → Point 1 lost; an unused list → Point 3 lost (though it may still earn Point 2).',
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
              question: 'A student\'s procedure has a parameter, sequencing, and an IF statement, but no loop. Which point is at risk?',
              options: [
                'Point 5 — the algorithm needs iteration, which is missing.',
                'Point 4 — there is no parameter.',
                'Point 2 — there is no list.',
                'Point 1 — the program has no purpose.',
              ],
              correctAnswer: 0,
              explanation: 'Point 5 requires sequencing AND selection AND iteration. With sequencing and selection (the IF) but no loop, iteration is missing, so Point 5 is not earned. Point 4 is still fine because the parameter is present.',
            },
            {
              question: 'Which choice would JEOPARDIZE the integrity of the submission?',
              options: [
                'Describing code copied from an online tutorial as your own student-developed procedure for Points 4 & 5.',
                'Collaborating with a classmate while developing the program.',
                'Using a list to manage complexity.',
                'Tracing your procedure with two different arguments in 3d.',
              ],
              correctAnswer: 0,
              explanation: 'Borrowed code must be clearly marked and cannot serve as your student-developed procedure. Claiming it as your own is a plagiarism violation. Collaboration during development is allowed; the other choices are exactly what you should do.',
            },
          ],
        },
      },
      {
        id: 'cpt7-final-words',
        type: 'text' as const,
        content: `## One Last Strategy Note

If you remember nothing else: **choose your list and your procedure first, then build the rest of the program around them.** Those two pieces of code carry five of the six points, and the written responses simply *point a reader to them*.

> 🔑 A simple, fully-explained program that nails one list and one parameterized loop-with-an-IF scores far better than an ambitious program where the reader can't find the required parts.

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
              question: 'The Create Performance Task is worth what fraction of the AP CSP score, and how many scoring points does it have?',
              options: [
                '30% of the score; 6 points',
                '70% of the score; 5 points',
                '50% of the score; 8 points',
                '100% of the score; 6 points',
              ],
              correctAnswer: 0,
              explanation: 'The CPT is 30% of the final AP score (the multiple-choice exam is 70%) and is scored against 6 points.',
            },
            {
              question: 'For \`countPassing([90, 70, 85], 80)\` — counting values ≥ 80 — what does the procedure return?',
              options: ['2', '3', '1', '0'],
              correctAnswer: 0,
              explanation: 'Values $\\ge 80$ are 90 and 85 (70 fails), so the count is 2.',
            },
            {
              question: 'Which combination earns BOTH Points 4 and 5 with a single procedure?',
              options: [
                'A student-written procedure with a parameter that affects behavior, containing sequencing, selection, and iteration.',
                'A built-in sort function with no IF or loop you can see.',
                'A procedure with a parameter but only sequential statements (no IF, no loop).',
                'A list that stores data but no procedure at all.',
              ],
              correctAnswer: 0,
              explanation: 'Point 4 needs a student-written procedure with a meaningful parameter; Point 5 needs that procedure to contain sequencing + selection + iteration. Only the first option satisfies both at once.',
            },
          ],
        },
      },
    ],
  },
]
