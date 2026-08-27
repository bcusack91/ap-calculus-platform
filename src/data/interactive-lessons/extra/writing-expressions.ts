import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Writing Expressions (Grade 6 Math).
 * Registry key / DB slug: 'writing-expressions'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'writing-expressions',
    sections: [
      {
        id: 'we1-intro',
        type: 'text' as const,
        content: `# ✍️ Writing Expressions

**Part 1 of 5 — From Words to Math**

---

### Topics in This Part

| Section |
|---------|
| What an Expression Is |
| Why We Use Variables |
| Translating Simple Phrases |

> 🔑 **Key Concept:** **Writing an expression** means turning a word phrase (like *"five more than a number"*) into math symbols (like $n + 5$). It's translation — English on one side, math on the other.`,
      },
      {
        id: 'we1-what',
        type: 'text' as const,
        content: `## What Is an Expression?

An **algebraic expression** is a mix of numbers, variables, and operations — and it has **no equals sign**.

| This is an expression | This is **not** (it has $=$) |
|-----------------------|------------------------------|
| $n + 5$ | $n + 5 = 12$ |
| $3x$ | $3x = 15$ |
| $\\dfrac{y}{2} - 1$ | $\\dfrac{y}{2} - 1 = 4$ |

A **variable** is a letter (like $n$, $x$, or $y$) that stands for a number we don't know yet — or a number that can change.

> 💡 **Why bother?** If your age is $a$, then "your age in 3 years" is just $a + 3$. One short expression describes the rule for *every* possible age at once.`,
      },
      {
        id: 'we1-keyword-table',
        type: 'text' as const,
        content: `## The Four Operations and Their Keywords

Each operation has its own set of "signal words." Learning these is the heart of writing expressions.

| Operation | Symbol | Keywords |
|-----------|--------|----------|
| Add | $+$ | sum, plus, more than, increased by, total, added to |
| Subtract | $-$ | difference, minus, less than, decreased by, fewer, take away |
| Multiply | $\\times$ or $\\cdot$ | product, times, of, twice (×2), double, triple |
| Divide | $\\div$ or $\\dfrac{\\;}{\\;}$ | quotient, divided by, split equally, per, half of |

> 🔑 **Spot the signal:** When you see *"the sum of,"* reach for $+$. When you see *"the product of,"* reach for $\\times$. The keyword tells you the operation before you write a single symbol.`,
      },
      {
        id: 'we1-keyword-check',
        type: 'dropdown-select' as const,
        content: `**Match the Keyword to the Operation** 🔽

Which operation does each word signal?`,
        exercise: {
          dropdowns: [
            { label: '"the **product** of"', options: ['add', 'subtract', 'multiply', 'divide'] },
            { label: '"**increased by**"', options: ['add', 'subtract', 'multiply', 'divide'] },
            { label: '"the **quotient** of"', options: ['add', 'subtract', 'multiply', 'divide'] },
            { label: '"**decreased by**"', options: ['add', 'subtract', 'multiply', 'divide'] },
          ],
          correctAnswers: ['multiply', 'add', 'divide', 'subtract'],
          hint1: '"Product" comes from multiplying; "quotient" comes from dividing.',
          hint2: '"Increased" means it got bigger → addition. "Decreased" means it got smaller → subtraction.',
          hint3: 'Sum/increased → $+$, difference/decreased → $-$, product → $\\times$, quotient → $\\div$.',
          explanation: 'Product → multiply, increased by → add, quotient → divide, decreased by → subtract. These four keyword families cover most phrases you will meet.',
        },
      },
      {
        id: 'we1-translate-simple',
        type: 'text' as const,
        content: `## Translating a Simple Phrase

A simple phrase has **one number, one variable, and one operation**. Pick the variable, find the keyword, and write the symbols in order.

### Example: "a number plus 7"

- The unknown number → call it $n$
- "plus" → $+$
- the 7 → $7$

$$n + 7$$

### Example: "the product of 4 and a number"

- "product" → $\\times$
- the two things multiplied → $4$ and $n$

$$4 \\cdot n \\;=\\; 4n$$

> 💡 We almost never write the $\\times$ sign in algebra — $4 \\cdot n$ is written **$4n$**. The number always goes in front of the letter.`,
      },
      {
        id: 'we1-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which expression means "a number increased by 9"?',
              options: ['$n + 9$', '$n - 9$', '$9n$', '$\\dfrac{n}{9}$'],
              correctAnswer: 0,
              explanation: '"Increased by" signals addition, so a number $n$ increased by 9 is $n + 9$.',
            },
            {
              question: 'Which expression means "the product of 6 and a number"?',
              options: ['$6 + n$', '$6n$', '$n - 6$', '$\\dfrac{6}{n}$'],
              correctAnswer: 1,
              explanation: '"Product" signals multiplication: $6 \\cdot n = 6n$. The number is written in front of the variable.',
            },
          ],
        },
      },
      {
        id: 'we1-now-you',
        type: 'text' as const,
        content: `## Now You Write One

Reading translations is one thing — **producing** them is the real skill. Type your answers in the next drill exactly as math: a variable, a symbol, and a number.

> 💡 **Reminder:** numbers go *in front* of variables ($7n$, never $n7$), and there's no $\\times$ sign in the final answer.`,
      },
      {
        id: 'we1-input',
        type: 'input-boxes' as const,
        content: `**Type the Expression** ⌨️

Write each simple phrase using $n$ as the variable. Use \`+\` for plus, and write a number next to the variable for multiply (like \`5n\`).

**1)** "a number plus 10" $\\Rightarrow$ ?
**2)** "the product of 7 and a number" $\\Rightarrow$ ?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['n+10', '7n'],
          hint1: '"Plus" signals addition: $n + 10$.',
          hint2: '"Product" signals multiplication: $7 \\cdot n$.',
          hint3: 'Write $7 \\cdot n$ as $7n$ — number first, no times sign.',
          explanation: '1) $n + 10$.  2) $7n$. A simple phrase has one number, one variable, and one operation.',
        },
      },
      {
        id: 'we1-wrap',
        type: 'text' as const,
        content: `## You've Got the Basics

You can now spot a keyword, pick a variable, and write a one-operation expression.

> 🔑 **Carry this forward:** every expression is built from these same four operations — the only thing that gets trickier is the **order** of the words. That's exactly what Part 2 tackles.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'writing-expressions',
    sections: [
      {
        id: 'we2-intro',
        type: 'text' as const,
        content: `# ✍️ Writing Expressions

**Part 2 of 5 — Order Matters: "Less Than" & "Divided By"**

---

> ⚠️ **The #1 trap in this whole topic:** with subtraction and division, the **order** of the words can flip the order of the symbols. "5 less than $n$" is **not** $5 - n$. This part fixes that forever.`,
      },
      {
        id: 'we2-commutative',
        type: 'text' as const,
        content: `## When Order Doesn't Matter (and When It Does)

Addition and multiplication can be written in either order — the answer is the same:

$$n + 5 = 5 + n \\qquad 4 \\cdot n = n \\cdot 4$$

But **subtraction and division are picky**. Order changes the meaning:

$$8 - 3 = 5 \\quad\\text{but}\\quad 3 - 8 = -5$$

So when you translate a subtraction or division phrase, you must read it carefully and keep the order straight.

> 🔑 **Standard form:** We still *prefer* to write multiplication as $5n$ (number first) and addition with the variable first, like $n + 5$ — but you may write either order for $+$ and $\\times$.`,
      },
      {
        id: 'we2-less-than',
        type: 'text' as const,
        content: `## The "Less Than" / "More Than" Flip

These two phrases describe what to do to a *starting* number, so the starting number comes **second** in the words but acts on the value:

### "5 **less than** a number"

Start with the number $n$, then take **5 away**:

$$n - 5 \\qquad (\\text{NOT } 5 - n)$$

### "a number **less** 5"

The word *less* (without "than") just means minus, in order:

$$n - 5$$

> ⚠️ **Read it backwards.** *"7 less than $x$"* → start at $x$, go down 7 → $x - 7$. The number you hear first ($7$) is what gets subtracted, so it lands **after** the minus sign. *"More than"* flips the same way: *"7 more than $x$"* → $x + 7$.`,
      },
      {
        id: 'we2-flip-mc',
        type: 'multiple-choice' as const,
        content: `**Watch the Order** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which expression means "8 less than a number"?',
              options: ['$n - 8$', '$8 - n$', '$n + 8$', '$8n$'],
              correctAnswer: 0,
              explanation: '"Less than" flips the order: start with the number $n$ and subtract 8, giving $n - 8$. Not $8 - n$.',
            },
            {
              question: '"A number subtracted from 20" means:',
              options: ['$n - 20$', '$20 - n$', '$20n$', '$\\dfrac{20}{n}$'],
              correctAnswer: 1,
              explanation: '"Subtracted from 20" means start at 20 and take the number away: $20 - n$.',
            },
          ],
        },
      },
      {
        id: 'we2-divided',
        type: 'text' as const,
        content: `## "Divided By" vs. "Divides"

Division has the same order trap. We usually write division as a fraction.

### "a number **divided by** 3"

The number is on top (it's being split):

$$\\dfrac{n}{3}$$

### "the **quotient** of 12 and a number"

Whatever is named first goes on top:

$$\\dfrac{12}{n}$$

### "half **of** a number"

"Half of" means multiply by $\\dfrac{1}{2}$, which is the same as dividing by 2:

$$\\dfrac{1}{2}n \\;=\\; \\dfrac{n}{2}$$

> 💡 **Tip:** In *"the quotient of A and B,"* the first thing (A) is always the **numerator** (top) and the second (B) is the **denominator** (bottom).`,
      },
      {
        id: 'we2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Order in Subtraction & Division** 🔽

Pick the correct translation. Watch the order!`,
        exercise: {
          dropdowns: [
            { label: '"12 less than $n$"', options: ['$n - 12$', '$12 - n$', '$12n$', '$n + 12$'] },
            { label: '"a number divided by 5"', options: ['$\\dfrac{n}{5}$', '$\\dfrac{5}{n}$', '$5n$', '$n - 5$'] },
            { label: '"the quotient of 9 and $x$"', options: ['$\\dfrac{9}{x}$', '$\\dfrac{x}{9}$', '$9x$', '$9 - x$'] },
          ],
          correctAnswers: ['$n - 12$', '$\\dfrac{n}{5}$', '$\\dfrac{9}{x}$'],
          hint1: '"Less than" flips: the number you say first gets subtracted, so it goes after the minus.',
          hint2: '"A number divided by 5" puts the number on top: $\\dfrac{n}{5}$.',
          hint3: 'In "the quotient of 9 and $x$," the first thing (9) is the top of the fraction.',
          explanation: '"12 less than $n$" → $n - 12$. "A number divided by 5" → $\\dfrac{n}{5}$. "Quotient of 9 and $x$" → $\\dfrac{9}{x}$ (first thing on top).',
        },
      },
      {
        id: 'we2-recap',
        type: 'text' as const,
        content: `## Before You Type: The Order Rule

When you write the next answers, slow down on the two tricky operations:

| You hear... | You write... |
|-------------|--------------|
| "$A$ less than a number" | number $-\\,A$ |
| "a number divided by $A$" | $\\dfrac{\\text{number}}{A}$ |

> ⚠️ The number you *say first* in "less than" lands **after** the minus sign. Picture starting at the variable and stepping down.`,
      },
      {
        id: 'we2-input',
        type: 'input-boxes' as const,
        content: `**Type the Expression** ⌨️

Write each phrase as an expression. Use $n$ as the variable. Type subtraction with a minus sign (like \`n-4\`) and division as a slash (like \`n/4\`).

**1)** "6 less than a number" $\\Rightarrow$ ?
**2)** "a number divided by 8" $\\Rightarrow$ ?
**3)** "11 more than a number" $\\Rightarrow$ ?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['n-6', 'n/8', 'n+11'],
          hint1: '"Less than" flips the order: start with $n$, subtract 6 → $n - 6$.',
          hint2: '"Divided by 8" puts $n$ on top: $n/8$.',
          hint3: '"More than" keeps the variable and adds: $n + 11$ (you can also write $11 + n$, but enter $n+11$ here).',
          explanation: '1) $n - 6$.  2) $n/8$ (that is $\\dfrac{n}{8}$).  3) $n + 11$. Subtraction and division keep their order; addition could go either way.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'writing-expressions',
    sections: [
      {
        id: 'we3-intro',
        type: 'text' as const,
        content: `# ✍️ Writing Expressions

**Part 3 of 5 — Two-Step Phrases & Grouping**

---

> 🔑 **Leveling up:** Real phrases often pack **two operations** into one sentence — like *"3 more than twice a number."* The challenge is doing them in the right order and knowing when you need **parentheses**.`,
      },
      {
        id: 'we3-twostep',
        type: 'text' as const,
        content: `## Two Operations in One Phrase

Build the expression in the order the words describe.

### Example: "3 more than twice a number"

- "twice a number" → $2n$
- "3 more than" *that* → add 3

$$2n + 3$$

### Example: "5 less than the product of 4 and a number"

- "the product of 4 and a number" → $4n$
- "5 less than" *that* → subtract 5

$$4n - 5$$

> 💡 **Build the inside first.** Translate the small chunk (*twice a number*, *the product of...*) before you attach the "more than" or "less than" part on the outside.`,
      },
      {
        id: 'we3-twostep-mc',
        type: 'multiple-choice' as const,
        content: `**Two-Step Translation** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which expression means "7 more than triple a number"?',
              options: ['$3n + 7$', '$3n - 7$', '$3(n + 7)$', '$7n + 3$'],
              correctAnswer: 0,
              explanation: '"Triple a number" is $3n$; "7 more than" that adds 7 → $3n + 7$.',
            },
            {
              question: '"The product of 5 and a number, decreased by 2" means:',
              options: ['$5n - 2$', '$5(n - 2)$', '$2 - 5n$', '$\\dfrac{5n}{2}$'],
              correctAnswer: 0,
              explanation: '"Product of 5 and a number" is $5n$; "decreased by 2" subtracts 2 → $5n - 2$.',
            },
          ],
        },
      },
      {
        id: 'we3-grouping',
        type: 'text' as const,
        content: `## When You Need Parentheses

Parentheses are needed when an operation acts on a **whole sum or difference**, not just one number. Listen for a **comma** or the word **"quantity."**

### Compare these two:

| Phrase | Expression |
|--------|-----------|
| "2 times a number, **plus** 5" | $2n + 5$ |
| "2 times **the quantity** ( a number plus 5 )" | $2(n + 5)$ |

In the first, you only double the number. In the second, you double the **entire** $(n + 5)$.

### Example: "double the sum of a number and 4"

The *sum of a number and 4* is $(n + 4)$. "Double" multiplies the whole thing:

$$2(n + 4)$$

> ⚠️ **The phrase "the sum of" or "the difference of" usually means a group.** *"Triple the sum of a number and 1"* must be $3(n + 1)$, not $3n + 1$.`,
      },
      {
        id: 'we3-paren-dropdown',
        type: 'dropdown-select' as const,
        content: `**Parentheses or Not?** 🔽

Choose the correct expression for each phrase.`,
        exercise: {
          dropdowns: [
            { label: '"5 times the sum of a number and 2"', options: ['$5(n + 2)$', '$5n + 2$', '$5n + 10n$', '$n + 2$'] },
            { label: '"5 times a number, plus 2"', options: ['$5n + 2$', '$5(n + 2)$', '$2(5n)$', '$5 + 2n$'] },
            { label: '"twice the difference of a number and 7"', options: ['$2(n - 7)$', '$2n - 7$', '$2(n + 7)$', '$n - 7$'] },
          ],
          correctAnswers: ['$5(n + 2)$', '$5n + 2$', '$2(n - 7)$'],
          hint1: '"The sum of ... and ..." is a group, so it gets parentheses.',
          hint2: 'A comma or "plus" *after* "a number" means the multiply only hits the number, not the whole sum.',
          hint3: '"The difference of a number and 7" is the group $(n - 7)$; "twice" multiplies all of it → $2(n - 7)$.',
          explanation: '"5 times the sum of a number and 2" groups the sum → $5(n + 2)$. "5 times a number, plus 2" only multiplies the number → $5n + 2$. "Twice the difference of a number and 7" → $2(n - 7)$.',
        },
      },
      {
        id: 'we3-build-bridge',
        type: 'text' as const,
        content: `## Your Turn to Build

For the next drill, work **inside-out**: translate the small chunk first, then attach the outer operation.

> 🔑 If the phrase says *"the sum of"* or *"the difference of,"* build that piece in **parentheses** first — then decide what multiplies it.`,
      },
      {
        id: 'we3-input',
        type: 'input-boxes' as const,
        content: `**Build It** ⌨️

Write each as an expression using $n$. Use \`*\` for "times" only if you need it; numbers in front of a variable can be written together (like \`4n\`). Use parentheses where needed, e.g. \`3(n+2)\`.

**1)** "4 more than twice a number" $\\Rightarrow$ ?
**2)** "the product of 3 and the sum of a number and 5" $\\Rightarrow$ ?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['2n+4', '3(n+5)'],
          hint1: '"Twice a number" is $2n$; "4 more than" adds 4 → $2n + 4$.',
          hint2: '"The sum of a number and 5" is the group $(n + 5)$.',
          hint3: '"The product of 3 and (that group)" multiplies the whole group → $3(n + 5)$.',
          explanation: '1) $2n + 4$.  2) $3(n + 5)$ — the word "sum" makes a group, so the 3 multiplies all of $(n + 5)$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'writing-expressions',
    sections: [
      {
        id: 'we4-intro',
        type: 'text' as const,
        content: `# ✍️ Writing Expressions

**Part 4 of 5 — Real-World Expressions**

---

> 🔑 **The payoff:** Expressions describe real situations — money, time, distance, sharing. The trick is to **define your variable** first ("let $n$ = the number of...") and then write the rule.`,
      },
      {
        id: 'we4-define',
        type: 'text' as const,
        content: `## Step 1: Define the Variable

In a word problem, you choose what the variable stands for. Write it down so you don't lose track.

### Example: tickets cost \\$8 each

Let $t$ = the **number of tickets** bought. Then the total cost in dollars is:

$$8t$$

If $t = 3$ tickets, the cost is $8 \\cdot 3 = 24$, i.e. \\$24. The expression $8t$ works for *any* number of tickets.

### Example: a pizza split equally among friends

A pizza has 12 slices, shared by $f$ friends. Each person gets:

$$\\dfrac{12}{f}\\ \\text{slices}$$

> 💡 **Always say what the variable means.** *"Let $f$ = number of friends"* turns a fuzzy story into an exact expression.`,
      },
      {
        id: 'we4-realworld-mc',
        type: 'multiple-choice' as const,
        content: `**Real Situations** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A notebook costs \\$3. Let $b$ be the number of notebooks. Which expression gives the total cost in dollars?',
              options: ['$3b$', '$b + 3$', '$\\dfrac{3}{b}$', '$b - 3$'],
              correctAnswer: 0,
              explanation: 'Cost per notebook (\\$3) times the number of notebooks ($b$) gives \\$3b$ dollars.',
            },
            {
              question: 'Maria is 4 years older than Sam. If Sam is $s$ years old, how old is Maria?',
              options: ['$s + 4$', '$s - 4$', '$4s$', '$\\dfrac{s}{4}$'],
              correctAnswer: 0,
              explanation: '"4 years older" means add 4 to Sam\'s age: $s + 4$.',
            },
            {
              question: 'A \\$50 bill is split equally among $p$ people. Each person pays:',
              options: ['$\\dfrac{50}{p}$', '$50p$', '$50 - p$', '$50 + p$'],
              correctAnswer: 0,
              explanation: '"Split equally among $p$ people" means divide 50 by $p$: $\\dfrac{50}{p}$ dollars each.',
            },
          ],
        },
      },
      {
        id: 'we4-patterns',
        type: 'text' as const,
        content: `## Common Real-World Patterns

| Situation | Variable means | Expression |
|-----------|----------------|------------|
| \\$8 per ticket | $t$ = tickets | $8t$ |
| Started with $20$, spent some | $x$ = amount spent | $20 - x$ |
| $5$ more than her age | $a$ = her age | $a + 5$ |
| $36$ cookies shared equally | $k$ = kids | $\\dfrac{36}{k}$ |
| Twice as far as before | $d$ = old distance | $2d$ |

> ⚠️ **"Per," "each," and "every" almost always mean multiply.** "\\$8 per ticket × $t$ tickets" → $8t$. But "shared among / split equally" means **divide**.`,
      },
      {
        id: 'we4-realworld-dropdown',
        type: 'dropdown-select' as const,
        content: `**Choose the Expression** 🔽

Match each situation to its expression.`,
        exercise: {
          dropdowns: [
            { label: 'Save \\$5 each week for $w$ weeks', options: ['$5w$', '$5 + w$', '$\\dfrac{5}{w}$', '$w - 5$'] },
            { label: 'Had 100 points, lost $p$ points', options: ['$100 - p$', '$100p$', '$p - 100$', '$100 + p$'] },
            { label: '24 students in $g$ equal groups', options: ['$\\dfrac{24}{g}$', '$24g$', '$24 - g$', '$24 + g$'] },
          ],
          correctAnswers: ['$5w$', '$100 - p$', '$\\dfrac{24}{g}$'],
          hint1: '"Each week for $w$ weeks" is a per-unit rate → multiply: $5w$.',
          hint2: '"Lost $p$ points" takes away from 100 → $100 - p$.',
          hint3: '"Equal groups" means divide the total by the number of groups → $\\dfrac{24}{g}$.',
          explanation: 'Saving \\$5 each week → \\$5w$. Losing $p$ from 100 → \\$100 - p$. Splitting 24 into $g$ groups → $\\dfrac{24}{g}$.',
        },
      },
      {
        id: 'we4-story-bridge',
        type: 'text' as const,
        content: `## From Story to Symbols

For the last drill, read the situation and ask two questions:

1. **What does the variable stand for?** (It's given to you here.)
2. **Which keyword is hiding?** ("per" → multiply, "absent / left / lost" → subtract.)

> 💡 Then write the rule the same way you would any phrase — the story is just a phrase in disguise.`,
      },
      {
        id: 'we4-input',
        type: 'input-boxes' as const,
        content: `**Translate the Story** ⌨️

Write each expression. Use the given variable. Use \`+\`, \`-\`, \`/\`, and write a number next to a variable for multiply (like \`6h\`).

**1)** A worker earns \\$6 per hour. Let $h$ = hours worked. Total pay = ?
**2)** A class has 28 students. Let $a$ = absent students. Students present = ?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['6h', '28-a'],
          hint1: '"Per hour" means multiply pay rate by hours: $6 \\cdot h$.',
          hint2: 'Write $6 \\cdot h$ as $6h$ (number in front of the letter).',
          hint3: '"Present" = total minus absent → $28 - a$.',
          explanation: '1) $6h$ dollars.  2) $28 - a$ students. "Per" multiplies; "absent taken from the total" subtracts.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'writing-expressions',
    sections: [
      {
        id: 'we5-intro',
        type: 'text' as const,
        content: `# ✍️ Writing Expressions

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) match keywords to operations, (2) handle the "less than" / "divided by" order trap, (3) write two-step phrases with parentheses, and (4) build expressions from real situations. Let's pull it all together.`,
      },
      {
        id: 'we5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Phrase | Expression |
|--------|-----------|
| the **sum** of a number and 5 | $n + 5$ |
| 5 **less than** a number | $n - 5$ |
| the **product** of 3 and a number | $3n$ |
| a number **divided by** 4 | $\\dfrac{n}{4}$ |
| 2 **more than twice** a number | $2n + 2$ |
| **double the sum** of a number and 6 | $2(n + 6)$ |

> ⚠️ **Three things to never forget:**
> 1. *"Less than"* and *"subtracted from"* **flip the order**.
> 2. *"The sum/difference of ..."* usually needs **parentheses** when something multiplies it.
> 3. Write $3 \\cdot n$ as $\\mathbf{3n}$ — number in front, no times sign.`,
      },
      {
        id: 'we5-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which expression means "10 less than the product of 2 and a number"?',
              options: ['$2n - 10$', '$10 - 2n$', '$2(n - 10)$', '$\\dfrac{2n}{10}$'],
              correctAnswer: 0,
              explanation: '"Product of 2 and a number" is $2n$; "10 less than" that subtracts 10 → $2n - 10$.',
            },
            {
              question: '"Half of the sum of a number and 8" is:',
              options: ['$\\dfrac{n + 8}{2}$', '$\\dfrac{n}{2} + 8$', '$2(n + 8)$', '$\\dfrac{n}{8} + 2$'],
              correctAnswer: 0,
              explanation: '"The sum of a number and 8" is $(n + 8)$; "half of" that whole group is $\\dfrac{n + 8}{2}$.',
            },
          ],
        },
      },
      {
        id: 'we5-final-bridge',
        type: 'text' as const,
        content: `## Last Set Before the Quiz

Time to **produce** three expressions from scratch — one division, one two-step, and one grouped phrase. Build each piece, then assemble.

> 💡 Watch for the word *"sum"* in the third one — it signals parentheses.`,
      },
      {
        id: 'we5-mixed-input',
        type: 'input-boxes' as const,
        content: `**Final Build** ⌨️

Write each expression using $n$. Use \`+\`, \`-\`, \`/\`, parentheses, and write numbers next to variables for multiply.

**1)** "the quotient of a number and 7" $\\Rightarrow$ ?
**2)** "9 more than five times a number" $\\Rightarrow$ ?
**3)** "twice the sum of a number and 3" $\\Rightarrow$ ?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['n/7', '5n+9', '2(n+3)'],
          hint1: '"Quotient of a number and 7" puts the number on top → $n/7$.',
          hint2: '"Five times a number" is $5n$; "9 more than" adds 9 → $5n + 9$.',
          hint3: '"The sum of a number and 3" is the group $(n + 3)$; "twice" multiplies it all → $2(n + 3)$.',
          explanation: '1) $n/7$.  2) $5n + 9$.  3) $2(n + 3)$. The word "sum" creates the group that gets multiplied.',
        },
      },
      {
        id: 'we5-ready',
        type: 'text' as const,
        content: `## One Last Check

You've practiced keywords, the order trap, grouping, and real-world rules. The Exit Quiz below pulls from all four — read each phrase slowly and watch the order.

> 🔑 **Final reminders:** *"less than"* flips, *"the sum of"* groups, and a number always sits in front of its variable.`,
      },
      {
        id: 'we5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which expression means "7 less than a number"?',
              options: ['$n - 7$', '$7 - n$', '$7n$', '$n + 7$'],
              correctAnswer: 0,
              explanation: '"Less than" flips the order: start with $n$ and subtract 7 → $n - 7$.',
            },
            {
              question: 'A pencil costs \\$2. Let $p$ = number of pencils. The total cost is:',
              options: ['$2p$', '$p + 2$', '$\\dfrac{2}{p}$', '$p - 2$'],
              correctAnswer: 0,
              explanation: 'Cost per pencil (\\$2) times the number of pencils ($p$) gives \\$2p$ dollars.',
            },
            {
              question: '"Triple the sum of a number and 4" is:',
              options: ['$3(n + 4)$', '$3n + 4$', '$3n + 12n$', '$n + 12$'],
              correctAnswer: 0,
              explanation: '"The sum of a number and 4" is the group $(n + 4)$; "triple" multiplies the whole group → $3(n + 4)$.',
            },
          ],
        },
      },
    ],
  },
]
