import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Recursion (AP Computer Science A).
 * Registry key / DB Topic.slug: 'csa-recursive-methods'.
 * 7 parts, gold-standard structure modeled on the algebra1-completing-the-square
 * pilot: teach (text) → interactive check (multiple-choice / dropdown-select /
 * input-boxes) → traced worked examples → Exit Quiz. Java code in fenced ```java
 * blocks (AP CSA is Java). Concept-forward topic, so checks favor multiple-choice
 * + dropdown, with input-boxes for exact traced return values / call counts.
 * LaTeX uses DOUBLED backslashes (template-literal strings); inline math $...$.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'csa-recursive-methods',
    sections: [
      {
        id: 'rec1-intro',
        type: 'text' as const,
        content: `# 🔁 Recursion

**Part 1 of 7 — What Recursion Is**

---

### Topics in This Part

| Section |
|---------|
| A Method That Calls Itself |
| Base Case vs. Recursive Case |
| Why Recursion Doesn't Run Forever |
| Reading a Recursive Method |

> 🔑 **Key Concept:** A **recursive method** is a method that calls **itself** to solve a smaller version of the same problem. Every recursive method needs two ingredients: a **base case** that stops the recursion, and a **recursive case** that moves toward the base case.`,
      },
      {
        id: 'rec1-definition',
        type: 'text' as const,
        content: `## A Method That Calls Itself

Look at the classic example — **factorial**. By definition $n! = n \\cdot (n-1)!$, and $0! = 1$. That mathematical definition translates almost word-for-word into Java:

