// BI3 — csp-algorithms-programming. Bespoke AP-quality content.
// No markdown code-span backticks; use **bold UPPERCASE** for pseudocode references.

import type { Topic } from '../types';

const cspAlgorithmsProgramming: Topic = {
  slug: 'csp-algorithms-programming',
  display: 'Algorithms & Programming',
  emoji: '💻',
  exportPrefix: 'cspAlgorithmsProgramming',
  idPrefix: 'cspap',
  parts: {
    2: {
      introMd: `## From Algorithm to Program

An **algorithm** is a step-by-step plan; a **program** is that plan written in a language a machine can run. The bridge between them is **expressing** sequence, selection, and iteration with the precise vocabulary the language demands.

| Concept | Algorithm version | Program version |
|---------|-------------------|-----------------|
| Storage | "remember the value" | declare a **variable**, assign with ← |
| Choice | "if … otherwise …" | **IF** / **ELSE** with a Boolean expression |
| Repetition | "do this n times" | **REPEAT N TIMES** or **REPEAT UNTIL** |
| Reuse | "do step X again here" | call a **procedure** |`,
      quiz1: [
        {
          q: 'Which is the most precise distinction between an algorithm and a program?',
          opts: [
            'Algorithms are written only in plain English; programs must always be written in compiled code.',
            'Algorithms are conceptual sequences of steps; programs are algorithms expressed in a runnable language.',
            'Algorithms always run faster than programs because algorithms skip the language-translation step.',
            'Programs always contain loops; algorithms by definition never contain any kind of repetition step.',
          ],
          a: 1,
          exp: 'An algorithm is the *idea*; a program is its concrete expression in a runnable language.',
        },
        {
          q: 'You have a working pseudocode algorithm but no program. Which step is the most likely next move?',
          opts: [
            'Run the pseudocode algorithm directly on the computer without any translation step in between.',
            'Translate the pseudocode into a programming language and test it on small sample inputs first.',
            'Add explanatory comments to the pseudocode itself before writing any actual program code at all.',
            'Replace the working pseudocode algorithm with a simpler one before writing any program code at all.',
          ],
          a: 1,
          exp: 'Pseudocode itself does not run; you implement it in a language and verify with tests.',
        },
      ],
      contentMd: `## Worked Translation: Pseudocode → Program

**Pseudocode**

\u00A0\u00A0\u00A0\u00A0PROCEDURE areaOfRect(w, h) {
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0RETURN w * h
\u00A0\u00A0\u00A0\u00A0}

**Equivalent ideas in any language**

- A function/method called areaOfRect.
- Two parameters w and h (numbers).
- Returns a number.

**Calling it**

\u00A0\u00A0\u00A0\u00A0a ← areaOfRect(3, 4)
\u00A0\u00A0\u00A0\u00A0DISPLAY(a)

The call evaluates each argument **before** entering the procedure. Inside the procedure, the parameters are local — assigning to w would not affect the caller.

## Common Statement Types

| Statement | Pseudocode shape | Effect |
|-----------|------------------|--------|
| Assignment | x ← expr | Compute right side, store in x. |
| Conditional | IF (cond) {…} ELSE {…} | Pick one branch. |
| Loop | REPEAT N TIMES {…} | Run block N times (N captured at start). |
| Procedure call | name(args) | Pause caller, run procedure, return value. |
| Output | DISPLAY(value) | Show value to user. |
| Input | INPUT() | Get a value from the user. |`,
      inputs: {
        prompts: [
          'A reusable named block of code is called a _______.',
          'In w ← w + 1, the operator ← means _______.',
          'Values that are given to a procedure when it is called are called _______.',
        ],
        answers: ['procedure', 'assignment', 'arguments'],
        hints: ['AP CSP word for function.', 'It is not equality.', 'Caller-side word; "parameters" is the procedure-side word.'],
        explanation: 'Procedures package reusable steps. ← assigns a value. Caller passes arguments; procedure receives them as parameters.',
      },
      dropdowns: {
        items: [
          { label: 'In areaOfRect(3, 4), the values 3 and 4 are ___', options: ['arguments', 'parameters', 'returns', 'variables'] },
          { label: 'In PROCEDURE areaOfRect(w, h), the names w and h are ___', options: ['parameters', 'arguments', 'returns', 'globals'] },
          { label: 'After RETURN x, the procedure ___', options: ['exits immediately and sends x back', 'continues executing the next line', 'sets a global named x', 'discards x'] },
        ],
        correct: ['arguments', 'parameters', 'exits immediately and sends x back'],
        hints: ['Caller side.', 'Procedure header side.', 'RETURN ends execution of the procedure.'],
        explanation: 'Arguments are values supplied; parameters are the names that bind them inside the procedure. RETURN ends the procedure and yields the value.',
      },
      strategyMd: `## AP Exam Strategy: Translation

- The exam will give you BOTH a block-style and a text-style version of pseudocode. They mean the same thing — pick whichever you read faster.
- A procedure CALL replaces the call site with the procedure's RETURN value.
- Parameters are **local**: changing a parameter inside doesn't change the caller's variable.
- Watch the difference: DISPLAY(x) shows x but doesn't return it; RETURN x yields a value but doesn't print.`,
      applied: [
        {
          q: 'A program defines:\n\nPROCEDURE bump(n) { n ← n + 1 }\nx ← 5\nbump(x)\nDISPLAY(x)\n\nWhat does it display?',
          opts: ['5', '6', '0', 'undefined'],
          a: 0,
          exp: 'n is a local parameter. bump(x) gives n the value 5 and increments n locally; the caller\'s x is unchanged.',
        },
        {
          q: 'A team must convert a working algorithm into a runnable program. Which sequence is most appropriate?',
          opts: [
            'Write the program, ship it, then write the algorithm.',
            'Translate pseudocode → run on small test inputs → fix bugs → run on representative inputs.',
            'Translate pseudocode → ship → wait for users to report bugs.',
            'Skip pseudocode and write directly in production.',
          ],
          a: 1,
          exp: 'Iterative testing on small inputs first catches translation errors cheaply.',
        },
      ],
    },
    3: {
      introMd: `## Programming Patterns You Will See Again and Again

Once you can translate algorithms into programs, you'll notice the same shapes recur. The AP exam tests these patterns directly.

| Pattern | Purpose |
|---------|---------|
| **Guard clause** | Return early on bad input so the main logic stays clean. |
| **Loop with accumulator** | Build a sum, product, count, or list. |
| **Helper procedure** | Hide a sub-task behind a name. |
| **Boolean flag** | Track "did this happen?" across iterations. |`,
      quiz1: [
        {
          q: 'A procedure should return 0 immediately if its input list is empty. Which structure is best?',
          opts: [
            'A guard clause: IF (LENGTH(list) = 0) { RETURN 0 } at the very top of the procedure body.',
            'A nested loop placed at the bottom of the procedure that handles the empty case after the work.',
            'Skip the empty-list check entirely and let the main loop body crash on the empty input naturally.',
            'Refuse to handle empty lists in this procedure and require every caller to filter them out first.',
          ],
          a: 0,
          exp: 'Guard clauses near the top reject bad inputs early so the main code can assume valid data.',
        },
        {
          q: 'A loop should set a flag found ← TRUE the first time list[i] = target. Which approach guarantees correctness AND avoids unnecessary work?',
          opts: [
            'Set found ← TRUE inside the IF and continue iterating through the rest of the list anyway.',
            'Set found ← TRUE inside the IF and RETURN immediately (or break) once the first match is found.',
            'Initialize found ← TRUE before the loop even starts and let the loop body verify each element.',
            'Set found ← list[i] when found, so the variable holds the matching value rather than a Boolean.',
          ],
          a: 1,
          exp: 'Returning on first match is both correct and efficient (best case O(1)).',
        },
      ],
      contentMd: `## Worked Pattern: Boolean Flag

\u00A0\u00A0\u00A0\u00A0PROCEDURE allPositive(nums) {
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0FOR EACH n IN nums {
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0IF (n ≤ 0) { RETURN FALSE }
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0}
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0RETURN TRUE
\u00A0\u00A0\u00A0\u00A0}

**Trick:** instead of a Boolean variable, the procedure RETURNs early on the first counter-example. RETURN TRUE at the end runs only when no counter-example was found. This is the cleanest "for-all" pattern.

## Worked Pattern: Helper Procedure

A complicated task becomes readable when split:

\u00A0\u00A0\u00A0\u00A0PROCEDURE isWeekend(day) {
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0RETURN day = "Sat" OR day = "Sun"
\u00A0\u00A0\u00A0\u00A0}
\u00A0\u00A0\u00A0\u00A0PROCEDURE shouldOpenStore(day, isHoliday) {
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0IF (isHoliday) { RETURN FALSE }
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0RETURN NOT isWeekend(day)
\u00A0\u00A0\u00A0\u00A0}

The shouldOpenStore reader doesn't have to think about what "weekend" means — it's been **abstracted** behind a name.

## Worked Pattern: Accumulator With Filter

\u00A0\u00A0\u00A0\u00A0PROCEDURE sumPositive(nums) {
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0total ← 0
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0FOR EACH n IN nums {
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0IF (n > 0) { total ← total + n }
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0}
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0RETURN total
\u00A0\u00A0\u00A0\u00A0}

The IF inside the loop is the **filter**; total is the **accumulator**. Together they implement "sum of positive elements".`,
      inputs: {
        prompts: [
          'An IF check at the start of a procedure that exits early on bad input is called a _______ clause.',
          'A small named procedure that does one sub-task and is called by other procedures is called a _______.',
          'A "for-all" check is implemented by RETURNing FALSE on the first _______-example.',
        ],
        answers: ['guard', 'helper', 'counter'],
        hints: ['It "guards" the main logic.', 'Such procedures abstract details.', 'A single counter-example disproves a universal claim.'],
        explanation: 'Guard clauses, helpers, and early-exit on counter-examples are core programming patterns.',
      },
      dropdowns: {
        items: [
          { label: 'A "there exists" check is implemented by RETURNing TRUE on the first ___', options: ['match', 'counter-example', 'iteration', 'parameter'] },
          { label: 'When a helper is reused 5 times across a program, the main benefit is ___', options: ['readability and single-point-of-fix', 'speed', 'memory savings', 'shorter file size'] },
          { label: 'The accumulator pattern initializes the accumulator with the operation\'s ___ value', options: ['identity', 'maximum', 'random', 'last'] },
        ],
        correct: ['match', 'readability and single-point-of-fix', 'identity'],
        hints: ['One match proves existence.', 'Helpers centralize behavior.', 'Adding 0, multiplying by 1.'],
        explanation: 'Existence: first match. Helpers create a single fix-point. Accumulators start at the operation identity (0 for sum, 1 for product, [] for list).',
      },
      strategyMd: `## AP Exam Strategy: Recognizing Patterns

- "Returns TRUE if every X is Y" → for-all → early RETURN FALSE on counter-example.
- "Returns TRUE if some X is Y" → exists → early RETURN TRUE on first match.
- "Returns the count / sum / product / list of Y" → accumulator with appropriate identity.
- Spotting the pattern in the first 5 seconds saves all the time you'd waste line-tracing a 20-line procedure.`,
      applied: [
        {
          q: 'A procedure should return TRUE if any element of list is negative. The student writes:\n\nresult ← FALSE\nFOR EACH x IN list { IF (x < 0) { result ← TRUE } ELSE { result ← FALSE } }\nRETURN result\n\nWhat is the bug?',
          opts: [
            'Nothing is wrong.',
            'The ELSE branch resets result to FALSE, so only the LAST element decides the answer.',
            'result should be a list, not a Boolean.',
            'FOR EACH cannot be used on a list.',
          ],
          a: 1,
          exp: 'The ELSE clobbers prior matches. Either remove the ELSE, or RETURN TRUE on first match.',
        },
        {
          q: 'A team has six places in their codebase that compute "is this a weekend day?". Each implements the check inline. They later need to add Friday to the weekend (cultural calendar). Which design choice would have prevented the multi-place fix?',
          opts: [
            'Inlining the check is fine; just edit all six places.',
            'Extracting an isWeekend(day) helper procedure so all callers update from one fix.',
            'Renaming the variables.',
            'Adding more comments to each call site.',
          ],
          a: 1,
          exp: 'Helper procedures create a single point of change — the central abstraction win.',
        },
      ],
    },
    4: {
      introMd: `## How Code Connects Across the Course

Programming sits at the center of CSP. Procedures connect to **abstraction** (Big Idea 1), accumulators to **data** (BI 2), client/server programs to **internet** (BI 4), and design choices to **impact** (BI 5).

| Connection | Example |
|-----------|---------|
| Procedures ↔ Abstraction | A name hides an implementation. |
| Lists ↔ Data | Programs read, transform, and write data structures. |
| Conditionals ↔ Logic | Boolean expressions encode rules. |
| Programs ↔ Impact | Whose voice is in the data the program acts on? |`,
      quiz1: [
        {
          q: 'Wrapping a 30-line algorithm inside a named PROCEDURE primarily helps because it ___',
          opts: [
            'runs faster.',
            'lets the caller use the algorithm without understanding its internal steps.',
            'compresses memory.',
            'guarantees correctness.',
          ],
          a: 1,
          exp: 'Procedures are the canonical abstraction tool — separating "what" from "how".',
        },
        {
          q: 'A program reads users\' birthdates and computes their ages. Which CSP cross-topic concern is most directly raised when the program rejects 4-digit birth years before 1925?',
          opts: [
            'Big Idea 5: such hard cuts can introduce age-based bias against older users.',
            'The program is too short.',
            'The program uses too many procedures.',
            'The program needs to be sorted.',
          ],
          a: 0,
          exp: 'Boundary choices in code become real-world inclusions/exclusions — an impact-of-computing concern.',
        },
      ],
      contentMd: `## Procedures as Abstraction

A procedure header **isWeekend(day)** is a contract:

- Inputs: a day (string).
- Output: a Boolean.
- Side effects: none.

Callers can rely on this contract without reading the body. If you later switch the implementation (e.g., add Friday), you change one place and all callers update.

## Lists as the Data Bridge

Programs almost always operate on **lists** (BI 2 calls them collections). The connection:

- INPUT brings raw values in.
- A loop transforms or filters the list.
- DISPLAY or a RETURN sends results back out.

This pipeline is the shape of nearly every real program.

## Programs and Impact

A scheduling program that uses ZIP code as a tiebreaker for hospital appointment priority will systematically affect outcomes by neighborhood. The choice happens at one IF statement, but its effect is at the **scale** of the user base. Programmers carry responsibility for these design choices.`,
      inputs: {
        prompts: [
          'Hiding implementation details behind a procedure name is called _______.',
          'A series of input → transform → output stages on data is called a _______.',
          'When a program\'s design decision affects a group of users systematically, this raises a question of algorithmic _______.',
        ],
        answers: ['abstraction', 'pipeline', 'bias'],
        hints: ['CED Big Idea 1 vocabulary.', 'Like an assembly line.', 'Systematic skew in outcomes.'],
        explanation: 'Abstraction names ideas. Pipelines move data. Bias arises when design choices affect groups unevenly.',
      },
      dropdowns: {
        items: [
          { label: 'A procedure that does one well-defined thing is best described as having ___', options: ['high cohesion', 'low cohesion', 'no parameters', 'global scope'] },
          { label: 'Two procedures that share no state and could be developed independently are ___', options: ['loosely coupled', 'tightly coupled', 'recursive', 'concurrent'] },
          { label: 'A program whose decisions affect millions of users should be evaluated for ___', options: ['unintended impact on subgroups', 'shorter line count', 'fewer comments', 'more loops'] },
        ],
        correct: ['high cohesion', 'loosely coupled', 'unintended impact on subgroups'],
        hints: ['Single, focused purpose.', 'Few shared dependencies.', 'Scale amplifies design choices.'],
        explanation: 'Good design favors high-cohesion, loose-coupling procedures. At scale, programmers must consider subgroup impact.',
      },
      strategyMd: `## AP Exam Strategy: Cross-Topic Code Questions

- If the prompt frames a code change as "easier maintenance" or "single source of truth", the answer is usually about extracting a procedure (abstraction).
- If a question describes outcomes that "differ by group", suspect Big Idea 5 (impact / bias).
- Look for the word "scale": at scale, small biases become large harms.
- Don't confuse efficiency (time/space) with maintainability (procedures, naming) — distractors mix these.`,
      applied: [
        {
          q: 'A team rewrites three nested IF statements as one procedure call categoryFor(score). Which improvement does this primarily realize?',
          opts: [
            'Improved running-time efficiency.',
            'Improved readability and a single point of update if the categories ever change.',
            'Reduced data-storage requirements.',
            'Faster Internet response times.',
          ],
          a: 1,
          exp: 'Extracting a procedure does not change time complexity; it improves readability and centralizes the rule.',
        },
        {
          q: 'A loan-decision program denies applicants whose monthly income is below a threshold. After deployment, the team discovers the threshold disproportionately denies applicants from a specific region with lower median wages but equal repayment history. The most defensible response is to ___',
          opts: [
            'leave the threshold; the program ran exactly as designed.',
            'review the criterion in light of the disparate impact and consult stakeholders before redeploying.',
            'lower the threshold for that region only without other review.',
            'remove the income field entirely.',
          ],
          a: 1,
          exp: 'Disparate impact requires review and stakeholder input — neither blind acceptance nor an ad hoc patch.',
        },
      ],
    },
    5: {
      introMd: `## How Programming Has Changed Over Time

Programming evolved from machine code → assembly → high-level languages → today's mix of cloud, AI-assisted, and visual block-based environments. Each shift trades a different concern.

| Era | Trade |
|-----|-------|
| Machine code (1950s) | Total control, zero portability. |
| High-level languages (1960s+) | Portability, readability — at the cost of some control. |
| Object-oriented (1980s+) | Manageable scale via abstraction. |
| Open source / libraries (2000s+) | Don't reinvent — reuse. |
| AI-assisted (2020s+) | Faster generation, new questions about authorship and safety. |`,
      quiz1: [
        {
          q: 'A modern programmer who needs a date-formatting function will most often ___',
          opts: [
            'write the date-formatting function from scratch in machine code on every new project they start.',
            'use a well-tested standard-library or built-in date-formatting function instead of writing one.',
            'avoid date formatting entirely in their programs by always asking the user to format dates first.',
            'design and ship a brand new programming language whose built-in primitives include date formatting.',
          ],
          a: 1,
          exp: 'Reuse over reinvention is the modern norm; libraries are tested and documented.',
        },
        {
          q: 'When AI-assisted code completion is used, who is ultimately responsible for verifying the code is correct?',
          opts: [
            'The AI tool itself is solely responsible for the correctness of every suggestion the tool generates.',
            'The programmer (and the team) who accepts the suggestion and deploys it remain responsible for it.',
            'The end user of the running program is solely responsible for verifying the code that produced it.',
            'Nobody actually needs to verify AI-suggested code, since the AI has already statistically validated it.',
          ],
          a: 1,
          exp: 'Accepted code becomes the developer\'s code; correctness, security, and ethical review remain a human responsibility.',
        },
      ],
      contentMd: `## Reuse Over Reinvention

Modern languages ship with **libraries**: large collections of well-tested procedures.

| Need | Modern approach |
|------|-----------------|
| Sort a list | Call the language's built-in sort. |
| Make a network request | Call a library function with the URL. |
| Display a chart | Use a charting library. |

Re-implementing these by hand introduces bugs and wastes time. The CSP CED explicitly values **using existing code** as a development practice.

## Programs Have Become More Collaborative

Most non-trivial software today is built by **teams**:

- Version control (e.g., Git) tracks every change.
- Code review catches bugs before deployment.
- Continuous integration runs tests automatically.

This connects directly to Big Idea 1 (Creative & Collaborative Development).

## AI in the Loop

AI-assisted programming (autocomplete, chat-based coding) accelerates writing code but requires the same verification habits: read every suggested line, test on edge cases, and check for security/privacy implications. Tools speed you up; they do not absolve you of correctness.`,
      inputs: {
        prompts: [
          'A pre-built collection of reusable procedures is called a _______.',
          'A system that records every change to a codebase is called _______ control.',
          'When AI autocompletes code, the human who accepts the suggestion remains responsible for its _______.',
        ],
        answers: ['library', 'version', 'correctness'],
        hints: ['Programmers IMPORT or include them.', 'Tools include Git.', 'Human review is non-negotiable.'],
        explanation: 'Libraries reuse code. Version control preserves history. Humans verify AI output.',
      },
      dropdowns: {
        items: [
          { label: 'Using a well-tested library instead of writing the same code yourself usually ___', options: ['reduces bugs and saves time', 'always slows the program', 'avoids any need for testing', 'is discouraged in modern teams'] },
          { label: 'Code review primarily improves ___', options: ['quality and shared understanding', 'compile time', 'screen brightness', 'memory size'] },
          { label: 'AI-generated code that introduces a security flaw is the responsibility of ___', options: ['the developer who accepts and deploys it', 'no one', 'only the AI vendor', 'only the end user'] },
        ],
        correct: ['reduces bugs and saves time', 'quality and shared understanding', 'the developer who accepts and deploys it'],
        hints: ['Libraries are battle-tested.', 'Reviewers spread knowledge.', 'Acceptance = ownership.'],
        explanation: 'Libraries beat reinvention. Code review spreads knowledge. Whoever ships the code owns the consequences.',
      },
      strategyMd: `## AP Exam Strategy: "Change Over Time" Questions

- "Modern programmers often…" → reach for reuse, abstraction, libraries, version control, collaboration.
- "Trade-off" questions almost always have a "more X but less Y" structure (faster but less control, easier but less customizable, etc.).
- AI-related questions: the human team retains responsibility.
- Look for the word "appropriate" — the right answer balances efficiency, correctness, ethics, AND maintainability.`,
      applied: [
        {
          q: 'A startup must ship a calendar app in 4 weeks. Which approach is most appropriate?',
          opts: [
            'Write a new programming language for the calendar.',
            'Use existing libraries for date math, UI, and storage; write only the app-specific glue code.',
            'Implement everything in machine code for speed.',
            'Skip testing to ship faster.',
          ],
          a: 1,
          exp: 'Composing libraries is the standard modern path; bespoke implementations of well-solved problems waste time.',
        },
        {
          q: 'A developer accepts AI-suggested code that constructs a database query by string concatenation with user input. The code passes a quick visual review and ships. A month later, a security incident traces to SQL injection in this code. What is the best characterization?',
          opts: [
            'The AI is solely responsible.',
            'The developer/team is responsible — accepted code is the team\'s code, and security review is part of acceptance.',
            'The user who exploited the flaw is solely responsible.',
            'Such incidents cannot be prevented.',
          ],
          a: 1,
          exp: 'Accepting AI output without security review does not transfer responsibility; the team owns deployed code.',
        },
      ],
    },
    6: {
      introMd: `## Programming Workshop

End-to-end FRQ-style problems combining variables, conditionals, loops, lists, and procedures.`,
      quiz1: [
        {
          q: 'You are asked to "return the index of the first element in list that is greater than threshold, or -1 if none exists". Which structure is correct?',
          opts: [
            'Loop with early RETURN i on the first match; RETURN -1 after the loop completes with no match.',
            'Loop that overwrites a result variable on every iteration; RETURN that variable after the loop ends.',
            'Sort the list in ascending order, then return list[1] as the first element greater than threshold.',
            'Compute LENGTH(list) and divide by threshold to obtain the index of the first matching element.',
          ],
          a: 0,
          exp: 'First-match patterns demand early RETURN. The post-loop RETURN -1 handles "none exists".',
        },
        {
          q: 'You need to compute the median of a list of test scores. Which two-step plan is most appropriate?',
          opts: [
            'Sort the list, then return the middle element (or the average of the two middles for an even-length list).',
            'Return list[1] directly, since the first element of a sorted-by-entry list is treated as the median value.',
            'Sum every element of the list and divide the sum by the length to obtain the median test-score value.',
            'Return the most common (modal) value in the list, since the modal score serves as the median in practice.',
          ],
          a: 0,
          exp: 'Median = middle of sorted data. (Sum/length is mean, not median.)',
        },
      ],
      contentMd: `## Worked Problem 1: First Index Greater Than Threshold

\u00A0\u00A0\u00A0\u00A0PROCEDURE firstGreater(list, threshold) {
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0FOR i ← 1 TO LENGTH(list) {
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0IF (list[i] > threshold) { RETURN i }
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0}
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0RETURN −1
\u00A0\u00A0\u00A0\u00A0}

**Trace [10, 25, 18, 30] with threshold 20:**

| i | list[i] | > 20? | Action |
|---|---------|-------|--------|
| 1 | 10 | no | continue |
| 2 | 25 | yes | RETURN 2 |

## Worked Problem 2: Average Of Top-N

Goal: average the largest n values in list.

\u00A0\u00A0\u00A0\u00A0PROCEDURE avgTopN(list, n) {
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0sorted ← descendingSort(list)
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0total ← 0
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0FOR i ← 1 TO n { total ← total + sorted[i] }
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0RETURN total / n
\u00A0\u00A0\u00A0\u00A0}

**Edge cases to ask about on the exam:**

- What if n > LENGTH(list)? (Should clamp n.)
- What if n = 0? (Divide-by-zero — guard.)
- What if list contains non-numbers? (Type check.)

## Worked Problem 3: Detect Duplicates

\u00A0\u00A0\u00A0\u00A0PROCEDURE hasDuplicate(list) {
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0FOR i ← 1 TO LENGTH(list) − 1 {
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0FOR j ← i + 1 TO LENGTH(list) {
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0IF (list[i] = list[j]) { RETURN TRUE }
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0}
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0}
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0RETURN FALSE
\u00A0\u00A0\u00A0\u00A0}

**Efficiency note:** this is O(n²). With a hash/dictionary it can become O(n) — a common AP exam upgrade question.`,
      inputs: {
        prompts: [
          'For "first occurrence" problems, the loop body should _______ on first match.',
          'For O(n²) duplicate detection, an upgrade to O(n) uses a _______ to remember seen values.',
          'When dividing by n, you must guard against n equal to _______.',
        ],
        answers: ['return', 'dictionary', '0'],
        hints: ['Exit immediately.', 'Hash map / set.', 'Divide-by-this is undefined.'],
        explanation: 'Early return for first-match. Use a set/dictionary for O(n) duplicate detection. Always guard divisor.',
      },
      dropdowns: {
        items: [
          { label: 'firstGreater on [10,25,18,30] with threshold = 30 returns ___', options: ['−1', '4', '0', '30'] },
          { label: 'firstGreater on [10,25,18,30] with threshold = 5 returns ___', options: ['1', '4', '0', '−1'] },
          { label: 'avgTopN([100, 50, 80, 90], 2) returns ___', options: ['95', '80', '50', '90'] },
        ],
        correct: ['−1', '1', '95'],
        hints: ['Strict >; 30 > 30 is false.', 'First element already passes.', '(100 + 90) / 2.'],
        explanation: 'Strict comparisons exclude equality. The first match in [10,…] when threshold = 5 is index 1. Top 2 of {100,50,80,90} are 100 and 90.',
      },
      strategyMd: `## AP Exam Strategy: FRQ Problem-Solving

1. Read the problem twice; underline what is RETURNED.
2. Identify the **pattern** (first-match? for-all? accumulator? sort-then-pick?).
3. Sketch a 4-row trace table on the smallest example.
4. Write the procedure header first; the body fills in around RETURN.
5. Check at least one **edge case** before finalizing.`,
      applied: [
        {
          q: 'Procedure twoSum(list, target) should return TRUE if any two distinct elements sum to target. Which structure is most appropriate AND most efficient?',
          opts: [
            'For each element x, check if (target − x) is in a set of already-seen values; record x in the set; return TRUE on hit.',
            'Sort the list in ascending order and then check whether each adjacent pair of elements sums to target.',
            'Use a triple-nested loop over every possible 3-tuple of list elements and check sums of every triple.',
            'Use a single loop that adds each pair of consecutive elements and returns TRUE on the first matching sum.',
          ],
          a: 0,
          exp: 'The hash-set approach is O(n) and correct for distinct-pair sum.',
        },
        {
          q: 'A procedure mostFrequent(list) returns the element that appears most often. The student writes a doubly-nested loop that for every element counts its occurrences, tracking the max. This is O(n²). For n = 100,000 it times out. The most appropriate fix is to ___',
          opts: [
            'replace the nested loop with a single pass that builds a frequency dictionary, then a single pass over the dictionary to find the max.',
            'switch to a faster computer with a higher clock speed and rerun the same doubly-nested loop on the larger input list.',
            'sort the list in ascending order and then guess the most frequent element from the sorted output of the data.',
            'remove half the data from the input list before the doubly-nested loop runs, then rerun on the reduced list.',
          ],
          a: 0,
          exp: 'Two linear passes (build map, scan map) is O(n) — the canonical algorithmic upgrade.',
        },
      ],
    },
    7: {
      introMd: `## AP Exam Recap — Algorithms & Programming

Cheat sheet of the patterns most likely to appear on exam day.`,
      quiz1: [
        {
          q: 'A procedure parameter named n receives a copy of the caller\'s argument. Modifying n inside the procedure ___',
          opts: [
            'changes the caller\'s variable.',
            'does NOT change the caller\'s variable.',
            'crashes the program.',
            'requires a RETURN to take effect.',
          ],
          a: 1,
          exp: 'Parameters in AP pseudocode are local; the caller\'s variable is unaffected.',
        },
        {
          q: 'A program reads list = INPUT() and the user provides nothing. After the FOR EACH loop, the accumulator total equals ___',
          opts: ['its initial value (0)', '1', 'undefined', 'the number of inputs requested'],
          a: 0,
          exp: 'FOR EACH on an empty list runs the body zero times; the initial value is preserved.',
        },
      ],
      contentMd: `## Patterns To Recognize Instantly

| Goal | Pattern shape |
|------|---------------|
| First match | Loop with early RETURN; default RETURN after. |
| For-all | Loop with early RETURN FALSE; RETURN TRUE after. |
| Exists | Loop with early RETURN TRUE; RETURN FALSE after. |
| Count / Sum | Initialize to identity, accumulate inside loop. |
| Min / Max | Initialize from list[1], compare each element. |
| Filter | Build new list with APPEND inside IF. |
| Map | Build new list with APPEND of f(element). |
| Group | Build a dictionary keyed by group. |

## Common Bugs

- **Off-by-one** (1 vs LENGTH(list), or pair-loop ending at LENGTH instead of LENGTH−1).
- **Strict vs. non-strict** (> vs ≥) — always re-read the problem statement.
- **Overwriting first match** — missing early RETURN.
- **Empty input not handled** — guard before dividing.
- **Mutating a parameter and expecting the caller to see it** — they will not.

## Efficiency Quick Hits

- Replace nested loops with a single pass + dictionary (O(n²) → O(n)).
- Pre-sort once, then linear scan, instead of repeated max searches.
- Cache repeated computations.
- Pick the right data structure: list for ordered, set for membership, dictionary for keyed lookup.`,
      inputs: {
        prompts: [
          'Modifying a parameter inside a procedure does NOT affect the _______.',
          'A doubly-nested loop where each element is compared to every other element runs in O(_______).',
          'For first-match patterns, you should _______ as soon as the match is found.',
        ],
        answers: ['caller', 'n²', 'return'],
        hints: ['Parameters are local copies.', 'n times n.', 'Don\'t keep iterating.'],
        explanation: 'Parameters are local. Doubly-nested = quadratic. Early RETURN gives correctness AND efficiency.',
      },
      dropdowns: {
        items: [
          { label: 'For "list contains target" the most efficient structure once n is large is a ___', options: ['set / hash', 'sorted list with linear scan', 'unsorted list with linear scan', 'string'] },
          { label: 'A procedure that uses a Boolean flag updated every iteration but no early RETURN is usually ___', options: ['vulnerable to being overwritten by later iterations', 'always optimal', 'recursive', 'object-oriented'] },
          { label: 'For pair-comparison loops over LENGTH n, the outer loop should iterate from 1 to ___', options: ['n − 1', 'n', 'n + 1', '0'] },
        ],
        correct: ['set / hash', 'vulnerable to being overwritten by later iterations', 'n − 1'],
        hints: ['O(1) lookup.', 'No early RETURN means later iterations decide.', 'Inner loop indexes i+1.'],
        explanation: 'Sets give O(1) membership. Without early return, last iteration decides. Pair loops end one short.',
      },
      strategyMd: `## Final Programming Tips

- Always **trace** with a small example before answering loop questions.
- "Same output, faster" → choose the lower growth rate.
- "Easier maintenance / single fix point" → extract a procedure.
- "Affects users by group at scale" → think Big Idea 5.
- Library/built-in beats hand-rolled for well-solved problems.
- Accept-the-AI-suggestion does NOT transfer responsibility.`,
      applied: [
        {
          q: 'A team supports a global service. A procedure formatPhoneNumber(s) is duplicated in 14 places, each with slightly different rules. Which refactor is most appropriate?',
          opts: [
            'Add explanatory comments to all 14 duplicate places without changing any of the underlying duplicate code itself.',
            'Extract a single well-tested formatPhoneNumber procedure (parameterized for region rules) and replace each duplicate with a call.',
            'Delete 13 of the 14 duplicates and leave just one of them, regardless of the behavior differences between them.',
            'Convert all 14 of the duplicates into inline machine code so that each call site has its own optimized assembly.',
          ],
          a: 1,
          exp: 'Consolidate to a single procedure with parameters; preserve behavior differences via parameters.',
        },
        {
          q: 'For a stream of 10 million events you must answer the query "how many distinct user IDs have appeared so far?". Which design is most appropriate?',
          opts: [
            'Maintain a set of seen IDs as the stream arrives; the query result is simply the current size of that set.',
            'Re-scan the entire stream from the beginning every time the distinct-count query is asked of the system.',
            'Sort the entire stream after each new event arrives and then count distinct runs in the freshly sorted result.',
            'Store every event in a list and divide the list\'s LENGTH by 2 to estimate the count of distinct user IDs.',
          ],
          a: 0,
          exp: 'A maintained set gives O(1) per insert and O(1) per query — the canonical streaming distinct-count pattern.',
        },
      ],
    },
  },
};

export const bi3VariablesProceduresTopics: Topic[] = [cspAlgorithmsProgramming];
