// BI3 — Algorithms & Programming. Bespoke, code-tracing-heavy content.
// Markdown blocks intentionally avoid backtick-fenced spans; we use bold + UPPERCASE
// for code references (consistent with AP CSP pseudocode style) so that template
// literals don't need backslash escaping.

import type { Topic } from '../types';

// ─────────────────────────────────────────────────────────────────────────────
// csp-algorithms
// ─────────────────────────────────────────────────────────────────────────────
const cspAlgorithms: Topic = {
  slug: 'csp-algorithms',
  display: 'Algorithms',
  emoji: '⚙️',
  exportPrefix: 'cspAlgorithms',
  idPrefix: 'cspalg',
  parts: {
    2: {
      introMd: `## How Algorithms Execute Step by Step

An **algorithm** is a finite, ordered sequence of unambiguous steps. On the AP CSP exam you will trace pseudocode by hand. Master three control flows and you can trace anything.

| Construct | What it does |
|-----------|--------------|
| **Sequence** | Statements run top to bottom, exactly once. |
| **Selection** | **IF / ELSE** chooses between branches. |
| **Iteration** | **REPEAT N TIMES** or **REPEAT UNTIL** runs a block multiple times. |

**AP pseudocode rule:** assignment uses **a ← 5**. Comparison uses **=**. Lists are 1-indexed.`,
      quiz1: [
        {
          q: 'After this code, what is x?\n\nx ← 2\nREPEAT 3 TIMES { x ← x + x }',
          opts: ['6', '8', '16', '12'],
          a: 2,
          exp: 'x doubles each pass: 2 → 4 → 8 → 16. Three doublings of 2 give 2·2³ = 16.',
        },
        {
          q: 'Which best describes when REPEAT UNTIL (n = 0) stops executing its block?',
          opts: [
            'After exactly n iterations.',
            'When n equals 0 at the top of an iteration.',
            'When n equals 0 at the bottom of an iteration, after the block runs.',
            'When n becomes negative.',
          ],
          a: 2,
          exp: 'REPEAT UNTIL is a post-test loop in AP pseudocode: the block runs, then the condition is checked. The loop exits the next time the condition is true.',
        },
      ],
      contentMd: `## Tracing a Loop by Hand

\u00A0\u00A0\u00A0\u00A0n ← 4
\u00A0\u00A0\u00A0\u00A0total ← 0
\u00A0\u00A0\u00A0\u00A0REPEAT n TIMES {
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0total ← total + n
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0n ← n − 1
\u00A0\u00A0\u00A0\u00A0}
\u00A0\u00A0\u00A0\u00A0DISPLAY(total)

**Key trick:** the loop count for **REPEAT n TIMES** is fixed when the loop *starts* (n = 4), even if n changes inside.

| Iteration | total before | n before | total after | n after |
|-----------|--------------|----------|-------------|---------|
| 1 | 0 | 4 | 4 | 3 |
| 2 | 4 | 3 | 7 | 2 |
| 3 | 7 | 2 | 9 | 1 |
| 4 | 9 | 1 | 10 | 0 |

DISPLAY shows **10**.

## Selection With Compound Conditions

\u00A0\u00A0\u00A0\u00A0IF (score ≥ 90 AND attendance ≥ 0.8) {
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0grade ← "A"
\u00A0\u00A0\u00A0\u00A0} ELSE IF (score ≥ 80 OR bonus = true) {
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0grade ← "B"
\u00A0\u00A0\u00A0\u00A0} ELSE {
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0grade ← "C"
\u00A0\u00A0\u00A0\u00A0}

**AND** requires both; **OR** requires at least one. **NOT** flips a Boolean.`,
      inputs: {
        prompts: [
          'The three core control structures are sequence, selection, and _______.',
          'AP pseudocode assignment uses the symbol _______ (write the name).',
          'In REPEAT n TIMES, n is evaluated _______ times during the loop.',
        ],
        answers: ['iteration', 'arrow', '1'],
        hints: [
          'It means "repetition".',
          'A leftward-pointing symbol like ←.',
          'It is set when the loop begins.',
        ],
        explanation: 'Iteration is the third primitive control structure. The arrow ← assigns. The repeat count is captured once when the loop starts.',
      },
      dropdowns: {
        items: [
          { label: 'After a ← 3, b ← a, a ← 7, the value of b is ___', options: ['3', '7', '10', 'undefined'] },
          { label: 'A pre-test loop checks the condition ___ each iteration body', options: ['before', 'after', 'in the middle of', 'twice during'] },
          { label: 'The expression (NOT (x > 5)) AND (x ≠ 0) is true when x equals ___', options: ['3', '6', '0', '7'] },
        ],
        correct: ['3', 'before', '3'],
        hints: ['b is a snapshot, not a reference.', 'REPEAT UNTIL is post-test; many other loops are pre-test.', 'NOT (x > 5) means x ≤ 5; combined with x ≠ 0.'],
        explanation: 'Assignments copy values. Pre-test loops evaluate first. For x = 3: NOT (3 > 5) is true, AND (3 ≠ 0) is true.',
      },
      strategyMd: `## AP Exam Strategy: Reading Algorithms

- Trace with a **table**: one column per variable, one row per iteration. This catches off-by-one errors.
- For **REPEAT N TIMES** the count is **fixed at the start**; modifying the counter inside doesn't change how many times the block runs.
- For **REPEAT UNTIL (cond)** the block runs **at least once** and exits when cond becomes true *after* a pass.
- DeMorgan: NOT (A AND B) = (NOT A) OR (NOT B). The exam tests this.
- When in doubt, plug in **boundary values** (0, 1, n−1, n) — they are where bugs live.`,
      applied: [
        {
          q: 'A loop counts how many list elements equal a target. After tracing, the counter is 0 but you can see the target appears in the list. Which bug is most likely?',
          opts: [
            'The loop iterates through the list correctly but compares index to target instead of element to target.',
            'Lists are 0-indexed in AP pseudocode and the loop starts at 1.',
            'REPEAT UNTIL was used instead of REPEAT N TIMES.',
            'The DISPLAY statement is missing.',
          ],
          a: 0,
          exp: 'The classic mistake is comparing the index variable to the target instead of list[i]. AP pseudocode lists are 1-indexed, ruling out option B.',
        },
        {
          q: 'Two algorithms produce the same output for every input. Algorithm A uses one loop and runs in time proportional to n. Algorithm B uses two nested loops and runs in time proportional to n². For n = 1000, which statement is best supported?',
          opts: [
            'Algorithm B is preferred because nested loops are more reliable.',
            'Algorithm A is more efficient; both are correct, so A should be used.',
            'Algorithm A is incorrect because it doesn’t use nesting.',
            'Both have identical efficiency since they produce the same output.',
          ],
          a: 1,
          exp: 'Correctness is equal; efficiency is not. Same output + lower running time means the linear algorithm is preferred.',
        },
      ],
    },
    3: {
      introMd: `## Common Algorithmic Patterns

You will see the same building blocks again and again. Recognize them and tracing becomes pattern-matching.

| Pattern | Shape |
|---------|-------|
| **Accumulator** | Start sum/product at identity, update each pass. |
| **Counter** | Increment when a condition holds. |
| **Min/Max** | Track best-so-far, compare each new element. |
| **Filter** | Build a new list of elements meeting a condition. |
| **Map (transform)** | Replace each element with f(element). |`,
      quiz1: [
        {
          q: 'Trace:\n\nlist ← [4, 1, 7, 3, 9, 2]\nbest ← list[1]\nFOR EACH x IN list { IF (x > best) { best ← x } }\nDISPLAY(best)',
          opts: ['4', '7', '9', '26'],
          a: 2,
          exp: 'Classic max pattern. best becomes 4, then 7, then 9. Final element 2 doesn’t exceed 9.',
        },
        {
          q: 'You want the COUNT of even numbers in a list. Which line belongs inside the loop?',
          opts: [
            'IF (x MOD 2 = 0) { count ← count + 1 }',
            'count ← count + x',
            'count ← x MOD 2',
            'IF (count MOD 2 = 0) { x ← x + 1 }',
          ],
          a: 0,
          exp: 'A counter increments by 1 only when the condition holds. x MOD 2 = 0 tests even.',
        },
      ],
      contentMd: `## Worked Example: Filter + Count

Goal: from prices, count how many are above 50 AND build a list of those prices.

\u00A0\u00A0\u00A0\u00A0prices ← [42, 73, 51, 18, 99, 50]
\u00A0\u00A0\u00A0\u00A0count ← 0
\u00A0\u00A0\u00A0\u00A0expensive ← []
\u00A0\u00A0\u00A0\u00A0FOR EACH p IN prices {
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0IF (p > 50) {
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0count ← count + 1
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0APPEND(expensive, p)
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0}
\u00A0\u00A0\u00A0\u00A0}

**Trace:** 73 ✓, 51 ✓, 99 ✓. (50 fails because the test is strict >.) Output: **3** and **[73, 51, 99]**.

## Worked Example: Min Index, Not Just Min

Tracking the *position* of the minimum, not just the value.

\u00A0\u00A0\u00A0\u00A0nums ← [8, 3, 6, 1, 9, 4]
\u00A0\u00A0\u00A0\u00A0minIdx ← 1
\u00A0\u00A0\u00A0\u00A0FOR i ← 2 TO LENGTH(nums) {
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0IF (nums[i] < nums[minIdx]) { minIdx ← i }
\u00A0\u00A0\u00A0\u00A0}

**minIdx** evolves: 1 → 2 (3 < 8) → 4 (1 < 3). Output: **4** (1-indexed position of the smallest value).`,
      inputs: {
        prompts: [
          'A variable that builds up a running total is called an _______.',
          'To pick out elements meeting a condition into a new list, use the _______ pattern.',
          'To replace every element with f(element) without filtering, use the _______ pattern.',
        ],
        answers: ['accumulator', 'filter', 'map'],
        hints: ['It accumulates a result.', 'Like a sieve.', 'Like a one-to-one transformation.'],
        explanation: 'Accumulator builds totals. Filter selects. Map transforms element-by-element.',
      },
      dropdowns: {
        items: [
          { label: 'For an empty list, the standard "sum" accumulator should start at ___', options: ['0', '1', 'list[1]', 'undefined'] },
          { label: 'For a "product" accumulator, the identity starting value is ___', options: ['1', '0', 'list[1]', '−1'] },
          { label: 'When tracking max, initializing best to list[1] instead of a tiny constant is safer because ___', options: ['it guarantees best is a real list value', 'it uses less memory', 'it is faster', 'it allows nesting'] },
        ],
        correct: ['0', '1', 'it guarantees best is a real list value'],
        hints: ['Adding 0 changes nothing.', 'Multiplying by 1 changes nothing.', 'A magic constant might not be smaller than every legal element.'],
        explanation: 'Identity values keep accumulators correct. Initializing max from list[1] handles negative-only lists where a constant like 0 would be wrong.',
      },
      strategyMd: `## AP Exam Strategy: Pattern Recognition

- Skim pseudocode for the **shape**: is there a counter? An accumulator? A min/max comparison?
- Watch for **strict vs. non-strict** comparisons (> vs ≥). They change boundary results.
- Watch the **starting value** of an accumulator — wrong identity is a frequent FRQ deduction.
- For "first occurrence" patterns, remember to **break/exit** or guard with a flag so you don't overwrite a found index later.`,
      applied: [
        {
          q: 'A program is supposed to find the FIRST element greater than 100 in a list. The student writes:\n\nresult ← −1\nFOR EACH x IN list { IF (x > 100) { result ← x } }\n\nWhat is wrong?',
          opts: [
            'Nothing is wrong; the code is correct.',
            'The loop overwrites result every time a match is found, so it returns the LAST match, not the first.',
            'The variable result should start at 0, not −1.',
            'FOR EACH cannot be used with a numeric list.',
          ],
          a: 1,
          exp: 'Without an early exit (or a flag like IF (result = -1)), every match overwrites the previous one.',
        },
        {
          q: 'Code:\n\nlist ← [5, 5, 5, 5]\ncount ← 0\nFOR EACH x IN list { count ← count + 1 }\n\nIf the list is replaced with [ ] (empty), what does count equal after the loop?',
          opts: ['0', '1', 'undefined / error', '4'],
          a: 0,
          exp: 'FOR EACH on an empty list executes the body zero times. The accumulator stays at its initial value 0.',
        },
      ],
    },
    4: {
      introMd: `## How Algorithms Connect to Other CSP Topics

Algorithms don’t live in isolation. An efficient sort matters because of **data** size. A good search matters because the **internet** delivers gigabytes of records. The AP exam loves cross-topic questions.

| Connection | Why it matters |
|-----------|----------------|
| **Algorithms ↔ Data** | Choice of data structure (list vs. set) changes the algorithm’s running time. |
| **Algorithms ↔ Abstraction** | Procedures hide algorithmic detail behind a name. |
| **Algorithms ↔ Computing Systems** | Faster CPUs help, but a bad algorithm wastes any hardware budget. |
| **Algorithms ↔ Impact** | A biased ranking algorithm can amplify inequity at scale. |`,
      quiz1: [
        {
          q: 'Which pair of changes is most likely to make a slow program faster?',
          opts: [
            'Switching from a quadratic-time algorithm to a linear-time algorithm.',
            'Renaming variables for readability.',
            'Adding more comments.',
            'Splitting one procedure into two equivalent procedures.',
          ],
          a: 0,
          exp: 'Asymptotic improvement (n² → n) dominates micro-optimizations.',
        },
        {
          q: 'A search algorithm runs over a sorted list. Which fact most clearly enables a faster (logarithmic) search?',
          opts: [
            'The list is short.',
            'The list is sorted, so binary search is possible.',
            'The list contains only integers.',
            'The list has no duplicates.',
          ],
          a: 1,
          exp: 'Binary search requires a sorted ordering. Sortedness is the structural property that lets the algorithm halve the search space each step.',
        },
      ],
      contentMd: `## Linear vs. Binary Search

| Algorithm | Requires | Time on n items |
|-----------|----------|----------------|
| **Linear** | Nothing | up to n comparisons |
| **Binary** | Sorted list | about log₂(n) comparisons |

For 1,000,000 items, linear can need a million comparisons; binary needs about 20. The connection: **data structure** (sortedness) directly determines which **algorithm** you can use.

## Procedures Hide Algorithms

\u00A0\u00A0\u00A0\u00A0PROCEDURE find(list, target) {
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0// body could be linear or binary search;
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0// callers don't need to know.
\u00A0\u00A0\u00A0\u00A0}

This is **abstraction**: callers call **find** without caring which algorithm runs inside. You can swap the implementation later for a faster one without changing any caller.

## Algorithms and Impact

A recommendation algorithm that always returns the most-clicked content reinforces popularity bias — small differences compound into large gaps over millions of users. Algorithm choice has social consequences.`,
      inputs: {
        prompts: [
          'Binary search requires the input list to be _______.',
          'Hiding the implementation of an algorithm behind a procedure name is an example of _______.',
          'Switching from an n² algorithm to an n algorithm is an example of an _______ improvement.',
        ],
        answers: ['sorted', 'abstraction', 'efficiency'],
        hints: ['Binary search halves the range using ordering.', 'Procedures hide details.', 'It changes how running time scales with input size.'],
        explanation: 'Sortedness enables binary search. Procedures abstract over algorithms. Reducing growth rate is an efficiency improvement.',
      },
      dropdowns: {
        items: [
          { label: 'Linear search on n items needs at most ___ comparisons', options: ['n', 'log₂(n)', 'n²', '1'] },
          { label: 'Binary search on n items needs about ___ comparisons', options: ['log₂(n)', 'n', '√n', '2n'] },
          { label: 'For n = 1,048,576 (≈ 1 million), binary search uses about ___ comparisons', options: ['20', '1000', '1', '500,000'] },
        ],
        correct: ['n', 'log₂(n)', '20'],
        hints: ['Worst case checks every element.', 'Each step halves the remaining range.', 'log₂(2²⁰) = 20.'],
        explanation: 'Linear is O(n); binary is O(log n). 2²⁰ ≈ 1.05 million, so log₂(1M) ≈ 20.',
      },
      strategyMd: `## AP Exam Strategy: Cross-Topic Reasoning

- "Most efficient" almost always means lowest growth rate (n vs n² vs log n).
- If the question mentions a sorted list, **binary search** is on the table.
- If two algorithms produce identical output, the question is about **efficiency**, not correctness.
- Watch for cross-topic framing: "the algorithm runs on a server" hints at scalability; "the algorithm assigns loans" hints at bias/impact.`,
      applied: [
        {
          q: 'A library catalog of 4,000,000 books is sorted by title. Roughly how many comparisons does binary search need in the worst case?',
          opts: ['About 22', 'About 2,000', 'About 4,000,000', 'Exactly 1'],
          a: 0,
          exp: '2²² ≈ 4.2M, so log₂(4M) ≈ 22.',
        },
        {
          q: 'A school adopts an automated scheduling algorithm that consistently assigns students with last names early in the alphabet to better elective slots. Which CSP cross-topic concern is most directly raised?',
          opts: [
            'The algorithm has the wrong running time.',
            'The algorithm uses too much memory.',
            'The algorithm produces a biased outcome that disproportionately affects a group.',
            'The algorithm cannot be expressed as pseudocode.',
          ],
          a: 2,
          exp: 'Systematic outcome differences across groups are an algorithmic-bias / impact-of-computing concern.',
        },
      ],
    },
    5: {
      introMd: `## How Algorithms Scale

A "fast enough" algorithm at n = 100 may be unusable at n = 10,000,000. The AP exam tests whether you understand **how running time grows** with input size.

| Class | Doubling input multiplies time by | Practical feel |
|-------|----------------------------------|----------------|
| Constant | 1× | Instant regardless of size. |
| Logarithmic | adds a constant | Scales beautifully. |
| Linear | 2× | Reasonable. |
| Quadratic | 4× | Painful past ~10⁴. |
| Exponential | huge multiplier | Infeasible past tiny inputs. |`,
      quiz1: [
        {
          q: 'An algorithm takes 1 second on 1,000 inputs and is **linear-time**. Roughly how long does it take on 10,000 inputs?',
          opts: ['1 second', '10 seconds', '100 seconds', '1,000 seconds'],
          a: 1,
          exp: 'Linear: 10× input → 10× time.',
        },
        {
          q: 'An algorithm takes 1 second on 1,000 inputs and is **quadratic-time**. Roughly how long does it take on 10,000 inputs?',
          opts: ['1 second', '10 seconds', '100 seconds', '10,000 seconds'],
          a: 2,
          exp: 'Quadratic: 10× input → 100× time.',
        },
      ],
      contentMd: `## Reasonable vs. Unreasonable Algorithms

The CED uses two key terms:

- **Reasonable**: time grows polynomially (constant, log, linear, n², n³, …).
- **Unreasonable**: time grows exponentially (2ⁿ, n!, …) — quickly impossible to run.

A 30-element problem that needs to try every subset (2³⁰ ≈ 1 billion) is borderline. At 50 elements (2⁵⁰ ≈ 10¹⁵), no realistic computer finishes in your lifetime.

## Heuristics: When Exact Is Too Slow

When an exact algorithm is unreasonable, we often use a **heuristic** — an approach that finds a *good enough* answer quickly without guaranteeing optimality.

| Problem | Exact (unreasonable) | Heuristic (reasonable) |
|---------|----------------------|----------------------|
| Traveling Salesperson | Try all routes | "Always go to nearest unvisited city." |
| Schedule fitting | Try all schedules | Greedy first-fit. |

**Trade-off:** speed vs. guaranteed optimality.

## Decidable vs. Undecidable

Some problems can't be solved by *any* algorithm for *all* inputs (e.g., the Halting Problem). These are **undecidable**. Most exam-relevant problems are decidable; the question is whether they're tractable in reasonable time.`,
      inputs: {
        prompts: [
          'An algorithm whose running time grows polynomially is called _______.',
          'An algorithm that finds a good but not necessarily optimal solution faster is called a _______.',
          'A problem that no algorithm can solve for all inputs is _______.',
        ],
        answers: ['reasonable', 'heuristic', 'undecidable'],
        hints: ['CED vocabulary for tractable.', 'Greek root meaning "to find".', 'Opposite of decidable.'],
        explanation: 'Reasonable = polynomial time. Heuristics trade optimality for speed. Undecidable problems have no general algorithm.',
      },
      dropdowns: {
        items: [
          { label: 'A 2ⁿ algorithm on n = 60 is best described as ___', options: ['Reasonable', 'Unreasonable', 'Linear', 'Logarithmic'] },
          { label: 'A heuristic guarantees ___', options: ['the optimal answer', 'a good answer in less time', 'no answer', 'exponential time'] },
          { label: 'Doubling the input of an O(n²) algorithm makes it ___ as long', options: ['twice', 'four times', 'the same length of', 'half'] },
        ],
        correct: ['Unreasonable', 'a good answer in less time', 'four times'],
        hints: ['2⁶⁰ is astronomical.', 'It is a speed/optimality trade.', '(2n)² = 4n².'],
        explanation: 'Exponential time is unreasonable. Heuristics trade optimality for speed. Quadratic scaling is 4× per input doubling.',
      },
      strategyMd: `## AP Exam Strategy: Scaling Questions

- For "how long does it take on 10× input?" multiply by the growth factor: linear → 10×, n² → 100×, log → tiny constant change.
- "Reasonable" = polynomial. "Unreasonable" = exponential.
- A heuristic ≠ a guarantee. If the answer must be optimal, a heuristic alone can't promise it.
- The Halting Problem is the canonical undecidable problem the exam might mention.`,
      applied: [
        {
          q: 'A genetics lab has an exact algorithm that finds the best protein folding for n amino acids in time proportional to 2ⁿ. For n = 50 the run is estimated at 35 years. Which is the best practical response?',
          opts: [
            'Wait the projected 35 years for the exact algorithm to terminate and report the optimal protein folding.',
            'Run the same exponential algorithm on a slightly faster computer in the hope that it finishes much sooner.',
            'Use a heuristic that returns a near-optimal protein folding in a matter of seconds for any input size n.',
            'Conclude that the protein folding problem is undecidable and that no algorithm can ever produce a folding.',
          ],
          a: 2,
          exp: 'Exponential growth is unreasonable; doubling CPU speed buys one extra n. A heuristic returns a usable answer quickly.',
        },
        {
          q: 'A search algorithm runs in O(log n). On 1,000 items it does about 10 comparisons. On 1,000,000 items it does about how many?',
          opts: ['1,000', '10,000,000', '20', '100'],
          a: 2,
          exp: 'log₂(10⁶) ≈ 20.',
        },
      ],
    },
    6: {
      introMd: `## Algorithms Workshop

Walk through end-to-end problems that combine sequence, selection, iteration, lists, and procedures — exactly the style of CED FRQs.`,
      quiz1: [
        {
          q: 'You need to compute the average of a list of test scores, ignoring zeros. Which two patterns must you combine?',
          opts: [
            'Filter (skip zeros) and accumulator (sum + count).',
            'Map and binary search.',
            'Two min trackers.',
            'Sort and count.',
          ],
          a: 0,
          exp: 'Skip zeros = filter. Sum + count = accumulator. Average = sum / count.',
        },
        {
          q: 'When dividing the running sum by the count, what edge case must you guard against?',
          opts: [
            'The list being sorted.',
            'The count being 0 (avoid divide-by-zero).',
            'The sum being negative.',
            'The list having duplicates.',
          ],
          a: 1,
          exp: 'If every score was zero (or the list was empty), count = 0 and division explodes. Always guard with IF count > 0.',
        },
      ],
      contentMd: `## Worked Problem: Average Skipping Zeros

\u00A0\u00A0\u00A0\u00A0PROCEDURE averageNonzero(scores) {
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0total ← 0
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0count ← 0
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0FOR EACH s IN scores {
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0IF (s ≠ 0) { total ← total + s; count ← count + 1 }
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0}
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0IF (count = 0) { RETURN 0 }
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0RETURN total / count
\u00A0\u00A0\u00A0\u00A0}

**Test traces:**

| Input | total | count | Result |
|-------|-------|-------|--------|
| [80, 0, 90, 100] | 270 | 3 | 90 |
| [0, 0] | 0 | 0 | 0 (guard) |
| [50] | 50 | 1 | 50 |

## Worked Problem: Detecting a Pattern

Goal: return TRUE if a list contains two consecutive equal elements.

\u00A0\u00A0\u00A0\u00A0PROCEDURE hasRun(list) {
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0FOR i ← 2 TO LENGTH(list) {
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0IF (list[i] = list[i − 1]) { RETURN TRUE }
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0}
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0RETURN FALSE
\u00A0\u00A0\u00A0\u00A0}

**Why start at 2?** list[i − 1] would be list[0] when i = 1, which doesn’t exist in 1-indexed pseudocode.`,
      inputs: {
        prompts: [
          'When dividing two integers, you must guard against the divisor being _______.',
          'When indexing list[i − 1] in a loop, the loop should start at _______ to avoid an out-of-range index in 1-indexed pseudocode.',
          'A procedure that returns a Boolean usually starts with the verb _______ or "has".',
        ],
        answers: ['0', '2', 'is'],
        hints: ['Division by this is undefined.', 'The smallest i such that i − 1 ≥ 1.', 'A common naming convention.'],
        explanation: 'Always check denominator ≠ 0. Pair-comparison loops start at 2 with 1-indexed lists. Naming Boolean procedures is.../has... makes call sites readable.',
      },
      dropdowns: {
        items: [
          { label: 'In RETURN total / count, the most common bug is when ___', options: ['count is 0', 'total is 0', 'list is sorted', 'list is short'] },
          { label: 'A loop comparing list[i] to list[i+1] should iterate i from 1 to ___', options: ['LENGTH(list) − 1', 'LENGTH(list)', 'LENGTH(list) + 1', '0'] },
          { label: 'To return early from the first match in a procedure, use ___', options: ['RETURN', 'DISPLAY', 'CONTINUE', 'BREAK'] },
        ],
        correct: ['count is 0', 'LENGTH(list) − 1', 'RETURN'],
        hints: ['Divide-by-zero.', 'list[i+1] must be valid.', 'AP pseudocode RETURN immediately exits the procedure.'],
        explanation: 'Guard count > 0. Pair loops must end one early. RETURN exits the procedure (and the loop) immediately.',
      },
      strategyMd: `## AP Exam Strategy: FRQ-Style Tracing

- Build a **trace table** with one column per variable and one row per iteration before answering anything.
- Identify the **pattern** (accumulator? counter? min/max?) before chasing line-by-line logic.
- Always check **edge cases**: empty list, single element, all-the-same, all-zeros, negatives.
- For procedures that return a value, note whether RETURN exits early — this changes the trace.`,
      applied: [
        {
          q: 'A function mode(list) returns the most common value. A student writes a doubly-nested loop that for each element counts how many times it appears, tracking the best count. For n = 100,000 inputs the program is far too slow. Which change is most appropriate?',
          opts: [
            'Replace the nested loops with a single loop that uses a frequency map / dictionary keyed by element value.',
            'Add explanatory comments throughout the inner loop describing the comparison logic in clearer English.',
            'Switch the entire program to a different programming language with the same nested-loop structure preserved.',
            'Run the same nested-loop code on more powerful server hardware with faster CPU clock speeds and more RAM.',
          ],
          a: 0,
          exp: 'Algorithmic fix: O(n²) → O(n) by counting frequencies in one pass.',
        },
        {
          q: 'A procedure should return TRUE if at least one element of list is greater than every element of other. Which structure is most efficient and correct?',
          opts: [
            'Compute max(other) once, then a single loop over list checking x > maxOther.',
            'Nested loop comparing every list element to every other element.',
            'Sort both lists, then compare.',
            'Pick a random element and compare.',
          ],
          a: 0,
          exp: 'Precomputing the max once is O(n + m); nested comparison is O(n·m).',
        },
      ],
    },
    7: {
      introMd: `## AP Exam Recap — Algorithms

Cheat sheet for exam day. Match each construct to its AP-pseudocode shape and the most common bug.`,
      quiz1: [
        {
          q: 'On the AP CSP exam, lists in pseudocode are indexed starting at ___',
          opts: ['0', '1', '−1', 'It depends on the problem.'],
          a: 1,
          exp: 'AP pseudocode lists are 1-indexed. list[1] is the first element.',
        },
        {
          q: 'Which expression is TRUE only when x is between 1 and 10 inclusive?',
          opts: [
            'x > 1 AND x < 10',
            'x ≥ 1 OR x ≤ 10',
            'x ≥ 1 AND x ≤ 10',
            'NOT (x = 1 OR x = 10)',
          ],
          a: 2,
          exp: 'Inclusive needs ≥ and ≤. AND ensures both bounds.',
        },
      ],
      contentMd: `## Quick-Reference: Constructs and Pitfalls

| Construct | Looks like | Common bug |
|-----------|-----------|------------|
| Sequence | a; b; c | None — just trace top-down. |
| IF/ELSE | IF (c) {…} ELSE {…} | Wrong comparison (> vs ≥). |
| REPEAT N TIMES | block runs exactly N times | Modifying N inside changes nothing. |
| REPEAT UNTIL | runs at least once, exits when cond true | Forgetting it’s post-test (off by one). |
| FOR EACH x IN list | iterates over elements | Treating x as the index. |
| FOR i ← a TO b | iterates i = a, a+1, …, b | Off-by-one if pairing list[i+1]. |

## Quick-Reference: Boolean Logic

- A AND B → both true.
- A OR B → at least one true.
- NOT (A AND B) = (NOT A) OR (NOT B) (DeMorgan).
- NOT (A OR B) = (NOT A) AND (NOT B).

## Quick-Reference: Efficiency

- Polynomial = reasonable. Exponential = unreasonable.
- Linear search: O(n). Binary search (sorted): O(log n).
- Doubling input on O(n²) → 4×; on O(log n) → +1 step.`,
      inputs: {
        prompts: [
          'AP pseudocode lists are _______-indexed.',
          'A REPEAT UNTIL loop runs the block at least _______ time(s) before checking the condition.',
          'log₂(1,048,576) equals approximately _______.',
        ],
        answers: ['1', '1', '20'],
        hints: ['First element is list[1].', 'Post-test loop.', '2¹⁰ ≈ 1024, 2²⁰ ≈ 1M.'],
        explanation: '1-indexed lists. REPEAT UNTIL is post-test (≥ 1 execution). 2²⁰ = 1,048,576.',
      },
      dropdowns: {
        items: [
          { label: 'Sorted list + need-to-find-one-value → use ___', options: ['binary search', 'linear search', 'sort first', 'random guess'] },
          { label: 'Two algorithms with identical output but different running times — choose the ___ one', options: ['faster (lower growth rate)', 'slower', 'shorter source code', 'one with more comments'] },
          { label: 'A heuristic is appropriate when ___', options: ['the exact algorithm is unreasonable', 'we need a guaranteed optimum', 'the input is tiny', 'the data is sorted'] },
        ],
        correct: ['binary search', 'faster (lower growth rate)', 'the exact algorithm is unreasonable'],
        hints: ['Halving the search space.', 'Correctness is equal; choose efficiency.', 'Heuristics trade optimality for speed.'],
        explanation: 'Sortedness enables binary search. With equal correctness, prefer lower growth rate. Heuristics rescue intractable exact problems.',
      },
      strategyMd: `## Final Exam Tips

- Always **trace** loops with a table; don’t eyeball them.
- Watch the boundaries: > vs ≥, list[1] vs list[0], REPEAT UNTIL post-test.
- Distinguish **correctness** (does it produce the right output?) from **efficiency** (how fast / how much memory?).
- For pseudocode FRQs, write at least one example trace in your scratch space.
- "Most appropriate" usually means efficient AND correct AND simplest — eliminate options that fail any one.`,
      applied: [
        {
          q: 'A learning app records millions of student responses and must repeatedly answer "how many responses contain word W?". Which design improves both correctness and efficiency?',
          opts: [
            'Linearly scan every recorded student response from start to finish on every individual incoming query.',
            'Precompute, then maintain, a frequency map updated when responses arrive; queries become a single lookup.',
            'Sort all of the recorded student responses alphabetically and then run a binary search on every query.',
            'Compress the entire response dataset on disk and decompress the whole archive on every individual query.',
          ],
          a: 1,
          exp: 'A maintained index turns each query into O(1).',
        },
        {
          q: 'A class debates which algorithm is "best". A is correct and runs in O(n²). B is faster (O(n log n)) but produces wrong results on lists with duplicates. The dataset has many duplicates. Which choice is best supported?',
          opts: [
            'Always choose B because it is faster.',
            'Choose A because correctness is a precondition for considering efficiency.',
            'Choose B and ignore the duplicate cases.',
            'Neither — the problem is undecidable.',
          ],
          a: 1,
          exp: 'Correctness comes first; efficiency is the tiebreaker among correct algorithms.',
        },
      ],
    },
  },
};

export const bi3AlgorithmsTopics: Topic[] = [cspAlgorithms];
