// BI3 (extra) — csp-variables-control and csp-procedures-lists. Bespoke AP-quality content.

import type { Topic } from '../types';

const cspVariablesControl: Topic = {
  slug: 'csp-variables-control',
  display: 'Variables & Control Flow',
  emoji: '🔀',
  exportPrefix: 'cspVariablesControl',
  idPrefix: 'cspvc',
  parts: {
    2: {
      introMd: `## Variables Are Named Containers For Values

A variable is a name bound to a value in memory. Programs use variables to **store, retrieve, and update** information as they run.

| Statement | Effect |
|-----------|--------|
| **score ← 0** | Create variable score, set to 0. |
| **score ← score + 10** | Read current score, add 10, store back. |
| **name ← "Alex"** | Bind a string to name. |

The arrow ← (or = in many languages) is **assignment**, not equality.`,
      quiz1: [
        { q: 'After **x ← 5** then **x ← x + 3**, what is x?', opts: ['5', '8', '53', 'undefined'], a: 1, exp: 'Read x (5), add 3, store back → 8.' },
        { q: 'What does **x ← y** do?', opts: ['Tests whether x is currently equal to y and returns true or false.', 'Copies y\'s value into x; y is left unchanged by the operation.', 'Swaps x and y so each takes the value the other previously held.', 'Deletes the variable x from memory and frees its storage slot.'], a: 1, exp: 'Assignment is one-way: copy y into x.' },
      ],
      contentMd: `## Data Types A Variable Can Hold

| Type | Example |
|------|---------|
| Integer | 42, -7 |
| Floating-point | 3.14, -0.5 |
| Boolean | true, false |
| String | "hello" |
| List | [1, 2, 3] |

Some languages enforce types strictly (Java, Rust); others are flexible (Python, JavaScript). AP CSP pseudocode is flexible.

## Control Flow: Sequencing, Selection, Iteration

| Construct | Pattern |
|-----------|---------|
| **Sequencing** | Step 1, then step 2, then step 3. |
| **Selection** | IF condition THEN ... ELSE ... |
| **Iteration** | REPEAT n TIMES ... or REPEAT UNTIL condition ... |

Every algorithm in AP CSP can be expressed using just these three building blocks.

## Boolean Logic

Conditions evaluate to true or false. Combine with AND / OR / NOT.

| Expression | Truth |
|-----------|-------|
| **age ≥ 18** | true if age is at least 18 |
| **NOT (x = 0)** | true if x is not 0 |
| **(a > 0) AND (a < 100)** | true if a is in (0, 100) |
| **(role = "admin") OR (role = "owner")** | true if either |

## Short Walk-through

\u00A0\u00A0\u00A0\u00A0total ← 0
\u00A0\u00A0\u00A0\u00A0FOR EACH grade IN gradeList:
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0total ← total + grade
\u00A0\u00A0\u00A0\u00A0average ← total / LENGTH(gradeList)

This computes the average using sequencing + iteration + variables.`,
      inputs: {
        prompts: [
          'A name bound to a value in memory is called a _______.',
          'The three core control structures are sequencing, selection, and _______.',
          'A condition that evaluates to true or false is called a _______ expression.',
        ],
        answers: ['variable', 'iteration', 'Boolean'],
        hints: ['Container.', 'Loop concept.', 'True/false.'],
        explanation: 'Variables, the three control structures, and Boolean logic are CSP fundamentals.',
      },
      dropdowns: {
        items: [
          { label: 'After **a ← 7**, **b ← a**, **a ← 3**, the value of b is ___', options: ['7', '3', '10', 'undefined'] },
          { label: 'The expression **(x > 0) AND (x < 10)** is true when ___', options: ['x is strictly between 0 and 10', 'x is exactly 0', 'x is exactly 10', 'x is negative'] },
          { label: 'A FOR EACH loop is most appropriate when ___', options: ['you want to do something with every item in a list', 'you need to repeat exactly 5 times', 'you need to wait for an event', 'you need to call a procedure'] },
        ],
        correct: ['7', 'x is strictly between 0 and 10', 'you want to do something with every item in a list'],
        hints: ['Snapshot at assignment.', 'AND requires both.', 'List traversal.'],
        explanation: 'Assignment captures current value. AND needs both conditions. FOR EACH = list traversal.',
      },
      strategyMd: `## AP Exam Strategy: Variables & Control

- "What is x after these statements?" — trace step-by-step; assignment is left ← right.
- "Which loop fits?" — fixed count = REPEAT n TIMES; condition = REPEAT UNTIL; list = FOR EACH.
- "Compound condition" — AND requires both; OR requires either.`,
      applied: [
        { q: 'A program needs to print all even numbers from 1 to 100. The most appropriate construct is ___', opts: ['no loop — just write 50 separate sequential print statements one per even number.', 'iteration with selection inside (loop 1..100, IF n MOD 2 = 0 print n).', 'recursion only, with each call deciding whether to print and recursing on n+1.', 'no selection at all — just iterate 1..100 and print every value.'], a: 1, exp: 'Iterate, then test each value with selection.' },
        { q: 'A program checks **(age ≥ 13) AND (parentConsent = true)**. For a 12-year-old with parent consent, the result is ___', opts: ['true, since one of the two conditions is satisfied by the parent consent.', 'false, since AND requires both conditions and the age check fails.', 'undefined, since AND with one false operand cannot be evaluated.', 'depends on the parent\'s mood at the moment the check is performed.'], a: 1, exp: 'AND requires both; first condition fails → false.' },
      ],
    },
    3: {
      introMd: `## Common Control-Flow Patterns

| Pattern | Skeleton |
|---------|---------|
| **Counter** | i ← 0; REPEAT n TIMES: i ← i + 1 |
| **Accumulator** | total ← 0; FOR EACH x: total ← total + x |
| **Search** | found ← false; FOR EACH x: IF x = target THEN found ← true |
| **Filter** | result ← []; FOR EACH x: IF condition(x) THEN APPEND(result, x) |
| **Max / min** | best ← list[0]; FOR EACH x: IF x > best THEN best ← x |`,
      quiz1: [
        { q: 'Which pattern is **total ← total + grade** part of?', opts: ['Counter — incrementing a tally by exactly one each iteration.', 'Accumulator — building up a running total from each value.', 'Search — walking the list looking for a target value.', 'Filter — selecting matching values into a new list.'], a: 1, exp: 'Building up a sum is the accumulator pattern.' },
        { q: 'Which pattern produces a NEW list of items meeting a condition?', opts: ['Search — walking the list to find any single matching item.', 'Counter — tallying how many items meet a condition.', 'Filter — producing a new list of items meeting a condition.', 'Accumulator — collapsing a list into a single summary value.'], a: 2, exp: 'Filter selects items into a new list.' },
      ],
      contentMd: `## Selection Patterns

| Pattern | When |
|---------|------|
| **IF / ELSE** | Two branches. |
| **IF / ELSE IF / ELSE** | Multiple ranked conditions. |
| **Guard** | Early return on edge case. |
| **Lookup** | Map a value to an action via a table. |

## Iteration Patterns

| Pattern | Use |
|---------|-----|
| **Counted loop** | Known number of iterations. |
| **Conditional loop** | Stop when a condition becomes true / false. |
| **List traversal** | Process each item. |
| **Nested loop** | Process pairs (or grid). |

## Mini-walkthrough: Find Maximum

\u00A0\u00A0\u00A0\u00A0best ← scoreList[0]
\u00A0\u00A0\u00A0\u00A0FOR EACH score IN scoreList:
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0IF score > best THEN
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0best ← score

Initialize, then update on each item — the canonical pattern for "best so far".`,
      inputs: {
        prompts: [
          'The pattern **total ← total + x** inside a loop is called the _______ pattern.',
          'A pattern that produces a NEW list of items meeting a condition is called _______.',
          'A pattern that finds the largest value in a list is called _______.',
        ],
        answers: ['accumulator', 'filter', 'maximum'],
        hints: ['Build up a sum.', 'Subset.', '"Best so far".'],
        explanation: 'Accumulator, filter, max — three of the most common loop patterns.',
      },
      dropdowns: {
        items: [
          { label: 'A loop that visits every (i, j) pair in a grid uses ___', options: ['nested loops', 'a single loop', 'no loop', 'recursion only'] },
          { label: 'IF / ELSE IF / ELSE is most appropriate when ___', options: ['multiple ranked conditions partition the cases', 'there are exactly two branches', 'no condition is needed', 'a loop is needed'] },
          { label: 'A "guard clause" pattern handles ___', options: ['edge cases early so the main logic stays clean', 'arithmetic only', 'list traversal', 'compression'] },
        ],
        correct: ['nested loops', 'multiple ranked conditions partition the cases', 'edge cases early so the main logic stays clean'],
        hints: ['Pairs / grid.', 'Multi-way branching.', 'Early exit.'],
        explanation: 'Nested loops = pairs. Else-if chain = multi-way. Guards handle edges first.',
      },
      strategyMd: `## AP Exam Strategy: Patterns

- Recognize the loop pattern from the body: total += → accumulator; result.APPEND → filter; if x > best → max.
- Match selection style to # of branches.
- Nested loops handle 2D / pairs.`,
      applied: [
        { q: 'A program counts how many items in a list are negative. The right pattern is ___', opts: ['accumulator with a condition (count ← 0; FOR EACH x: IF x < 0 THEN count ← count + 1).', 'no loop — the count of negatives can be read directly off any list value.', 'sort the list first, then read the count of negatives from the sorted output.', 'compress the list first, then count negative tokens in the compressed bytes.'], a: 0, exp: 'Conditional accumulator (counter).' },
        { q: 'A program finds the longest string in a list. The right pattern is ___', opts: ['"best so far" with comparison on LENGTH(string) on each list element.', 'no loop — the longest string can be inferred from the first element directly.', 'random selection of one element and returning it as the longest candidate.', 'encryption of every string and returning the one with the longest ciphertext.'], a: 0, exp: '"Best so far" pattern, comparing by length.' },
      ],
    },
    4: {
      introMd: `## Variables & Control Connect Across CSP

| Connection | Why |
|-----------|-----|
| Variables ↔ Data | Variables hold data values. |
| Control flow ↔ Algorithms | Algorithms ARE control flow over data. |
| Variables ↔ Procedures | Local variables vs. global state. |
| Control ↔ Events | Event-driven code is control flow triggered externally. |`,
      quiz1: [
        { q: 'A variable declared inside a procedure that disappears when the procedure returns is called ___', opts: ['global — visible to every part of the program throughout its run', 'local — visible only inside the procedure during a single call', 'public — declared visible to other modules that import the procedure', 'random — visible at unpredictable points in the program\'s execution'], a: 1, exp: 'Local variables exist only during the procedure call.' },
        { q: 'A button-click handler that updates a counter variable demonstrates ___', opts: ['only sequencing of statements that all run once on program startup.', 'event-driven control flow modifying program state in response to a click.', 'unpredictable random behavior unrelated to anything the user does.', 'compression of the user\'s click into a smaller representation in memory.'], a: 1, exp: 'Events drive control; handlers modify shared state.' },
      ],
      contentMd: `## Scope Of A Variable

**Scope** = the part of the program where a variable name is visible.

| Scope | Lifetime |
|-------|---------|
| **Local** | Inside a procedure call only. |
| **Global** | Whole program; persists. |
| **Block** | Inside an IF / loop block (some languages). |

Why scope matters: tightly scoped variables prevent unrelated code from accidentally reading or modifying them.

## Mutability

Some variables can be reassigned (mutable); some cannot (immutable / constant).

| Style | Example |
|-------|---------|
| Mutable | counter ← counter + 1 |
| Constant | PI ← 3.14159 (never reassigned) |

Constants make intent clear and prevent accidental change.

## Side Effects

A side effect = a change to state outside the local scope (writing a file, modifying a global, printing). Functions with no side effects are easier to test and reason about.`,
      inputs: {
        prompts: [
          'The part of a program where a variable name is visible is called its _______.',
          'A variable that exists only inside a procedure is called _______.',
          'A change to state outside the local function is called a _______ effect.',
        ],
        answers: ['scope', 'local', 'side'],
        hints: ['Visibility.', 'Procedure-bound.', 'Spillover.'],
        explanation: 'Scope, local variables, side effects.',
      },
      dropdowns: {
        items: [
          { label: 'A constant should be used when ___', options: ['a value should never change after initialization', 'every value can be reassigned', 'the value will be deleted', 'the value is random'] },
          { label: 'Tightly scoped local variables ___', options: ['reduce risk of accidental modification by unrelated code', 'increase memory use forever', 'cannot be tested', 'replace global variables completely'] },
          { label: 'A pure function (no side effects) is ___', options: ['easier to reason about and test in isolation', 'always slower', 'always faster', 'always compressed'] },
        ],
        correct: ['a value should never change after initialization', 'reduce risk of accidental modification by unrelated code', 'easier to reason about and test in isolation'],
        hints: ['Immutability.', 'Encapsulation.', 'Predictability.'],
        explanation: 'Constants for invariants. Local scope reduces accidental coupling. Pure functions are testable.',
      },
      strategyMd: `## AP Exam Strategy: Cross-Topic Variables/Control

- "Why use a local variable?" → encapsulation; doesn\'t pollute global state.
- "Why a constant?" → intent + safety.
- Event-driven = control flow triggered externally.`,
      applied: [
        { q: 'A function is supposed to compute the average of a list, but it also writes to a global log every time it runs. From a CSP design standpoint, this ___', opts: ['is fine because logging is a useful behavior to keep alongside the computation.', 'introduces a side effect that makes the function harder to test and reuse.', 'compresses the data so the average can be computed in less memory than before.', 'encrypts the data so the global log entries cannot be read by other procedures.'], a: 1, exp: 'Side effects complicate testing and reuse.' },
        { q: 'Two procedures both modify a global counter without coordination. The most likely problem is ___', opts: ['no problem — simultaneous updates to the same global variable always interleave safely.', 'unintended interactions: one procedure\'s changes affect the other unpredictably.', 'compression artifacts in the global counter making it shrink between updates.', 'transport-layer issues that prevent the global counter from updating reliably.'], a: 1, exp: 'Shared global state = source of bugs.' },
      ],
    },
    5: {
      introMd: `## How Programming Languages Handle Variables Has Evolved

| Era | Trend |
|-----|-------|
| 1970s | Static typing (C, Pascal); declare type up front. |
| 1990s | Dynamic typing (Python, JavaScript); flexibility. |
| 2010s | Type inference + optional types (TypeScript, Rust). |
| 2020s | Stronger compile-time guarantees, immutability by default in many new languages. |`,
      quiz1: [
        { q: 'TypeScript adds ___ to JavaScript.', opts: ['noticeably faster runtime execution of the same JavaScript program', 'optional static types caught at compile time before the program runs', 'transport-layer encryption of every value the JavaScript program produces', 'automatic source-code compression so the resulting bundle is smaller'], a: 1, exp: 'TypeScript = JS + static types.' },
        { q: 'Why are modern languages trending toward immutability by default?', opts: ['Mutable data is universally faster, so immutability avoids that performance cost.', 'Immutable data simplifies reasoning, especially in concurrent or parallel code.', 'Mutability adds new bugs to data-compression algorithms operating on lists.', 'Mutability requires every variable to be encrypted before assignment is allowed.'], a: 1, exp: 'Immutability simplifies concurrency and reasoning.' },
      ],
      contentMd: `## Static vs. Dynamic Typing

| Style | When type is checked |
|-------|---------------------|
| Static | Compile time (C, Java, Rust). |
| Dynamic | Run time (Python, JS). |
| Gradual | Optional annotations (TypeScript, mypy). |

Static = catch errors earlier; Dynamic = faster prototyping; Gradual = mix-and-match.

## Concurrency Pressure On Variables

Modern multi-core hardware made shared mutable state risky. New languages (Rust, Go, modern Java) provide tools to make concurrent variable access safer.

## AP CSP Pseudocode Style

The AP exam uses simple pseudocode similar to Python in spirit:

\u00A0\u00A0\u00A0\u00A0count ← 0
\u00A0\u00A0\u00A0\u00A0FOR EACH item IN list:
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0IF item > 0 THEN count ← count + 1

You won\'t need to worry about types or memory management on the exam.`,
      inputs: {
        prompts: [
          'A language that checks types at compile time is _______-typed.',
          'A language like Python that checks types at run time is _______-typed.',
          'A philosophy where variables don\'t change after creation is called _______.',
        ],
        answers: ['statically', 'dynamically', 'immutability'],
        hints: ['Compile-time check.', 'Run-time check.', 'Unchangeable.'],
        explanation: 'Static / dynamic typing; immutability.',
      },
      dropdowns: {
        items: [
          { label: 'Compile-time type checking helps catch ___', options: ['certain errors before the program runs', 'all bugs forever', 'TLS errors', 'compression bugs'] },
          { label: 'Immutability helps with ___', options: ['easier reasoning, especially in concurrent code', 'compression ratio', 'TLS handshakes', 'IPv6 routing'] },
          { label: 'AP CSP pseudocode is closest in style to ___', options: ['Python-like, with words like FOR EACH and IF / THEN', 'low-level assembly', 'binary directly', 'machine code'] },
        ],
        correct: ['certain errors before the program runs', 'easier reasoning, especially in concurrent code', 'Python-like, with words like FOR EACH and IF / THEN'],
        hints: ['Pre-runtime safety.', 'Concurrency.', 'High-level pseudocode.'],
        explanation: 'Static types catch errors early. Immutability eases concurrency. AP pseudocode is high-level.',
      },
      strategyMd: `## AP Exam Strategy: Language Evolution

- Static vs. dynamic typing tradeoffs.
- Immutability + scope tightening = modern best practices.
- AP pseudocode is high-level, English-like.`,
      applied: [
        { q: 'A team migrates a large JavaScript codebase to TypeScript. The most direct benefit is ___', opts: ['noticeably faster runtime since the TypeScript compiler optimizes the JS output.', 'catching many type errors at compile time, before the code reaches deployment.', 'producing smaller bundle files because TypeScript syntax is more compact than JS.', 'stronger transport-layer encryption of values that flow between TS modules at runtime.'], a: 1, exp: 'TypeScript catches type errors before runtime.' },
        { q: 'A concurrent program where two threads update the same shared counter without coordination most often suffers from ___', opts: ['no issue — concurrent updates to a single shared counter are safe by default.', 'race conditions producing wrong counts; needs locking, atomic ops, or immutability.', 'compression artifacts in the counter that cause it to shrink between updates.', 'transport-layer handshake errors that prevent the counter from being readable.'], a: 1, exp: 'Unsynchronized shared mutable state = race conditions.' },
      ],
    },
    6: {
      introMd: `## Variables & Control Workshop

Trace and design with vocabulary in hand.`,
      quiz1: [
        { q: 'After **a ← 1; b ← 2; a ← b; b ← a**, the values of (a, b) are ___', opts: ['(1, 2)', '(2, 2)', '(2, 1)', '(1, 1)'], a: 1, exp: 'a becomes 2, then b reads the now-2 a → both are 2 (classic swap pitfall — needs a temp variable).' },
        { q: 'The correct way to swap a and b in pseudocode is ___', opts: ['a ← b; b ← a', 'temp ← a; a ← b; b ← temp', 'a ← b ← a', 'no swap needed'], a: 1, exp: 'Use a temporary variable to preserve a.' },
      ],
      contentMd: `## Worked: Trace A Loop

\u00A0\u00A0\u00A0\u00A0sum ← 0
\u00A0\u00A0\u00A0\u00A0FOR i FROM 1 TO 4:
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0sum ← sum + i

| Iter | i | sum (after) |
|------|---|-------------|
| 1 | 1 | 1 |
| 2 | 2 | 3 |
| 3 | 3 | 6 |
| 4 | 4 | 10 |

Final sum = 10.

## Worked: Conditions

\u00A0\u00A0\u00A0\u00A0IF score ≥ 90 THEN grade ← "A"
\u00A0\u00A0\u00A0\u00A0ELSE IF score ≥ 80 THEN grade ← "B"
\u00A0\u00A0\u00A0\u00A0ELSE IF score ≥ 70 THEN grade ← "C"
\u00A0\u00A0\u00A0\u00A0ELSE grade ← "F"

For score = 85 → grade = "B".

## Worked: Off-By-One Caution

\u00A0\u00A0\u00A0\u00A0FOR i FROM 1 TO LENGTH(list):
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0PROCESS(list[i])

In a 1-indexed list this is fine; in a 0-indexed language, you\'d need 0 to LENGTH(list) - 1. AP pseudocode is **1-indexed**.`,
      inputs: {
        prompts: [
          'In AP CSP pseudocode, the first element of a list is at index _______.',
          'To swap two variables you need a _______ variable.',
          'Tracing a loop step by step is called _______.',
        ],
        answers: ['1', 'temporary', 'tracing'],
        hints: ['1-indexed.', 'Holds intermediate value.', 'Walk through.'],
        explanation: 'AP CSP is 1-indexed. Swap needs temp. "Tracing" = step-through.',
      },
      dropdowns: {
        items: [
          { label: 'A loop FOR i FROM 1 TO 5 runs ___ times', options: ['5', '4', '6', '0'] },
          { label: 'A loop REPEAT UNTIL false would ___', options: ['run forever (infinite loop)', 'run zero times', 'run once', 'compress data'] },
          { label: 'An IF without an ELSE ___', options: ['skips the body when the condition is false', 'always runs the body', 'always errors', 'always loops'] },
        ],
        correct: ['5', 'run forever (infinite loop)', 'skips the body when the condition is false'],
        hints: ['Inclusive range.', 'Never-true exit.', 'No alternate branch.'],
        explanation: '1..5 = 5 iters. UNTIL false = infinite. IF without ELSE just skips.'},
      strategyMd: `## AP Exam Strategy: Workshop Style

- Trace by drawing a small table of variables across iterations.
- Watch for off-by-one and infinite-loop traps.
- AP pseudocode is 1-indexed.`,
      applied: [
        { q: 'A loop intended to sum 10 numbers actually sums 11 because the index runs 0..10. This is a classic ___', opts: ['no error — looping over 11 indices to sum 10 values is the standard pattern.', 'off-by-one error — common when boundary conditions aren\'t carefully chosen.', 'compression error in which the index variable was inadvertently shrunk by one.', 'transport-layer error that caused one extra index to arrive over the network.'], a: 1, exp: 'Off-by-one is one of the most common bug categories.' },
        { q: 'A program asks for a number and divides 100 by it. For input 0 it crashes. The most appropriate fix is ___', opts: ['ignore the crash since users rarely intentionally type zero into the prompt.', 'guard with IF input ≠ 0 THEN do the division ELSE inform the user instead.', 'switch the program from one programming language to another without other changes.', 'compress the program\'s source so the divide-by-zero check takes fewer characters.'], a: 1, exp: 'Boundary check = guard clause.' },
      ],
    },
    7: {
      introMd: `## AP Exam Recap — Variables & Control Flow

Final review.`,
      quiz1: [
        { q: 'Assignment **x ← y** ___', opts: ['tests if x equals y.', 'copies y\'s value into x.', 'swaps x and y.', 'deletes y.'], a: 1, exp: 'Assignment = copy right into left.' },
        { q: 'A REPEAT UNTIL loop stops when its condition ___', opts: ['becomes true.', 'becomes false.', 'is initialized.', 'is encrypted.'], a: 0, exp: 'REPEAT UNTIL exits when the condition becomes true.' },
      ],
      contentMd: `## Final Vocab

| Term | Definition |
|------|-----------|
| Variable | Named container for a value. |
| Assignment | Set a variable\'s value. |
| Boolean | True / false. |
| Sequencing | Steps in order. |
| Selection | IF / ELSE. |
| Iteration | Loop. |
| Scope | Where a variable is visible. |
| Local / global | Inside a procedure / whole program. |
| Constant | Variable that never changes. |
| Off-by-one | A common bug at loop boundaries. |
| Side effect | Change to state outside the local scope. |

## Common Pitfalls

- Reading **=** as equality when it\'s assignment (or vice versa).
- Off-by-one errors in loops.
- Infinite loops (condition never becomes the exit condition).
- Modifying global state from many places, creating bugs.
- Forgetting that AP pseudocode is 1-indexed.`,
      inputs: {
        prompts: [
          'AP CSP pseudocode lists are _______-indexed.',
          'A loop whose exit condition is never satisfied is called an _______ loop.',
          'A bug where a loop runs one too many or one too few times is an _______-by-one error.',
        ],
        answers: ['1', 'infinite', 'off'],
        hints: ['1-indexed.', 'Never stops.', 'Common boundary bug.'],
        explanation: '1-indexed pseudocode, infinite loops, off-by-one errors.',
      },
      dropdowns: {
        items: [
          { label: 'IF / ELSE IF / ELSE chains are best when ___', options: ['cases partition into ranked conditions', 'a loop is needed', 'no decision is needed', 'compression is needed'] },
          { label: 'Tracing through code with a small variable table is ___', options: ['the standard technique for predicting program output', 'illegal', 'optional only', 'a compression technique'] },
          { label: 'A pure function without side effects is ___', options: ['easier to test and reason about', 'always slower', 'cannot be reused', 'always encrypted'] },
        ],
        correct: ['cases partition into ranked conditions', 'the standard technique for predicting program output', 'easier to test and reason about'],
        hints: ['Multi-way.', 'Trace tables.', 'Predictability.'],
        explanation: 'Else-if for ranked cases. Tracing predicts output. Pure functions are testable.',
      },
      strategyMd: `## Final Exam Tips

- Trace tables are your friend.
- Distinguish counter / accumulator / search / filter / max patterns.
- Watch for off-by-one and infinite loops.
- Local + constant + pure = modern good practice.`,
      applied: [
        { q: 'A program needs to find the SECOND-largest value in a list. The most straightforward approach is ___', opts: ['no loop needed — the second-largest value can be read off any single element.', 'two "best so far" trackers (largest and secondLargest) updated together as you scan.', 'random selection of one element and returning it as the second-largest candidate.', 'sort the list ascending and then take its first element as the second-largest value.'], a: 1, exp: 'Single-pass with two trackers — also acceptable: sort then take element 2 from end.' },
        { q: 'A counter variable is incremented from event handlers AND from a timer. Without coordination, the count is sometimes wrong. The most accurate diagnosis is ___', opts: ['no issue — concurrent increments to the same counter always interleave safely by default.', 'a race condition on shared mutable state; needs synchronization or a different design.', 'a compression issue that causes the counter to shrink occasionally between updates.', 'a transport-layer issue that prevents the counter from updating across the network.'], a: 1, exp: 'Concurrent updates to shared state cause race conditions.' },
      ],
    },
  },
};