\`\`\`java
public static int factorial(int n) {
    if (n == 0) {        // base case
        return 1;
    }
    return n * factorial(n - 1);   // recursive case
}
\`\`\`

The method \`factorial\` **calls itself** with a smaller argument (\`n - 1\`). It keeps shrinking the problem until it reaches \`n == 0\`, where it can answer **directly** without recursing.

| Term | Meaning |
|------|---------|
| **Base case** | The condition where the method returns **without** calling itself. It stops the recursion. |
| **Recursive case** | The branch where the method calls itself on a **smaller / simpler** input. |

> ⚠️ **Every** recursive method *must* have at least one base case. A recursive method with no reachable base case calls itself forever and crashes with a **StackOverflowError**.`,
      },
      {
        id: 'rec1-q-parts',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the `factorial` method above, which line is the base case?',
              options: [
                '`if (n == 0) return 1;`',
                '`return n * factorial(n - 1);`',
                '`public static int factorial(int n)`',
                'There is no base case.',
              ],
              correctAnswer: 0,
              explanation: 'The base case is the branch that returns a value **without** calling the method again. `if (n == 0) return 1;` stops the recursion. The second line is the recursive case.',
            },
            {
              question: 'What is the single most important reason every recursive method needs a base case?',
              options: [
                'To give the recursion a place to stop so it does not call itself forever',
                'To make the method run faster',
                'To allow the method to return a String instead of an int',
                'To let the method be called from main',
              ],
              correctAnswer: 0,
              explanation: 'Without a reachable base case, each call makes another call, the call stack grows without bound, and the program crashes with a StackOverflowError.',
            },
          ],
        },
      },
      {
        id: 'rec1-toward-base',
        type: 'text' as const,
        content: `## Moving *Toward* the Base Case

A base case alone is not enough — the recursive call must make **progress** toward it. In \`factorial\`, each call uses \`n - 1\`, so \`n\` marches steadily down to \`0\`.

\`\`\`text
factorial(4)
 → 4 * factorial(3)
        → 3 * factorial(2)
               → 2 * factorial(1)
                      → 1 * factorial(0)
                             → 1        (base case reached!)
\`\`\`

Now the answers flow **back up**: $1 \\to 1 \\to 2 \\to 6 \\to 24$.

> 💡 **The two-part test for a correct recursion:**
> 1. Is there a base case that returns directly?
> 2. Does **every** recursive call get **closer** to that base case?
>
> If a recursive call used \`n + 1\` or \`n\` unchanged, it would never reach \`n == 0\` — that is **infinite recursion**.`,
      },
      {
        id: 'rec1-q-infinite',
        type: 'multiple-choice' as const,
        content: `**Spot the Bug** 🐛`,
        exercise: {
          questions: [
            {
              question: 'Which version of `countDown` causes **infinite recursion** (a StackOverflowError)?',
              options: [
                '`void f(int n){ if(n<=0) return; System.out.print(n); f(n+1); }`',
                '`void f(int n){ if(n<=0) return; System.out.print(n); f(n-1); }`',
                '`void f(int n){ if(n<=0) return; f(n-1); System.out.print(n); }`',
                '`void f(int n){ if(n==0) return; System.out.print(n); f(n-1); }`',
              ],
              correctAnswer: 0,
              explanation: 'Calling `f(n+1)` moves *away* from the base case `n <= 0`, so it never stops. The others all shrink `n` toward the base case (the last one is fine for n ≥ 0, though it would overshoot a negative start — but it still moves toward 0).',
            },
          ],
        },
      },
      {
        id: 'rec1-q-trace',
        type: 'input-boxes' as const,
        content: `**Trace It** 🧮

Using the \`factorial\` method from this part:

**1)** What does \`factorial(3)\` return?
**2)** What does \`factorial(0)\` return?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['6', '1'],
          hint1: '`factorial(3) = 3 * factorial(2) = 3 * 2 * factorial(1) = 3 * 2 * 1 * factorial(0)`.',
          hint2: '`factorial(0)` hits the base case and returns 1 directly.',
          hint3: '`3 * 2 * 1 * 1 = 6`. And `factorial(0) = 1`.',
          explanation: '1) `factorial(3) = 3 * 2 * 1 * 1 = 6`.  2) `factorial(0)` returns `1` from the base case (no recursion).',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'csa-recursive-methods',
    sections: [
      {
        id: 'rec2-intro',
        type: 'text' as const,
        content: `# 🔁 Recursion

**Part 2 of 7 — Tracing the Call Stack**

---

> 🔑 **The Idea:** When a method calls itself, each call gets its **own copy** of the parameters and local variables, stacked on the **call stack**. Calls pause "on the way down" and resume "on the way up." Tracing this is the #1 recursion skill the AP exam tests.`,
      },
      {
        id: 'rec2-stack',
        type: 'text' as const,
        content: `## How the Call Stack Works

Each method call is a **stack frame**. A new call is pushed on **top**; when it returns, it is popped off and control goes back to the caller, which **resumes right where it paused**.

Consider:

\`\`\`java
public static int sum(int n) {
    if (n <= 0) return 0;        // base case
    return n + sum(n - 1);       // recursive case
}
\`\`\`

Tracing \`sum(3)\`:

| Step | What happens | Pending expression |
|------|--------------|--------------------|
| 1 | \`sum(3)\` called | \`3 + sum(2)\` |
| 2 | \`sum(2)\` called | \`2 + sum(1)\` |
| 3 | \`sum(1)\` called | \`1 + sum(0)\` |
| 4 | \`sum(0)\` → **base case** | returns \`0\` |
| 5 | \`sum(1)\` resumes | \`1 + 0 = 1\` |
| 6 | \`sum(2)\` resumes | \`2 + 1 = 3\` |
| 7 | \`sum(3)\` resumes | \`3 + 3 = 6\` |

> 💡 The recursive calls **stack up** until the base case, then the partial results **unwind** back up. \`sum(3)\` returns \`6\` — which makes sense, since $3 + 2 + 1 = 6$.`,
      },
      {
        id: 'rec2-q-sum',
        type: 'input-boxes' as const,
        content: `**Trace the Stack** 🧮

Using \`sum\` above (\`if (n <= 0) return 0; return n + sum(n - 1);\`):

**1)** What does \`sum(4)\` return?
**2)** How many total calls to \`sum\` occur when evaluating \`sum(4)\` (count \`sum(4)\` itself)?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['10', '5'],
          hint1: '`sum(4) = 4 + 3 + 2 + 1 + 0`.',
          hint2: 'The calls are `sum(4)`, `sum(3)`, `sum(2)`, `sum(1)`, `sum(0)`.',
          hint3: '`4 + 3 + 2 + 1 + 0 = 10`, and there are 5 calls (n = 4 down through 0).',
          explanation: '1) `sum(4) = 4 + 3 + 2 + 1 + 0 = 10`.  2) The calls are `sum(4), sum(3), sum(2), sum(1), sum(0)` — that is **5** calls.',
        },
      },
      {
        id: 'rec2-before-after',
        type: 'text' as const,
        content: `## Code *Before* vs. *After* the Recursive Call

Statements **before** the recursive call run on the way **down**; statements **after** it run on the way **up**. This is why the order of output can surprise you.

\`\`\`java
public static void mystery(int n) {
    if (n == 0) return;
    System.out.print(n + " ");   // BEFORE the call
    mystery(n - 1);
}
// mystery(3) prints:  3 2 1
\`\`\`

\`\`\`java
public static void mystery2(int n) {
    if (n == 0) return;
    mystery2(n - 1);
    System.out.print(n + " ");   // AFTER the call
}
// mystery2(3) prints:  1 2 3
\`\`\`

> ⚠️ Same numbers, **reversed order**. In \`mystery2\`, every \`print\` waits until the deeper call finishes, so the smallest \`n\` prints first. Watching *where* the work happens relative to the recursive call is essential.`,
      },
      {
        id: 'rec2-q-order',
        type: 'multiple-choice' as const,
        content: `**Output Order** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For `mystery2` (recursive call BEFORE the print), what does `mystery2(4)` print?',
              options: ['`1 2 3 4`', '`4 3 2 1`', '`1 2 3 4 5`', 'nothing'],
              correctAnswer: 0,
              explanation: 'Each print waits for the deeper call to finish, so prints happen on the way back up: smallest first. `mystery2(4)` prints `1 2 3 4`.',
            },
            {
              question: 'For `mystery` (print BEFORE the call), what does `mystery(4)` print?',
              options: ['`4 3 2 1`', '`1 2 3 4`', '`4 3 2 1 0`', '`0 1 2 3 4`'],
              correctAnswer: 0,
              explanation: 'The print runs first each time (on the way down), so the largest `n` prints first: `4 3 2 1`. It stops at `n == 0` before printing 0.',
            },
          ],
        },
      },
      {
        id: 'rec2-q-dropdown',
        type: 'dropdown-select' as const,
        content: `**Fill the Trace** 🔽

Trace \`sum(2)\` for \`int sum(int n){ if(n<=0) return 0; return n + sum(n-1); }\`.`,
        exercise: {
          dropdowns: [
            { label: '`sum(2)` waits on:', options: ['`2 + sum(1)`', '`2 + sum(2)`', '`2 + sum(3)`', '`sum(1)`'] },
            { label: '`sum(1)` waits on:', options: ['`1 + sum(0)`', '`1 + sum(1)`', '`1 + sum(2)`', '`0 + sum(1)`'] },
            { label: '`sum(0)` returns:', options: ['`0`', '`1`', '`2`', 'nothing'] },
            { label: 'Final value of `sum(2)`:', options: ['`3`', '`2`', '`1`', '`6`'] },
          ],
          correctAnswers: ['`2 + sum(1)`', '`1 + sum(0)`', '`0`', '`3`'],
          hint1: 'Each call returns `n + sum(n-1)` until `n <= 0`.',
          hint2: '`sum(0)` hits the base case and returns `0`.',
          hint3: 'Unwinding: `sum(0)=0`, `sum(1)=1+0=1`, `sum(2)=2+1=3`.',
          explanation: '`sum(0)=0`, then `sum(1)=1+0=1`, then `sum(2)=2+1=3`. So `sum(2)` returns `3` ($= 2+1$).',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'csa-recursive-methods',
    sections: [
      {
        id: 'rec3-intro',
        type: 'text' as const,
        content: `# 🔁 Recursion

**Part 3 of 7 — Recursion vs. Iteration**

---

> 🔑 **The Idea:** Anything you can do with a loop, you can do with recursion, and vice-versa. Recursion trades a loop variable for the **call stack**. Knowing how to convert between them — and the cost of each — is core AP CSA content.`,
      },
      {
        id: 'rec3-compare',
        type: 'text' as const,
        content: `## The Same Job, Two Ways

Here is a sum from \`1\` to \`n\`, written **iteratively** and **recursively**:

\`\`\`java
// Iterative
public static int sumIter(int n) {
    int total = 0;
    for (int i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

// Recursive
public static int sumRec(int n) {
    if (n <= 0) return 0;
    return n + sumRec(n - 1);
}
\`\`\`

| | Iteration (loop) | Recursion |
|---|---|---|
| **Repetition via** | loop variable (\`i\`) | repeated method calls |
| **State stored in** | local variables | the call stack |
| **Stops when** | loop condition is false | base case is reached |
| **Risk** | infinite loop | infinite recursion / StackOverflowError |

> 💡 Recursion shines when a problem is **naturally** defined in terms of smaller copies of itself — trees, nested structures, "divide and conquer." For simple counting, a loop is usually simpler and uses less memory.`,
      },
      {
        id: 'rec3-q-equivalence',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which statement about recursion and iteration is TRUE?',
              options: [
                'Any loop can be rewritten with recursion, and any recursion can be rewritten with a loop',
                'Recursion is always faster than iteration',
                'Only recursion can solve problems involving repetition',
                'A recursive method can never cause an error that a loop can',
              ],
              correctAnswer: 0,
              explanation: 'Recursion and iteration are equally powerful — either can be converted to the other. Recursion is usually *not* faster (it adds call-stack overhead), and both can fail (infinite loop vs. StackOverflowError).',
            },
            {
              question: 'Compared to the iterative version, the recursive `sumRec(n)` uses extra memory because it...',
              options: [
                'creates a stack frame for each pending call',
                'stores the whole answer in a single variable',
                'uses a for-loop internally',
                'cannot use the int type',
              ],
              correctAnswer: 0,
              explanation: 'Each unfinished recursive call keeps a stack frame (its own `n` and pending `n + ...`) until the base case returns. That is the memory cost recursion adds over a loop.',
            },
          ],
        },
      },
      {
        id: 'rec3-power',
        type: 'text' as const,
        content: `## Worked Conversion: Power

Compute $b^e$ (b to the power e) for a non-negative integer exponent. The recursive definition is $b^e = b \\cdot b^{\\,e-1}$ with $b^0 = 1$.

\`\`\`java
public static int power(int b, int e) {
    if (e == 0) return 1;            // base case: b^0 = 1
    return b * power(b, e - 1);      // recursive case
}
\`\`\`

Trace \`power(2, 3)\`:

$$2 \\cdot \\text{power}(2,2) = 2 \\cdot 2 \\cdot \\text{power}(2,1) = 2 \\cdot 2 \\cdot 2 \\cdot \\text{power}(2,0) = 2 \\cdot 2 \\cdot 2 \\cdot 1 = 8$$

> ✅ **Check:** $2^3 = 8$ ✓. The exponent (not the base) shrinks toward the base case \`e == 0\`.`,
      },
      {
        id: 'rec3-q-power',
        type: 'input-boxes' as const,
        content: `**Trace Power** 🧮

Using \`power(int b, int e)\` above (\`if (e == 0) return 1; return b * power(b, e - 1);\`):

**1)** What does \`power(3, 2)\` return?
**2)** What does \`power(5, 0)\` return?
**3)** What does \`power(2, 4)\` return?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['9', '1', '16'],
          hint1: '`power(3,2) = 3 * power(3,1) = 3 * 3 * power(3,0)`.',
          hint2: 'Any base to the power 0 hits the base case and returns 1.',
          hint3: '`power(2,4) = 2*2*2*2`.',
          explanation: '1) $3^2 = 9$.  2) $5^0 = 1$ (base case).  3) $2^4 = 16$.',
        },
      },
      {
        id: 'rec3-q-convert',
        type: 'dropdown-select' as const,
        content: `**Match Loop to Recursion** 🔽

You're converting the loop \`for(int i=1;i<=n;i++) total+=i;\` into a recursive \`sumRec(int n)\`. Choose each correct piece.`,
        exercise: {
          dropdowns: [
            { label: 'Base case:', options: ['`if (n <= 0) return 0;`', '`if (n == n) return n;`', '`if (n > 0) return 0;`', '(no base case)'] },
            { label: 'Recursive case:', options: ['`return n + sumRec(n - 1);`', '`return sumRec(n - 1);`', '`return n + sumRec(n);`', '`return n * sumRec(n - 1);`'] },
            { label: 'What replaces the loop variable `i`:', options: ['the call stack of pending calls', 'a global counter', 'the array length', 'nothing — it stays a loop'] },
          ],
          correctAnswers: ['`if (n <= 0) return 0;`', '`return n + sumRec(n - 1);`', 'the call stack of pending calls'],
          hint1: 'The loop sums down to 1; the recursion should stop (return 0) at or below 0.',
          hint2: 'Each loop pass adds `i`; the recursion adds `n` then handles the smaller `n - 1`.',
          hint3: 'Recursion replaces the loop variable with stacked calls, each holding its own `n`.',
          explanation: 'Iteration uses a loop variable; recursion stores the same progress on the call stack. `sumRec(n)` returns `0` at the base case and `n + sumRec(n-1)` otherwise — exactly the loop\'s running total.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'csa-recursive-methods',
    sections: [
      {
        id: 'rec4-intro',
        type: 'text' as const,
        content: `# 🔁 Recursion

**Part 4 of 7 — Recursion on Strings**

---

> 🔑 **The Idea:** Strings are a favorite AP target for recursion. The trick is to peel off **one character** (usually the first or last) and recurse on the **rest** of the string using \`substring\`.`,
      },
      {
        id: 'rec4-substring',
        type: 'text' as const,
        content: `## Peeling Off One Character

Two String methods power almost every recursive String problem:

| Method | Returns |
|--------|---------|
| \`s.length()\` | number of characters |
| \`s.substring(1)\` | everything **except** the first character |
| \`s.charAt(0)\` | the **first** character |
| \`s.substring(0, s.length()-1)\` | everything **except** the last character |

**Reverse a String** by moving the first character to the *end* of the reversed rest:

\`\`\`java
public static String reverse(String s) {
    if (s.length() <= 1) return s;            // base case
    return reverse(s.substring(1)) + s.charAt(0);
}
\`\`\`

Trace \`reverse("cat")\`:

\`\`\`text
reverse("cat") = reverse("at") + 'c'
reverse("at")  = reverse("t")  + 'a'
reverse("t")   = "t"                 (base case, length 1)
\`\`\`

Unwinding: \`reverse("t") = "t"\` → \`reverse("at") = "t" + "a" = "ta"\` → \`reverse("cat") = "ta" + "c" = "tac"\`.

> 💡 The base case \`s.length() <= 1\` handles both a single character **and** the empty string \`""\` — a one-character string reversed is itself.`,
      },
      {
        id: 'rec4-q-reverse',
        type: 'multiple-choice' as const,
        content: `**Trace the String** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Using `reverse` above, what does `reverse("dog")` return?',
              options: ['`"god"`', '`"dog"`', '`"odg"`', '`"gdo"`'],
              correctAnswer: 0,
              explanation: '`reverse("dog") = reverse("og") + "d" = ("go") + "d" = "god"`. It reverses the string.',
            },
            {
              question: 'Why does `reverse` use `s.length() <= 1` (not `s.length() == 0`) as the base case?',
              options: [
                'Both `""` and a single character should return unchanged, and stopping at length 1 avoids an extra call',
                'Because `substring(1)` does not work on length-1 strings',
                'Because a String of length 1 cannot be reversed at all',
                'It is a bug — it should be `== 0`',
              ],
              correctAnswer: 0,
              explanation: 'A length-0 or length-1 string is its own reverse, so returning `s` directly is correct and slightly more efficient. (Using `== 0` also works, but recurses one extra time.)',
            },
          ],
        },
      },
      {
        id: 'rec4-count',
        type: 'text' as const,
        content: `## Counting With Recursion

To **count** something in a String, add \`1\` (or \`0\`) for the first character, then recurse on the rest. Here we count occurrences of a target character:

\`\`\`java
public static int countChar(String s, char c) {
    if (s.length() == 0) return 0;           // base case: empty
    int rest = countChar(s.substring(1), c); // count in the rest
    if (s.charAt(0) == c) {
        return 1 + rest;
    }
    return rest;
}
\`\`\`

Trace \`countChar("banana", 'a')\`:

\`\`\`text
b → 0 + count("anana")
a → 1 + count("nana")
n → 0 + count("ana")
a → 1 + count("na")
n → 0 + count("a")
a → 1 + count("")  → 1 + 0
\`\`\`

Adding the \`1\`s: there are **3** \`a\`'s in \`"banana"\`.

> ⚠️ Notice the recursion **always** shrinks the string with \`substring(1)\`, and the base case is the empty string \`""\`. The \`if\` only decides whether to *add* 1 — it does **not** stop the recursion.`,
      },
      {
        id: 'rec4-q-count',
        type: 'input-boxes' as const,
        content: `**Count It** 🧮

Using \`countChar(String s, char c)\` above:

**1)** \`countChar("mississippi", 's')\` returns?
**2)** \`countChar("hello", 'z')\` returns?
**3)** \`countChar("aaaa", 'a')\` returns?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '0', '4'],
          hint1: 'Spell out m-i-s-s-i-s-s-i-p-p-i and count the s characters.',
          hint2: 'If the character never appears, every branch adds 0.',
          hint3: '`"mississippi"` has s at positions 2,3,5,6 → 4 of them.',
          explanation: '1) `"mississippi"` contains 4 `s`\'s.  2) `"hello"` has no `z`, so 0.  3) `"aaaa"` is all `a`\'s → 4.',
        },
      },
      {
        id: 'rec4-q-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Reverse** 🔽

Complete the recursive \`reverse\` trace for \`reverse("hi")\`.`,
        exercise: {
          dropdowns: [
            { label: 'Recursive line returns:', options: ['`reverse(s.substring(1)) + s.charAt(0)`', '`s.charAt(0) + reverse(s.substring(1))`', '`reverse(s) + s`', '`s.substring(1)`'] },
            { label: '`reverse("hi")` first computes:', options: ['`reverse("i") + \'h\'`', '`reverse("h") + \'i\'`', '`reverse("hi") + \'h\'`', '`\'h\' + reverse("i")`'] },
            { label: '`reverse("i")` returns:', options: ['`"i"`', '`""`', '`"hi"`', '`"ih"`'] },
            { label: 'Final result `reverse("hi")`:', options: ['`"ih"`', '`"hi"`', '`"ii"`', '`"hh"`'] },
          ],
          correctAnswers: ['`reverse(s.substring(1)) + s.charAt(0)`', '`reverse("i") + \'h\'`', '`"i"`', '`"ih"`'],
          hint1: 'Reverse moves the FIRST char to the END of the reversed rest.',
          hint2: '`s.substring(1)` of `"hi"` is `"i"`; `s.charAt(0)` is `\'h\'`.',
          hint3: '`reverse("i") = "i"`, so `reverse("hi") = "i" + "h" = "ih"`.',
          explanation: 'The reversed rest comes first, then the first character is appended: `reverse("hi") = reverse("i") + \'h\' = "i" + "h" = "ih"`.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'csa-recursive-methods',
    sections: [
      {
        id: 'rec5-intro',
        type: 'text' as const,
        content: `# 🔁 Recursion

**Part 5 of 7 — Fibonacci & Multiple Recursive Calls**

---

> 🔑 **The Idea:** Some methods make **two (or more)** recursive calls. The most famous is **Fibonacci**, where each term is the sum of the two before it. Multiple calls cause the work to **branch** — which is powerful but can be expensive.`,
      },
      {
        id: 'rec5-fib',
        type: 'text' as const,
        content: `## The Fibonacci Sequence

The Fibonacci numbers are $0, 1, 1, 2, 3, 5, 8, 13, \\ldots$, defined by:

$$F(0) = 0, \\quad F(1) = 1, \\quad F(n) = F(n-1) + F(n-2)$$

In Java, this needs **two** base cases and **two** recursive calls:

\`\`\`java
public static int fib(int n) {
    if (n == 0) return 0;            // base case
    if (n == 1) return 1;            // base case
    return fib(n - 1) + fib(n - 2);  // TWO recursive calls
}
\`\`\`

| $n$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|-----|---|---|---|---|---|---|---|---|
| $F(n)$ | 0 | 1 | 1 | 2 | 3 | 5 | 8 | 13 |

> 💡 Each value is the sum of the two before it: $F(5) = F(4) + F(3) = 3 + 2 = 5$. Always confirm both base cases first — \`fib\` would never terminate with only \`n == 0\`, because \`fib(1)\` would try to compute \`fib(0) + fib(-1)\`.`,
      },
      {
        id: 'rec5-q-fib',
        type: 'input-boxes' as const,
        content: `**Compute Fibonacci** 🧮

Using \`fib\` above:

**1)** \`fib(4)\` returns?
**2)** \`fib(6)\` returns?
**3)** \`fib(2)\` returns?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '8', '1'],
          hint1: '`fib(4) = fib(3) + fib(2)`.',
          hint2: 'Build up: 0, 1, 1, 2, 3, 5, 8, ...',
          hint3: '`fib(4)=3`, `fib(5)=5`, `fib(6)=8`. And `fib(2)=fib(1)+fib(0)=1+0=1`.',
          explanation: '1) `fib(4) = fib(3)+fib(2) = 2+1 = 3`.  2) `fib(6) = 8` (sequence 0,1,1,2,3,5,8).  3) `fib(2) = fib(1)+fib(0) = 1+0 = 1`.',
        },
      },
      {
        id: 'rec5-branching',
        type: 'text' as const,
        content: `## The Cost of Branching

Because \`fib\` calls itself **twice**, the calls form a **tree**, and the same subproblems are recomputed many times. Here is the call tree for \`fib(4)\`:

\`\`\`text
            fib(4)
          /        \\
      fib(3)        fib(2)
      /    \\        /    \\
  fib(2)  fib(1) fib(1) fib(0)
  /    \\
fib(1) fib(0)
\`\`\`

Count the calls: \`fib(4)\` triggers **9** total calls to \`fib\` (1 + 2 + 2 + 2 + 2... count the nodes: fib(4), two children, etc. — there are 9 nodes). Notice \`fib(2)\` is computed **twice** and \`fib(1)\` **three** times — wasted work.

> ⚠️ This naïve Fibonacci is **exponentially** slow ($O(2^n)$-ish). It is correct and great for *learning* recursion, but in practice you'd use iteration or "memoization" to avoid recomputing. On the AP exam, you mainly need to **trace** it and **count calls**.`,
      },
      {
        id: 'rec5-q-tree',
        type: 'multiple-choice' as const,
        content: `**Reason About the Tree** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the call tree for `fib(4)` above, how many times is `fib(1)` evaluated?',
              options: ['3 times', '1 time', '2 times', '4 times'],
              correctAnswer: 0,
              explanation: 'Reading the leaves and the branch nodes: `fib(1)` appears three times in the tree (under `fib(3)→fib(2)`, under `fib(3)` directly, and under `fib(2)`). The repeated work is exactly why naïve Fibonacci is slow.',
            },
            {
              question: 'Why does `fib` need TWO base cases (`n == 0` and `n == 1`)?',
              options: [
                'Because the recursive step `fib(n-1) + fib(n-2)` reaches down two steps, so stopping at only `n == 0` would let `fib(1)` call `fib(-1)`',
                'Because Fibonacci numbers are always even',
                'Because Java requires every method to have two return statements',
                'To make the method run twice as fast',
              ],
              correctAnswer: 0,
              explanation: 'Since each call reaches `n-1` AND `n-2`, you must catch both `n == 0` and `n == 1`; otherwise `fib(1)` would evaluate `fib(0) + fib(-1)` and recurse below zero forever.',
            },
          ],
        },
      },
      {
        id: 'rec5-q-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build Fibonacci** 🔽

Complete the recursive \`fib\` and read the sequence.`,
        exercise: {
          dropdowns: [
            { label: 'First base case:', options: ['`if (n == 0) return 0;`', '`if (n == 0) return 1;`', '`if (n == 1) return 0;`', '`if (n == 2) return 1;`'] },
            { label: 'Second base case:', options: ['`if (n == 1) return 1;`', '`if (n == 1) return 0;`', '`if (n == 2) return 1;`', '(none needed)'] },
            { label: 'Recursive case:', options: ['`return fib(n-1) + fib(n-2);`', '`return fib(n-1) * fib(n-2);`', '`return fib(n-1) + 1;`', '`return n + fib(n-1);`'] },
            { label: 'Value of `fib(5)`:', options: ['`5`', '`8`', '`3`', '`13`'] },
          ],
          correctAnswers: ['`if (n == 0) return 0;`', '`if (n == 1) return 1;`', '`return fib(n-1) + fib(n-2);`', '`5`'],
          hint1: 'By definition $F(0)=0$ and $F(1)=1$.',
          hint2: 'Each term is the SUM of the previous two.',
          hint3: 'Sequence: 0, 1, 1, 2, 3, 5, ... so $F(5) = 5$.',
          explanation: '$F(0)=0$, $F(1)=1$, $F(n)=F(n-1)+F(n-2)$. The sequence is 0, 1, 1, 2, 3, 5, so `fib(5)` returns `5`.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'csa-recursive-methods',
    sections: [
      {
        id: 'rec6-intro',
        type: 'text' as const,
        content: `# 🔁 Recursion

**Part 6 of 7 — Recursion on Arrays & Common Pitfalls**

---

> 🔑 **The Idea:** To recurse over an array, pass an **index** that moves toward the end (or the length toward 0). Combined with the pitfalls section, this rounds out everything the AP exam asks about recursion.`,
      },
      {
        id: 'rec6-array',
        type: 'text' as const,
        content: `## Recursing Over an Array

Unlike a String, you can't easily "chop off" an array element, so you pass an **index** that advances toward \`arr.length\`. Here we sum an \`int[]\` starting at index \`i\`:

\`\`\`java
public static int arraySum(int[] arr, int i) {
    if (i == arr.length) return 0;             // base case: past the end
    return arr[i] + arraySum(arr, i + 1);      // add this element, recurse
}
// Called as arraySum(arr, 0) to sum the whole array.
\`\`\`

Trace \`arraySum({4, 2, 7}, 0)\`:

\`\`\`text
arraySum(arr,0) = 4 + arraySum(arr,1)
arraySum(arr,1) = 2 + arraySum(arr,2)
arraySum(arr,2) = 7 + arraySum(arr,3)
arraySum(arr,3) = 0          (i == length, base case)
\`\`\`

Unwinding: $0 \\to 7 \\to 9 \\to 13$. The array \`{4, 2, 7}\` sums to **13**.

> 💡 The index \`i\` is the "loop variable" of the recursion. The base case fires when \`i\` reaches \`arr.length\` — there is **no** element at that index, so we return the identity value \`0\`.`,
      },
      {
        id: 'rec6-q-array',
        type: 'input-boxes' as const,
        content: `**Trace the Array** 🧮

Using \`arraySum(int[] arr, int i)\` above, with \`arr = {5, 1, 3, 6}\`:

**1)** \`arraySum(arr, 0)\` returns?
**2)** \`arraySum(arr, 2)\` returns? *(starts at index 2)*
**3)** \`arraySum(arr, 4)\` returns? *(index equals length)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['15', '9', '0'],
          hint1: 'Index 0 sums the whole array: 5+1+3+6.',
          hint2: 'Starting at index 2 sums only arr[2] and arr[3]: 3 + 6.',
          hint3: 'Index 4 equals the length, so it hits the base case immediately and returns 0.',
          explanation: '1) `5+1+3+6 = 15`.  2) starts at index 2: `3 + 6 = 9`.  3) `i == arr.length` (4) → base case → `0`.',
        },
      },
      {
        id: 'rec6-pitfalls',
        type: 'text' as const,
        content: `## Common Pitfalls (Memorize These)

| Pitfall | What goes wrong | Fix |
|---------|-----------------|-----|
| **No base case** | calls itself forever | Add a branch that returns without recursing |
| **Base case never reached** | recursive call doesn't make progress (e.g. \`n\` unchanged or \`n+1\`) | Shrink the argument toward the base case |
| **Wrong order of work** | output reversed / wrong | Put code *before* the call for top-down, *after* for bottom-up |
| **Off-by-one in index recursion** | \`ArrayIndexOutOfBounds\` or missed element | Base case at \`i == arr.length\`; recurse with \`i + 1\` |
| **Forgetting to return the recursive result** | method returns a default / wrong value | Use \`return helper(...)\`, not just \`helper(...)\` |

> ⚠️ **Most common AP free-response error:** writing \`fib(n-1) + fib(n-2)\` but forgetting the \`return\`, or recursing without using the returned value. A recursive call's result is **useless** unless you \`return\` it (or store/combine it).`,
      },
      {
        id: 'rec6-q-pitfalls',
        type: 'multiple-choice' as const,
        content: `**Diagnose the Bug** 🐛`,
        exercise: {
          questions: [
            {
              question: 'What is wrong with: `int sum(int n){ if(n<=0) return 0; sum(n-1); return n; }`?',
              options: [
                'It ignores the recursive result — `sum(n-1)` is computed but never added, so it returns only `n`',
                'It has no base case',
                'It will throw a StackOverflowError',
                'Nothing is wrong; it sums correctly',
              ],
              correctAnswer: 0,
              explanation: 'The line `sum(n-1);` runs but its return value is thrown away. The method returns just `n`. It should be `return n + sum(n-1);`. This is a classic "forgot to use the recursive result" bug.',
            },
            {
              question: 'A recursive method runs forever and crashes with StackOverflowError. The MOST likely cause is:',
              options: [
                'The recursive calls never make progress toward a reachable base case',
                'The method returns the wrong type',
                'The array is too large',
                'It uses a for-loop inside',
              ],
              correctAnswer: 0,
              explanation: 'StackOverflowError from recursion means the base case is never reached — either there is no base case, or the argument is not shrinking toward it.',
            },
          ],
        },
      },
      {
        id: 'rec6-q-dropdown',
        type: 'dropdown-select' as const,
        content: `**Fix the Recursion** 🔽

You want \`countdown(n)\` to print \`n, n-1, ..., 1\` then stop. Choose each correct piece.`,
        exercise: {
          dropdowns: [
            { label: 'Base case:', options: ['`if (n <= 0) return;`', '`if (n == 100) return;`', '`if (n > 0) return;`', '(no base case)'] },
            { label: 'Print statement:', options: ['`System.out.print(n + " ");`', '`System.out.print(0);`', '`return n;`', '`System.out.print(n+1);`'] },
            { label: 'Recursive call:', options: ['`countdown(n - 1);`', '`countdown(n);`', '`countdown(n + 1);`', '`countdown(0);`'] },
          ],
          correctAnswers: ['`if (n <= 0) return;`', '`System.out.print(n + " ");`', '`countdown(n - 1);`'],
          hint1: 'The base case must stop when there is nothing left to print (n at or below 0).',
          hint2: 'To print n first then descend, print BEFORE the recursive call.',
          hint3: 'Each call must shrink n toward the base case, so recurse with `n - 1`.',
          explanation: 'Correct method: `void countdown(int n){ if(n<=0) return; System.out.print(n+" "); countdown(n-1); }` prints `n n-1 ... 1`. Base case stops at 0; `n-1` makes progress; printing before the call gives descending order.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'csa-recursive-methods',
    sections: [
      {
        id: 'rec7-intro',
        type: 'text' as const,
        content: `# 🔁 Recursion

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) identify base and recursive cases, (2) trace the call stack, (3) convert between recursion and iteration, (4) recurse on Strings and arrays, and (5) reason about Fibonacci-style branching. Let's put it together.`,
      },
      {
        id: 'rec7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Stop the recursion | a **base case** that returns without recursing |
| Make progress | each recursive call uses a **smaller** input (\`n-1\`, \`substring(1)\`, \`i+1\`) |
| Combine results | \`return <something> + helper(...)\` — always **use** the returned value |
| Top-down output | put work **before** the recursive call |
| Bottom-up output | put work **after** the recursive call |
| Recurse on an array | pass an **index**; base case at \`i == arr.length\` |
| Two-step definitions (Fibonacci) | needs **two** base cases (\`n==0\`, \`n==1\`) |

> ⚠️ Top three mistakes: (1) no reachable base case → StackOverflowError; (2) forgetting to \`return\` / use the recursive result; (3) wrong order of work relative to the call.`,
      },
      {
        id: 'rec7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What does this method return for `f(5)`?  `int f(int n){ if(n==0) return 0; return 2 + f(n-1); }`',
              options: ['`10`', '`5`', '`2`', '`32`'],
              correctAnswer: 0,
              explanation: 'Each of the 5 recursive steps adds 2 before hitting the base case (which adds 0): `2*5 = 10`. (`f(5)=2+f(4)=...=2+2+2+2+2+0 = 10`.)',
            },
            {
              question: 'What does `g("abc")` return?  `String g(String s){ if(s.length()==0) return ""; return g(s.substring(1)) + s.charAt(0); }`',
              options: ['`"cba"`', '`"abc"`', '`"bca"`', '`""`'],
              correctAnswer: 0,
              explanation: 'This is the reverse method: it puts the reversed rest first, then appends the first char. `g("abc") = "cba"`.',
            },
          ],
        },
      },
      {
        id: 'rec7-q-mixed-input',
        type: 'input-boxes' as const,
        content: `**One More Trace** 🧮

\`int h(int n){ if(n<=1) return 1; return n * h(n-1); }\`

**1)** \`h(4)\` returns? *(this is factorial)*
**2)** For \`int p(int n){ if(n==0) return 0; return n + p(n-2); }\`, what does \`p(6)\` return? *(adds n, n-2, n-4, ...)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['24', '12'],
          hint1: '`h(4) = 4 * 3 * 2 * 1`.',
          hint2: '`p(6) = 6 + p(4) = 6 + 4 + p(2) = 6 + 4 + 2 + p(0)`.',
          hint3: '`h(4)=24`. And `p(6)=6+4+2+0 = 12`.',
          explanation: '1) `h(4) = 4*3*2*1 = 24`.  2) `p(6) = 6 + 4 + 2 + p(0) = 6+4+2+0 = 12` (steps down by 2 to the base case at 0).',
        },
      },
      {
        id: 'rec7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which is the defining feature of a recursive method?',
              options: [
                'It calls itself, with a base case to stop and a recursive case that moves toward it',
                'It always uses a for-loop',
                'It can only return an int',
                'It never returns a value',
              ],
              correctAnswer: 0,
              explanation: 'Recursion = a method that calls itself, with at least one base case (stops) and a recursive case that shrinks the input toward that base case.',
            },
            {
              question: 'A method recurses forever and throws a StackOverflowError. What is wrong?',
              options: [
                'The base case is never reached (missing, or the input is not shrinking toward it)',
                'It returns the wrong data type',
                'The base case returns too early',
                'It has too many comments',
              ],
              correctAnswer: 0,
              explanation: 'StackOverflowError from recursion always means the base case is unreachable — there is no base case, or each call fails to make progress toward it.',
            },
            {
              question: 'For `int m(int n){ if(n==0) return 0; return 1 + m(n-1); }`, what does `m(7)` return?',
              options: ['`7`', '`0`', '`8`', '`28`'],
              correctAnswer: 0,
              explanation: 'Each step adds 1, and there are 7 recursive steps before the base case adds 0: `m(7) = 7`. (It simply counts the calls down to 0.)',
            },
          ],
        },
      },
    ],
  },
]