const cspProceduresLists: Topic = {
  slug: 'csp-procedures-lists',
  display: 'Procedures & Lists',
  emoji: '📋',
  exportPrefix: 'cspProceduresLists',
  idPrefix: 'csppl',
  parts: {
    2: {
      introMd: `## Procedures Bundle Reusable Logic

A **procedure** (a.k.a. function or method) is a named, reusable block of instructions. Define once, call many times.

\u00A0\u00A0\u00A0\u00A0PROCEDURE greet(name)
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0DISPLAY("Hello, " + name)

Calling **greet("Alex")** runs the body with name = "Alex".

| Concept | Meaning |
|---------|---------|
| **Parameter** | Variable in the procedure\'s definition. |
| **Argument** | Value passed in when calling. |
| **Return value** | What the procedure produces. |
| **Call** | The act of running the procedure. |`,
      quiz1: [
        { q: 'In **greet("Alex")**, "Alex" is the ___', opts: ['parameter — the variable named in the procedure\'s definition', 'argument — the value supplied at the call site of the procedure', 'return value — what the procedure produces back to its caller', 'definition — the syntactic header that names the procedure'], a: 1, exp: 'The value passed at the call site is the argument.' },
        { q: 'In **PROCEDURE greet(name)**, **name** is the ___', opts: ['argument — the value supplied at the call site of the procedure', 'parameter — the variable named in the procedure\'s definition', 'return value — what the procedure produces back to its caller', 'global variable — a value visible from every part of the program'], a: 1, exp: 'The variable in the definition is the parameter.' },
      ],
      contentMd: `## Why Procedures Matter

| Benefit | Explanation |
|---------|-------------|
| **Reuse** | Write logic once, call from many places. |
| **Abstraction** | Caller doesn\'t need to know HOW it works. |
| **Testability** | Test the procedure in isolation. |
| **Readability** | A well-named procedure documents intent. |

## Lists Hold Many Values

A **list** is an ordered collection of values, accessed by index.

\u00A0\u00A0\u00A0\u00A0grades ← [85, 92, 78, 90]
\u00A0\u00A0\u00A0\u00A0grades[1] = 85   (in 1-indexed AP pseudocode)
\u00A0\u00A0\u00A0\u00A0LENGTH(grades) = 4

Common list operations:

| Operation | Effect |
|-----------|--------|
| **APPEND(list, x)** | Add x at the end. |
| **INSERT(list, i, x)** | Insert x at index i. |
| **REMOVE(list, i)** | Remove element at index i. |
| **list[i]** | Read / write element i. |
| **LENGTH(list)** | Number of elements. |

## Mini-walkthrough

\u00A0\u00A0\u00A0\u00A0PROCEDURE average(scores)
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0total ← 0
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0FOR EACH s IN scores:
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0total ← total + s
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0RETURN total / LENGTH(scores)

Now anywhere we need an average, we call **average(myList)**.`,
      inputs: {
        prompts: [
          'A named, reusable block of instructions is called a _______.',
          'The variable in a procedure\'s definition that receives a value is called a _______.',
          'In AP CSP pseudocode, the first element of a list is at index _______.',
        ],
        answers: ['procedure', 'parameter', '1'],
        hints: ['Function-like.', 'Definition-side.', '1-indexed.'],
        explanation: 'Procedure, parameter, 1-indexed lists.',
      },
      dropdowns: {
        items: [
          { label: '**APPEND(list, x)** ___', options: ['adds x to the end of list, increasing its length by 1', 'removes x from list', 'sorts list', 'replaces list with x'] },
          { label: 'A procedure with a RETURN value is meant to be ___', options: ['used as an expression whose value is the returned value', 'called only as a statement', 'never called', 'called recursively only'] },
          { label: 'Calling **LENGTH([4, 8, 15])** returns ___', options: ['3', '15', '27', '0'] },
        ],
        correct: ['adds x to the end of list, increasing its length by 1', 'used as an expression whose value is the returned value', '3'],
        hints: ['Append = end.', 'Returns are expressions.', 'Count of elements.'],
        explanation: 'APPEND adds at end. RETURN procedures = expressions. LENGTH = element count.',
      },
      strategyMd: `## AP Exam Strategy: Procedures & Lists

- Know the parameter / argument distinction.
- Be careful with 1-based indexing in AP pseudocode.
- LENGTH, APPEND, INSERT, REMOVE are the core list ops.`,
      applied: [
        { q: 'A program calls **maxOf(grades)** in three different places. The most direct benefit of using a procedure is ___', opts: ['no benefit — inlining the same code in three places would be equally maintainable.', 'a single source of truth for "find max" — fix bugs once, change once, test once.', 'compression of the program because the procedure header is shorter than the body.', 'transport-layer speedups for whatever the program does after computing the max.'], a: 1, exp: 'Procedures consolidate logic.' },
        { q: 'A list **prices** has 5 elements. After **APPEND(prices, 9.99)**, LENGTH(prices) is ___', opts: ['4', '5', '6', '0'], a: 2, exp: 'APPEND adds one element.' },
      ],
    },
    3: {
      introMd: `## Procedure Patterns

| Pattern | Use |
|---------|-----|
| **Pure function** | Inputs → output, no side effects. |
| **Predicate** | Returns true / false. |
| **Constructor** | Builds a structured value. |
| **Action** | Performs a side effect (print, save). |
| **Higher-order** | Takes another procedure as a parameter. |

## List Patterns

| Pattern | Skeleton |
|---------|---------|
| **Map** | new = []; FOR EACH x IN list: APPEND(new, f(x)) |
| **Filter** | new = []; FOR EACH x IN list: IF p(x) THEN APPEND(new, x) |
| **Reduce / fold** | acc = init; FOR EACH x IN list: acc = combine(acc, x) |`,
      quiz1: [
        { q: 'A procedure **isEven(n)** that returns true / false is a ___', opts: ['constructor — a procedure that builds and returns a structured value', 'action — a procedure whose primary purpose is producing a side effect', 'predicate — a procedure that returns a boolean true / false answer', 'reducer — a procedure that collapses a list into a single summary'], a: 2, exp: 'A boolean-returning procedure is a predicate.' },
        { q: 'Building a new list where each element is **f(originalElement)** is the ___ pattern.', opts: ['filter — keeping only the elements that satisfy a predicate', 'map — applying a transformation to each element of the list', 'reduce — collapsing the entire list into a single summary value', 'sort — rearranging the elements into ascending or descending order'], a: 1, exp: 'Map applies f to each element.' },
      ],
      contentMd: `## Map / Filter / Reduce In Pseudocode

\u00A0\u00A0\u00A0\u00A0doubled ← []                 // map
\u00A0\u00A0\u00A0\u00A0FOR EACH n IN nums:
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0APPEND(doubled, n * 2)

\u00A0\u00A0\u00A0\u00A0evens ← []                   // filter
\u00A0\u00A0\u00A0\u00A0FOR EACH n IN nums:
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0IF n MOD 2 = 0 THEN APPEND(evens, n)

\u00A0\u00A0\u00A0\u00A0total ← 0                    // reduce (sum)
\u00A0\u00A0\u00A0\u00A0FOR EACH n IN nums:
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0total ← total + n

These three patterns underlie almost all list processing.

## 2D Lists (Lists Of Lists)

\u00A0\u00A0\u00A0\u00A0grid ← [[1, 2, 3],
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0[4, 5, 6],
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0[7, 8, 9]]
\u00A0\u00A0\u00A0\u00A0grid[2][3] = 6   (row 2, column 3 — 1-indexed)

To process every cell:

\u00A0\u00A0\u00A0\u00A0FOR EACH row IN grid:
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0FOR EACH cell IN row:
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0PROCESS(cell)

This is a **nested loop**.`,
      inputs: {
        prompts: [
          'A pattern that produces a NEW list where each element is f(x) is called _______.',
          'A pattern that combines all elements into a single value is called _______.',
          'A list of lists, like a grid, is a _______-dimensional list.',
        ],
        answers: ['map', 'reduce', 'two'],
        hints: ['Transform each.', 'Roll-up.', '2D.'],
        explanation: 'Map / reduce / filter; 2D lists are lists of lists.',
      },
      dropdowns: {
        items: [
          { label: 'A predicate function returns ___', options: ['true or false', 'a number', 'a list', 'a string'] },
          { label: 'A higher-order procedure takes ___', options: ['another procedure as a parameter', 'no parameters', 'only numeric parameters', 'only strings'] },
          { label: 'To touch every cell in a 2D list, you typically use ___', options: ['a nested loop', 'a single loop', 'no loop', 'recursion only'] },
        ],
        correct: ['true or false', 'another procedure as a parameter', 'a nested loop'],
        hints: ['Boolean.', 'Procedure as data.', 'Loops within loops.'],
        explanation: 'Predicates return booleans. HOFs take procedures. Nested loops traverse 2D.'},
      strategyMd: `## AP Exam Strategy: Procedures & List Patterns

- Map / filter / reduce: recognize the pattern → name it.
- 2D lists need nested loops.
- Predicates return true / false; pair them with filter.`,
      applied: [
        { q: 'A program needs squares of all numbers in a list. The pattern is ___', opts: ['filter — selecting only some of the numbers from the original list', 'map — transforming each number to its square in a new list', 'reduce — collapsing the entire list into one summary value', 'sort — rearranging the original numbers in ascending order'], a: 1, exp: 'Map transforms each element.' },
        { q: 'A program needs the sum of squares of even numbers in a list. The most natural composition is ___', opts: ['filter (even) → map (square) → reduce (sum) composed in that order.', 'compression of the list followed by encryption of the compressed bytes.', 'no operation — the answer can be read directly off any single element.', 'sort the list and then reverse it before computing any per-element value.'], a: 0, exp: 'Filter → map → reduce is the canonical pipeline.' },
      ],
    },
    4: {
      introMd: `## Procedures & Lists Connect Across CSP

| Connection | Why |
|-----------|-----|
| Procedures ↔ Algorithms | Algorithms are usually packaged as procedures. |
| Lists ↔ Data | Lists are the simplest structured data. |
| Procedures ↔ Collaboration | Reusable named procedures help teams divide work. |
| Procedures ↔ Testing | Procedures are testable units. |`,
      quiz1: [
        { q: 'A unit test typically tests ___', opts: ['the entire program end-to-end with a single integration scenario.', 'a single procedure with known inputs and the corresponding expected outputs.', 'the network layer\'s ability to deliver packets reliably under load.', 'the encryption module\'s ability to round-trip arbitrary plaintext blobs.'], a: 1, exp: 'Unit tests target single procedures.' },
        { q: 'Two teammates can build different features in parallel most easily when ___', opts: ['everyone shares one giant function and edits the same lines simultaneously.', 'features are split into well-defined procedures with clear inputs and outputs.', 'no procedures exist and every feature is one continuous top-to-bottom script.', 'transport-layer encryption is required between every two teammate\'s commits.'], a: 1, exp: 'Procedures are the unit of parallel work.' },
      ],
      contentMd: `## Lists Are Often Procedure Inputs / Outputs

Most non-trivial procedures take or return lists:

\u00A0\u00A0\u00A0\u00A0PROCEDURE topThree(scores)
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0sorted ← SORT(scores, descending)
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0RETURN [sorted[1], sorted[2], sorted[3]]

## Mutability Caution

When a procedure receives a list, modifying it may modify the caller\'s list (depending on language). To stay safe, document whether your procedure mutates inputs or returns a fresh list.

## Pure Functions Are Easier To Test

A pure function (no side effects, output depends only on inputs) can be tested with simple input → expected-output pairs:

| Input | Expected output |
|-------|----------------|
| [3, 1, 2] | 2.0 |
| [10, 10, 10] | 10.0 |
| [] | 0.0 (or special handling) |

This is why pure functions are encouraged in modern code.`,
      inputs: {
        prompts: [
          'A function whose output depends only on its inputs (and has no side effects) is called _______.',
          'A test that verifies a single procedure\'s behavior is called a _______ test.',
          'When a procedure changes the caller\'s list, we say it _______ the input.',
        ],
        answers: ['pure', 'unit', 'mutates'],
        hints: ['No side effects.', 'Smallest test.', 'Modifies in place.'],
        explanation: 'Pure / unit test / mutates are core vocabulary.',
      },
      dropdowns: {
        items: [
          { label: 'A pure function is easier to ___', options: ['test and reason about because outputs depend only on inputs', 'compress', 'encrypt', 'route'] },
          { label: 'A procedure that returns a NEW list (without modifying the input) is ___', options: ['safer to compose with other procedures', 'always slower', 'always larger', 'always encrypted'] },
          { label: 'Splitting a feature into 4 named procedures helps ___', options: ['teammates work in parallel and test each piece in isolation', 'compression', 'TLS', 'IPv6'] },
        ],
        correct: ['test and reason about because outputs depend only on inputs', 'safer to compose with other procedures', 'teammates work in parallel and test each piece in isolation'],
        hints: ['Predictable.', 'No surprises.', 'Parallel work.'],
        explanation: 'Pure → testable; non-mutating → composable; small procedures → parallel teamwork.'},
      strategyMd: `## AP Exam Strategy: Cross-Topic Procedures/Lists

- Procedures = the unit of reuse, abstraction, testing, and team-coordination.
- Lists = the most common structured data passed between procedures.
- Pure functions are easier to test, parallelize, and reason about.`,
      applied: [
        { q: 'A team has one 500-line function. Refactoring it into 6 named procedures most directly improves ___', opts: ['the compression ratio of the source-code file when it is later archived.', 'readability, testability, and the ability for teammates to work in parallel.', 'the speed of the TLS handshake the program performs at startup time.', 'the routing efficiency of IPv6 packets the program sends across the network.'], a: 1, exp: 'Decomposition into procedures is one of the most universally beneficial refactors.' },
        { q: 'A procedure **shuffleInPlace(list)** reorders the caller\'s list. The most CSP-aligned best practice is ___', opts: ['leave it; the caller will eventually figure out that the list has been modified.', 'document clearly that the input is mutated, OR return a NEW shuffled list instead.', 'compress the list before shuffling so the in-place modification fits in less memory.', 'encrypt the list before shuffling so the in-place modification cannot be observed.'], a: 1, exp: 'Make mutation explicit; or return a fresh value.' },
      ],
    },
    5: {
      introMd: `## How Procedures & Lists Have Evolved

| Era | Trend |
|-----|-------|
| 1970s | Procedural programming (subroutines). |
| 1990s | Object-oriented (methods on objects). |
| 2000s | Functional resurgence (map/filter/reduce in mainstream langs). |
| 2010s | Lambdas / arrow functions everywhere. |
| 2020s | Pattern matching, immutable collections by default in many new langs. |`,
      quiz1: [
        { q: 'Modern languages widely adopt **map / filter / reduce** because ___', opts: ['they consistently make the resulting source code longer than equivalent loops.', 'they express common patterns concisely and enable parallel implementations.', 'they replace ordered indexed lists entirely with unordered set collections.', 'they automatically encrypt the elements of the list as they are processed.'], a: 1, exp: 'Functional patterns express intent and parallelize well.' },
        { q: 'A "lambda" or "arrow function" is ___', opts: ['a hardware feature built into modern multi-core processors for fast execution.', 'an unnamed inline procedure typically passed to a higher-order function as data.', 'a network protocol used to transmit anonymous code between distributed services.', 'a compression algorithm that shortens function bodies by removing whitespace.'], a: 1, exp: 'Lambdas = anonymous procedures.' },
      ],
      contentMd: `## Lists Got A Cousin: Other Collections

| Collection | Property |
|-----------|----------|
| List / array | Ordered, indexed. |
| Set | Unordered, no duplicates. |
| Map / dictionary | Key → value. |
| Tuple | Fixed-size ordered group. |
| Stream | Lazy, possibly infinite sequence. |

AP CSP focuses on lists, but real software uses all of these.

## Procedures As Values

Modern languages let you store procedures in variables, pass them as arguments, and return them from other procedures. This makes patterns like map and filter natural.

\u00A0\u00A0\u00A0\u00A0doubled ← MAP(nums, lambda x: x * 2)
\u00A0\u00A0\u00A0\u00A0evens ← FILTER(nums, lambda x: x MOD 2 = 0)

The AP exam emphasizes the conceptual underpinnings even if it uses simpler pseudocode.

## Immutability Pressure

Many modern languages favor **persistent / immutable** lists. Operations return new lists instead of mutating the original. This eliminates whole classes of bugs but requires more memory (mitigated by structural sharing).`,
      inputs: {
        prompts: [
          'An unordered collection of unique values is called a _______.',
          'A collection mapping keys to values is called a _______ or dictionary.',
          'An anonymous inline procedure is often called a _______.',
        ],
        answers: ['set', 'map', 'lambda'],
        hints: ['No duplicates.', 'Key → value.', 'Greek letter.'],
        explanation: 'Set, map / dictionary, lambda — modern collection vocabulary.',
      },
      dropdowns: {
        items: [
          { label: 'A higher-order function takes a procedure as ___', options: ['an argument (or returns one)', 'a network address', 'a file', 'an encrypted message'] },
          { label: 'Immutable lists ___', options: ['return new lists from operations instead of modifying the original', 'cannot store data', 'compress automatically', 'encrypt automatically'] },
          { label: '"Procedures as values" enables ___', options: ['patterns like map / filter where you parameterize the operation', 'compression', 'TLS', 'IPv6'] },
        ],
        correct: ['an argument (or returns one)', 'return new lists from operations instead of modifying the original', 'patterns like map / filter where you parameterize the operation'],
        hints: ['HOF behavior.', 'Functional collections.', 'Parameterized ops.'],
        explanation: 'HOF = procedure as argument/return. Immutable ops return new. Procedures-as-values enable map/filter.'},
      strategyMd: `## AP Exam Strategy: Modern Procedures/Lists

- Functional patterns (map / filter / reduce) are everywhere.
- Procedures can be values (lambdas, callbacks).
- Immutability is increasingly the default in new languages.`,
      applied: [
        { q: 'A team writes the same "loop and accumulate" code in 8 places. The single best refactor (using modern patterns) is ___', opts: ['leave the duplication and rely on careful copy-paste discipline going forward.', 'extract a higher-order REDUCE helper that takes the per-element combiner as a parameter.', 'compress the source file so the eight duplicated blocks take less disk space overall.', 'encrypt the eight loops so future maintainers cannot accidentally edit one of them.'], a: 1, exp: 'A higher-order reducer eliminates the duplication.' },
        { q: 'A program needs to test "is each name in this list unique?". The most direct collection to use is ___', opts: ['a list, scanning every prior name linearly each time a new name is examined.', 'a set — insert each name; if the set\'s size grows each time, names are unique.', 'a tuple of fixed length holding the names that have already been examined.', 'an encrypted blob whose ciphertext length is compared after each insertion.'], a: 1, exp: 'Sets natively encode uniqueness; building one tells you instantly.' },
      ],
    },
    6: {
      introMd: `## Procedures & Lists Workshop`,
      quiz1: [
        { q: 'In **PROCEDURE add(a, b) RETURN a + b**, calling **add(2, 3)** returns ___', opts: ['2', '5', '23', 'undefined'], a: 1, exp: 'Substitute a=2, b=3 → 5.' },
        { q: '**APPEND(list, x)** then **LENGTH(list)** vs original LENGTH ___', opts: ['decreases by 1.', 'increases by 1.', 'stays the same.', 'is undefined.'], a: 1, exp: 'APPEND adds one element.' },
      ],
      contentMd: `## Worked: Build A "Top K" Procedure

\u00A0\u00A0\u00A0\u00A0PROCEDURE topK(scores, k)
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0sorted ← SORT(scores, descending)
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0result ← []
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0FOR i FROM 1 TO k:
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0APPEND(result, sorted[i])
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0RETURN result

Now any caller can ask for the top 3, top 10, etc.

## Worked: Compose Map + Filter + Reduce

Sum the squares of even numbers in **nums**:

\u00A0\u00A0\u00A0\u00A0total ← 0
\u00A0\u00A0\u00A0\u00A0FOR EACH n IN nums:
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0IF n MOD 2 = 0 THEN
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0total ← total + n * n

Conceptually: filter (even) → map (square) → reduce (sum).

## Worked: 2D Sum

\u00A0\u00A0\u00A0\u00A0PROCEDURE gridSum(grid)
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0total ← 0
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0FOR EACH row IN grid:
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0FOR EACH cell IN row:
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0total ← total + cell
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0RETURN total`,
      inputs: {
        prompts: [
          'A "top K" procedure usually first _______ the list, then takes the first k elements.',
          'Filter then map then reduce is a common functional _______.',
          'Touching every cell in a 2D list requires _______ loops.',
        ],
        answers: ['sorts', 'pipeline', 'nested'],
        hints: ['Order first.', 'Composition.', 'One inside another.'],
        explanation: 'Sort → take. Pipeline of patterns. Nested loops for 2D.'},
      dropdowns: {
        items: [
          { label: 'A procedure that takes a list and returns its sum is most accurately a ___', options: ['reduce-pattern procedure', 'filter-pattern procedure', 'map-pattern procedure', 'sort-pattern procedure'] },
          { label: 'A procedure that takes a list and returns a new list of squared values is a ___', options: ['map-pattern procedure', 'reduce-pattern procedure', 'filter-pattern procedure', 'sort-pattern procedure'] },
          { label: 'A procedure that takes a list and returns only positive numbers is a ___', options: ['filter-pattern procedure', 'map-pattern procedure', 'reduce-pattern procedure', 'sort-pattern procedure'] },
        ],
        correct: ['reduce-pattern procedure', 'map-pattern procedure', 'filter-pattern procedure'],
        hints: ['Roll up.', 'Transform each.', 'Subset.'],
        explanation: 'Sum = reduce. Squaring each = map. Positives only = filter.'},
      strategyMd: `## AP Exam Strategy: Workshop

- Recognize map / filter / reduce shape from the loop body.
- Top-K = sort + take.
- 2D traversal = nested loops.`,
      applied: [
        { q: 'A program processes a 1000×1000 grid. A nested loop runs how many iterations?', opts: ['2,000', '1,000,000', '1000', '0'], a: 1, exp: '1000 × 1000 = 1,000,000 iterations.' },
        { q: 'A team needs the average of the top 10 scores in a list of 1,000. The most reasonable approach is ___', opts: ['no procedure — just inline the sort, slice, and average code at the call site directly.', 'topTen ← topK(scores, 10); average ← AVG(topTen) — compose existing procedures.', 'compress the list of 1,000 scores first and then average the compressed bytes directly.', 'encrypt the list before averaging so the top-K values cannot be observed by other code.'], a: 1, exp: 'Compose existing procedures.' },
      ],
    },
    7: {
      introMd: `## AP Exam Recap — Procedures & Lists`,
      quiz1: [
        { q: 'A procedure\'s definition uses ___; the call site uses ___', opts: ['arguments / parameters', 'parameters / arguments', 'returns / inputs', 'inputs / returns'], a: 1, exp: 'Definition has parameters; call has arguments.' },
        { q: 'AP CSP pseudocode lists are indexed starting at ___', opts: ['0', '1', '-1', '10'], a: 1, exp: '1-indexed.' },
      ],
      contentMd: `## Final Vocab

| Term | Definition |
|------|-----------|
| Procedure | Named, reusable block of code. |
| Parameter | Variable in the definition. |
| Argument | Value at the call site. |
| Return | Value the procedure produces. |
| List | Ordered indexed collection. |
| LENGTH | Number of elements. |
| APPEND | Add to end. |
| Map / filter / reduce | Three core list patterns. |
| Higher-order procedure | Takes / returns procedures. |
| Pure function | No side effects. |

## Common Pitfalls

- Confusing parameter and argument.
- Off-by-one with 1-indexed lists.
- Forgetting to RETURN a value.
- Mutating a caller\'s list without documenting it.
- Writing one big function instead of decomposing.`,
      inputs: {
        prompts: [
          'A higher-order procedure takes another _______ as an argument.',
          'The number of elements in a list is given by the _______ operation.',
          'A function with no side effects whose output depends only on its inputs is called _______.',
        ],
        answers: ['procedure', 'LENGTH', 'pure'],
        hints: ['Procedures as values.', 'List size.', 'Predictable.'],
        explanation: 'HOF / LENGTH / pure functions.',
      },
      dropdowns: {
        items: [
          { label: 'Decomposing a 500-line function into smaller procedures primarily improves ___', options: ['readability, testability, and reuse', 'compression', 'TLS speed', 'IPv6 routing'] },
          { label: 'A procedure that returns true / false is called a ___', options: ['predicate', 'constructor', 'reducer', 'mapper'] },
          { label: 'A unit test ideally exercises ___', options: ['a single procedure with known inputs and expected outputs', 'the entire program', 'the network', 'compression'] },
        ],
        correct: ['readability, testability, and reuse', 'predicate', 'a single procedure with known inputs and expected outputs'],
        hints: ['Decomposition wins.', 'Boolean returner.', 'Single procedure.'],
        explanation: 'Decomposition + predicates + unit tests are core good practice.'},
      strategyMd: `## Final Exam Tips

- Parameter vs. argument: definition vs. call.
- LENGTH, APPEND, INSERT, REMOVE, list[i] are AP\'s core list ops.
- Map / filter / reduce: name them when you see them.
- Decomposing into named procedures is almost always the right move.`,
      applied: [
        { q: 'A team has one giant function with 12 distinct responsibilities. The CSP-aligned refactor is ___', opts: ['leave the function alone; consolidating responsibilities is the goal of good design.', 'extract each responsibility into a named procedure with a clear input/output, then compose.', 'compress the source file so the 12 responsibilities take less disk space when archived.', 'encrypt the function body so future maintainers cannot accidentally split the responsibilities.'], a: 1, exp: 'Decompose into named, single-responsibility procedures.' },
        { q: 'A procedure **removeFirstNegative(list)** modifies the caller\'s list. A teammate is surprised when their original list changes. The CSP-aligned fix is ___', opts: ['leave it as-is; teammates should learn to expect mutation in any procedure call.', 'document the mutation OR return a fresh modified copy and leave the original untouched.', 'compress the caller\'s list so the in-place removal takes less memory than before.', 'encrypt the caller\'s list so the in-place removal cannot be observed by other code.'], a: 1, exp: 'Make mutation explicit, or avoid it.' },
      ],
    },
  },
};

export const bi3ExtraTopics: Topic[] = [cspVariablesControl, cspProceduresLists];
