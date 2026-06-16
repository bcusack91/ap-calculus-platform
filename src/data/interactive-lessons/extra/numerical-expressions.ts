import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Numerical Expressions (Grade 5 Math).
 * Registry key / DB slug: 'numerical-expressions'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. Aligned to CCSS 5.OA.A.1
 * and 5.OA.A.2 (use grouping symbols & order of operations; write and interpret
 * simple expressions without evaluating them). LaTeX uses doubled backslashes
 * (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'numerical-expressions',
    sections: [
      {
        id: 'ne1-intro',
        type: 'text' as const,
        content: `# 🔢 Numerical Expressions

**Part 1 of 5 — What Is an Expression?**

---

### Topics in This Part

| Section |
|---------|
| Expressions vs. Equations |
| The Four Operations and Their Words |
| Reading an Expression Out Loud |

> 🔑 **Key Concept:** A **numerical expression** is a math phrase built from numbers and operation signs — like $3 + 4 \\times 5$. It has a single value, but it is *not* a sentence: there is no equals sign telling you the answer yet.`,
      },
      {
        id: 'ne1-what',
        type: 'text' as const,
        content: `## Expression or Equation?

A **numerical expression** is a *phrase*: just numbers and operations.

An **equation** is a *sentence*: it has an equals sign ($=$) and says two things are equal.

| Math | Type | Why |
|------|------|-----|
| $7 + 2$ | expression | numbers and a $+$, no equals sign |
| $7 + 2 = 9$ | equation | has an $=$ |
| $6 \\times (3 - 1)$ | expression | a phrase with grouping |
| $20 \\div 4 = 5$ | equation | has an $=$ |

Think of it like words. "Three apples plus two apples" is a **phrase**. "Three apples plus two apples equals five apples" is a **sentence**.

> 💡 **Quick test:** No equals sign? It's an **expression**. We *evaluate* an expression to find its value — but the expression itself is just the recipe, not the finished meal.`,
      },
      {
        id: 'ne1-expr-eqn',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of these is a numerical *expression* (not an equation)?',
              options: ['$5 + 3 = 8$', '$9 \\times (2 + 4)$', '$12 \\div 3 = 4$', '$10 - 6 = 4$'],
              correctAnswer: 1,
              explanation: '$9 \\times (2 + 4)$ is just a phrase made of numbers and operations — no equals sign — so it is an expression. The other three all contain $=$, which makes them equations.',
            },
            {
              question: 'What is the main difference between an expression and an equation?',
              options: ['An equation has an equals sign; an expression does not', 'An expression must use parentheses', 'An equation cannot use multiplication', 'An expression always equals zero'],
              correctAnswer: 0,
              explanation: 'The equals sign ($=$) is the giveaway. An equation states that two things are equal; an expression is just a math phrase with a value.',
            },
          ],
        },
      },
      {
        id: 'ne1-operations',
        type: 'text' as const,
        content: `## The Four Operations and Their Words

Expressions are built from the four basic operations. In word problems, each operation hides behind several "signal words":

| Operation | Symbol | Signal words |
|-----------|--------|--------------|
| Addition | $+$ | sum, plus, more than, increased by, total |
| Subtraction | $-$ | difference, minus, less than, decreased by, fewer |
| Multiplication | $\\times$ | product, times, of, multiplied by, double/triple |
| Division | $\\div$ | quotient, divided by, split into, per, half of |

For example, "the **sum** of $6$ and $4$" means $6 + 4$, and "the **product** of $3$ and $5$" means $3 \\times 5$.

> ⚠️ **Watch "less than" and "more than."** "$5$ **less than** $12$" means $12 - 5$, **not** $5 - 12$. The number you start with is the bigger one mentioned, and you take away the other.`,
      },
      {
        id: 'ne1-words-mc',
        type: 'multiple-choice' as const,
        content: `**Signal Words** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which expression matches "the product of $7$ and $4$"?',
              options: ['$7 + 4$', '$7 - 4$', '$7 \\times 4$', '$7 \\div 4$'],
              correctAnswer: 2,
              explanation: '"Product" always means multiplication, so "the product of $7$ and $4$" is $7 \\times 4$.',
            },
            {
              question: 'Which expression matches "$6$ less than $20$"?',
              options: ['$6 - 20$', '$20 - 6$', '$20 + 6$', '$6 \\div 20$'],
              correctAnswer: 1,
              explanation: '"$6$ less than $20$" means start at $20$ and take away $6$, so it is $20 - 6$. The order flips compared to how the words are read.',
            },
          ],
        },
      },
      {
        id: 'ne1-read',
        type: 'text' as const,
        content: `## Reading an Expression Out Loud

You can also go the other way — read an expression and say it in words.

| Expression | In words |
|------------|----------|
| $8 + 5$ | the sum of $8$ and $5$ |
| $15 - 9$ | the difference of $15$ and $9$ |
| $6 \\times 7$ | the product of $6$ and $7$ |
| $24 \\div 3$ | the quotient of $24$ and $3$ |

Being able to translate **both directions** — words to symbols and symbols to words — is the whole goal of this lesson's first half.

> 🔑 **Coming up:** In Part 2 you'll learn the *order* in which to do the operations, because $3 + 4 \\times 5$ does **not** mean "do it left to right." The order matters, and there are rules.`,
      },
      {
        id: 'ne1-match-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match Words to Symbols** 🔽

Pick the expression that matches each phrase.`,
        exercise: {
          dropdowns: [
            { label: 'the sum of $9$ and $6$', options: ['$9 + 6$', '$9 - 6$', '$9 \\times 6$', '$9 \\div 6$'] },
            { label: 'the quotient of $18$ and $3$', options: ['$18 \\div 3$', '$18 \\times 3$', '$18 - 3$', '$18 + 3$'] },
            { label: 'the difference of $20$ and $7$', options: ['$20 - 7$', '$7 - 20$', '$20 + 7$', '$20 \\times 7$'] },
          ],
          correctAnswers: ['$9 + 6$', '$18 \\div 3$', '$20 - 7$'],
          hint1: '"Sum" means add.',
          hint2: '"Quotient" means divide, in the order the numbers are named.',
          hint3: '"Difference of $20$ and $7$" means $20 - 7$ — the first number named comes first.',
          explanation: 'Sum → $+$, quotient → $\\div$, difference → $-$. For quotient and difference, keep the numbers in the order they are read.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'numerical-expressions',
    sections: [
      {
        id: 'ne2-intro',
        type: 'text' as const,
        content: `# 🔢 Numerical Expressions

**Part 2 of 5 — Order of Operations**

---

> 🔑 **The Big Rule:** When an expression has more than one operation, everyone must follow the **same order** so we all get the **same answer**. That order is the *order of operations*.`,
      },
      {
        id: 'ne2-pemdas',
        type: 'text' as const,
        content: `## The Order: PEMDAS

Do operations in this order, from top to bottom:

| Step | Stands for | What you do |
|------|-----------|-------------|
| **P** | Parentheses | Do everything inside grouping symbols first |
| **E** | Exponents | Then powers like $4^2$ *(you'll see these later)* |
| **MD** | Multiply / Divide | Then $\\times$ and $\\div$, **left to right** |
| **AS** | Add / Subtract | Last, $+$ and $-$, **left to right** |

A common way to remember it: **P**lease **E**xcuse **M**y **D**ear **A**unt **S**ally.

> ⚠️ **Two tricky parts:**
> - **Multiply and divide are a team** — do them together, left to right, whichever comes first. $\\div$ is **not** always after $\\times$.
> - **Add and subtract are a team** too — left to right.`,
      },
      {
        id: 'ne2-why',
        type: 'text' as const,
        content: `## Why the Order Matters

Take the expression $3 + 4 \\times 5$.

**Wrong way — straight left to right:**
$$3 + 4 = 7,\\quad 7 \\times 5 = 35 \\quad ❌$$

**Right way — multiply first:**
$$4 \\times 5 = 20,\\quad 3 + 20 = 23 \\quad ✓$$

The correct value is $23$. If everyone just went left to right, some people would get $35$ and some would get $23$ — and math would stop working! The rules keep every answer the same.

> 💡 Multiplication is a shortcut for repeated addition, so it "happens" before plain addition. That's the idea behind doing $\\times$ before $+$.`,
      },
      {
        id: 'ne2-eval-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $2 + 3 \\times 4$.',
              options: ['$20$', '$14$', '$24$', '$9$'],
              correctAnswer: 1,
              explanation: 'Multiply first: $3 \\times 4 = 12$. Then add: $2 + 12 = 14$. (Going left to right would wrongly give $20$.)',
            },
            {
              question: 'Evaluate $5 \\times 6 - 4 \\div 2$.',
              options: ['$13$', '$28$', '$26$', '$58$'],
              correctAnswer: 1,
              explanation: 'Do the multiply/divide team first, left to right: $5 \\times 6 = 30$ and $4 \\div 2 = 2$. Then subtract: $30 - 2 = 28$.',
            },
          ],
        },
      },
      {
        id: 'ne2-worked',
        type: 'text' as const,
        content: `## Worked Example: $15 - 2 \\times 3 + 1$

There are no parentheses or exponents, so go straight to **multiply/divide**, then **add/subtract**.

$$15 - 2 \\times 3 + 1$$

**Step 1 — multiply:** $2 \\times 3 = 6$
$$15 - 6 + 1$$

**Step 2 — add/subtract, left to right:** $15 - 6 = 9$, then $9 + 1 = 10$
$$= 10$$

> ✅ **Check the order:** the $\\times$ was done before either the $-$ or the $+$. Then $-$ and $+$ were done left to right. The value is $10$.`,
      },
      {
        id: 'ne2-which-first-dropdown',
        type: 'dropdown-select' as const,
        content: `**Which Operation Goes First?** 🔽

For each expression, choose the step you must do **first**.`,
        exercise: {
          dropdowns: [
            { label: 'In $9 + 6 \\div 3$, do first:', options: ['$6 \\div 3$', '$9 + 6$', '$9 \\div 3$', '$3 + 9$'] },
            { label: 'In $7 \\times 2 - 5$, do first:', options: ['$7 \\times 2$', '$2 - 5$', '$7 - 5$', '$5 \\times 7$'] },
            { label: 'In $10 - 4 + 2$, do first:', options: ['$10 - 4$', '$4 + 2$', '$10 + 2$', '$2 - 4$'] },
          ],
          correctAnswers: ['$6 \\div 3$', '$7 \\times 2$', '$10 - 4$'],
          hint1: 'Divide before you add.',
          hint2: 'Multiply before you subtract.',
          hint3: 'When it is only $+$ and $-$, work strictly **left to right** — so $10 - 4$ comes first.',
          explanation: 'Multiply/divide come before add/subtract. When only add and subtract are left (third one), do them left to right, so $10 - 4$ is first.',
        },
      },
      {
        id: 'ne2-checklist',
        type: 'text' as const,
        content: `## Your PEMDAS Checklist

Before you evaluate, scan the whole expression and ask, in order:

1. **Any grouping symbols?** Do what's inside first.
2. **Any exponents?** Do those next.
3. **Any $\\times$ or $\\div$?** Do them left to right.
4. **Now just $+$ and $-$?** Finish left to right.

> ⚠️ **Don't auto-pilot left to right.** The single most common mistake on these problems is adding or subtracting before you've cleared all the $\\times$ and $\\div$. Scan first, *then* compute.`,
      },
      {
        id: 'ne2-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate Each Expression** 🧮

Use the order of operations. Enter just the final value.

**1)** $8 + 12 \\div 4$
**2)** $36 \\div 6 + 2 \\times 5$
**3)** $40 - 5 \\times 4 + 2$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['11', '16', '22'],
          hint1: 'Divide before you add: $12 \\div 4 = 3$, then $8 + 3$.',
          hint2: 'Do the $\\div$ and $\\times$ first: $36 \\div 6 = 6$ and $2 \\times 5 = 10$, then add.',
          hint3: 'Multiply first ($5 \\times 4 = 20$), then go left to right: $40 - 20 + 2$.',
          explanation: '1) $12 \\div 4 = 3$, so $8 + 3 = 11$. 2) $6 + 10 = 16$. 3) $40 - 20 = 20$, then $20 + 2 = 22$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'numerical-expressions',
    sections: [
      {
        id: 'ne3-intro',
        type: 'text' as const,
        content: `# 🔢 Numerical Expressions

**Part 3 of 5 — Grouping Symbols**

---

> 🔑 **The Power of Grouping:** Parentheses $(\\;)$, brackets $[\\;]$, and braces $\\{\\;\\}$ let you say "do this part **first**," even overriding the normal order. They are the **P** in PEMDAS.`,
      },
      {
        id: 'ne3-types',
        type: 'text' as const,
        content: `## Three Kinds of Grouping Symbols

All three do the same job — they say *"work me out first"* — but we nest them so the layers are easy to see:

| Symbol | Name | Used… |
|--------|------|-------|
| $(\\;)$ | parentheses | innermost / first layer |
| $[\\;]$ | brackets | wrapped around parentheses |
| $\\{\\;\\}$ | braces | wrapped around brackets |

When they are nested, **work from the inside out** — start with the innermost parentheses and move outward.

$$\\{\\;[\\;(\\;\\text{innermost}\\;)\\;]\\;\\}$$

> 💡 Think of nested grouping like Russian nesting dolls: you open the smallest one first.`,
      },
      {
        id: 'ne3-single-mc',
        type: 'multiple-choice' as const,
        content: `**Parentheses First** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $6 \\times (5 + 2)$.',
              options: ['$32$', '$42$', '$17$', '$13$'],
              correctAnswer: 1,
              explanation: 'Parentheses first: $5 + 2 = 7$. Then multiply: $6 \\times 7 = 42$.',
            },
            {
              question: 'Evaluate $20 - 2 \\times (3 + 1)$.',
              options: ['$12$', '$72$', '$22$', '$15$'],
              correctAnswer: 0,
              explanation: 'Parentheses first: $3 + 1 = 4$. Then multiply: $2 \\times 4 = 8$. Then subtract: $20 - 8 = 12$.',
            },
          ],
        },
      },
      {
        id: 'ne3-nested',
        type: 'text' as const,
        content: `## Worked Example: Nested Grouping

Evaluate $2 \\times [\\,15 - (3 + 4)\\,]$.

**Step 1 — innermost parentheses:** $3 + 4 = 7$
$$2 \\times [\\,15 - 7\\,]$$

**Step 2 — the brackets:** $15 - 7 = 8$
$$2 \\times 8$$

**Step 3 — multiply:** $2 \\times 8 = 16$
$$= 16$$

> ⚠️ **Inside out, always.** Don't reach for the $15 - 3$; the $(3+4)$ is wrapped tighter, so it goes first. Finish each pair of grouping symbols before touching the layer outside it.`,
      },
      {
        id: 'ne3-order-dropdown',
        type: 'dropdown-select' as const,
        content: `**Order the Steps** 🔽

You're evaluating $3 \\times [\\,8 + (10 - 6)\\,]$. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'Step 1 — innermost parentheses:', options: ['$10 - 6 = 4$', '$8 + 10 = 18$', '$3 \\times 8 = 24$', '$8 + 6 = 14$'] },
            { label: 'Step 2 — inside the brackets:', options: ['$8 + 4 = 12$', '$8 - 4 = 4$', '$8 + 10 = 18$', '$4 \\times 3 = 12$'] },
            { label: 'Step 3 — multiply:', options: ['$3 \\times 12 = 36$', '$3 \\times 4 = 12$', '$3 + 12 = 15$', '$3 \\times 18 = 54$'] },
          ],
          correctAnswers: ['$10 - 6 = 4$', '$8 + 4 = 12$', '$3 \\times 12 = 36$'],
          hint1: 'The tightest grouping is $(10 - 6)$ — do that first.',
          hint2: 'Now the brackets hold $8 + 4$.',
          hint3: 'Finally multiply the $3$ out front by the bracket value $12$.',
          explanation: '$(10-6)=4$, then $[8+4]=12$, then $3 \\times 12 = 36$. Always work from the inside out.',
        },
      },
      {
        id: 'ne3-strategy',
        type: 'text' as const,
        content: `## A Tip for Long Expressions

When an expression has lots of symbols, **rewrite the whole thing on a new line after each step.** Replace the part you finished with its value and copy everything else down.

$$30 \\div [\\,2 \\times (1 + 4)\\,] \\;\\to\\; 30 \\div [\\,2 \\times 5\\,] \\;\\to\\; 30 \\div 10 \\;\\to\\; 3$$

Doing one operation per line keeps you from losing track and makes mistakes easy to spot.

> 💡 **Slow is smooth.** It is faster to do one step per line carefully than to rush, lose a number, and start over.`,
      },
      {
        id: 'ne3-drill',
        type: 'input-boxes' as const,
        content: `**Grouping Practice** 🧮

Work from the inside out. Enter just the final value.

**1)** $48 \\div (4 + 4)$
**2)** $4 \\times [\\,9 - (2 + 3)\\,]$
**3)** $30 \\div [\\,2 \\times (1 + 4)\\,]$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '16', '3'],
          hint1: 'Inside the parentheses: $4 + 4 = 8$, then $48 \\div 8$.',
          hint2: 'Innermost first: $2 + 3 = 5$, then $9 - 5 = 4$, then $4 \\times 4$.',
          hint3: 'Innermost first: $1 + 4 = 5$, then $2 \\times 5 = 10$, then $30 \\div 10$.',
          explanation: '1) $4+4=8$, so $48 \\div 8 = 6$. 2) $2+3=5$, $9-5=4$, $4 \\times 4 = 16$. 3) $1+4=5$, $2 \\times 5 = 10$, $30 \\div 10 = 3$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'numerical-expressions',
    sections: [
      {
        id: 'ne4-intro',
        type: 'text' as const,
        content: `# 🔢 Numerical Expressions

**Part 4 of 5 — Writing & Interpreting Expressions**

---

> 🔑 **The Grade-5 Skill:** Write an expression that records *calculations with numbers* — and interpret what one means — **without actually calculating it**. The structure tells the whole story.`,
      },
      {
        id: 'ne4-write',
        type: 'text' as const,
        content: `## Words → Expression (using grouping)

The trick is deciding **what to group**. If words say "do something to a *whole result*," that result needs parentheses.

| Words | Expression |
|-------|------------|
| Add $6$ and $4$, then multiply by $3$ | $(6 + 4) \\times 3$ |
| Multiply $4$ by $8$, then add $7$ | $4 \\times 8 + 7$ |
| Subtract $6$ from $20$, then divide by $2$ | $(20 - 6) \\div 2$ |
| Three times the sum of $4$ and $5$ | $3 \\times (4 + 5)$ |

Notice the difference between rows 1 and 2. In row 1 we add **first**, so $6 + 4$ gets parentheses. In row 2 we multiply first, so **no** parentheses are needed — order of operations already does the $\\times$ before the $+$.

> 💡 **"The sum of … then …"** is your cue to wrap the sum in parentheses, because you want it done before the next step.`,
      },
      {
        id: 'ne4-write-mc',
        type: 'multiple-choice' as const,
        content: `**Words to Symbols** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which expression means "double the sum of $8$ and $7$"?',
              options: ['$2 \\times 8 + 7$', '$2 \\times (8 + 7)$', '$(2 \\times 8) + 7$', '$8 + 7 \\times 2$'],
              correctAnswer: 1,
              explanation: '"The sum of $8$ and $7$" is $(8 + 7)$, and "double" it means multiply by $2$: $2 \\times (8 + 7)$. The parentheses make sure you add before doubling.',
            },
            {
              question: 'Which expression means "add $3$ to the product of $5$ and $9$"?',
              options: ['$(5 + 3) \\times 9$', '$5 \\times (9 + 3)$', '$5 \\times 9 + 3$', '$3 \\times 5 \\times 9$'],
              correctAnswer: 2,
              explanation: 'The product of $5$ and $9$ is $5 \\times 9$, and you add $3$ to it: $5 \\times 9 + 3$. No parentheses are needed because order of operations already multiplies before adding.',
            },
          ],
        },
      },
      {
        id: 'ne4-interpret',
        type: 'text' as const,
        content: `## Compare WITHOUT Calculating

Here's the cool part: you can compare two expressions just by reading their **structure** — no arithmetic needed.

Look at $3 \\times (214 + 87)$ versus $(214 + 87)$.

Both contain the same sum, $(214 + 87)$. But the first one multiplies that sum by $3$. So **without adding anything**, you know:

$$3 \\times (214 + 87) \\text{ is } 3 \\text{ times as large as } (214 + 87)$$

> 💡 **Reading structure:** $5 \\times (\\text{something})$ is always $5$ times bigger than that "something," no matter what the something works out to be. The expression *records* the relationship.`,
      },
      {
        id: 'ne4-interpret-dropdown',
        type: 'dropdown-select' as const,
        content: `**Interpret the Structure** 🔽

Compare each expression to the value of $(46 + 19)$ **without** computing.`,
        exercise: {
          dropdowns: [
            { label: '$(46 + 19) \\times 4$ is…', options: ['4 times as large as $(46+19)$', 'the same as $(46+19)$', '4 more than $(46+19)$', 'half of $(46+19)$'] },
            { label: '$(46 + 19) + 100$ is…', options: ['$100$ more than $(46+19)$', '$100$ times as large', 'half of $(46+19)$', 'the same as $(46+19)$'] },
            { label: '$2 \\times (46 + 19)$ is…', options: ['double $(46+19)$', '$2$ more than $(46+19)$', 'half of $(46+19)$', 'the same as $(46+19)$'] },
          ],
          correctAnswers: ['4 times as large as $(46+19)$', '$100$ more than $(46+19)$', 'double $(46+19)$'],
          hint1: 'Multiplying by $4$ makes something $4$ times as large.',
          hint2: 'Adding $100$ makes something $100$ bigger, not bigger by a factor.',
          hint3: '"Times $2$" means double — twice as large.',
          explanation: 'Multiplying scales a value (times as large); adding shifts it (more than). You can read all of this from the structure without doing the sum $46 + 19$.',
        },
      },
      {
        id: 'ne4-plan',
        type: 'text' as const,
        content: `## A Plan for Word Problems

When you turn a sentence into an expression, work in this order:

1. **Find the operations** using the signal words (sum, product, divide, …).
2. **Decide what happens first.** If a phrase says "the sum/difference … *then* …," that part gets **parentheses**.
3. **Write it, then evaluate** using the order of operations.

> 💡 **Parentheses are a promise.** They promise "do me first." Use them whenever the words want a result computed *before* the next step.`,
      },
      {
        id: 'ne4-write-drill',
        type: 'input-boxes' as const,
        content: `**Write, Then Evaluate** 🧮

Translate each phrase into an expression, then find its value. Enter just the final value.

**1)** Add $12$ and $8$, then triple the result.
**2)** Subtract $6$ from $20$, then divide by $2$.
**3)** Half of the sum of $24$ and $16$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['60', '7', '20'],
          hint1: 'Write $(12 + 8) \\times 3$. First $12 + 8 = 20$.',
          hint2: 'Write $(20 - 6) \\div 2$. First $20 - 6 = 14$.',
          hint3: 'Write $(24 + 16) \\div 2$. First $24 + 16 = 40$.',
          explanation: '1) $(12+8) \\times 3 = 20 \\times 3 = 60$. 2) $(20-6) \\div 2 = 14 \\div 2 = 7$. 3) $(24+16) \\div 2 = 40 \\div 2 = 20$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'numerical-expressions',
    sections: [
      {
        id: 'ne5-intro',
        type: 'text' as const,
        content: `# 🔢 Numerical Expressions

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) tell an expression from an equation, (2) use the order of operations, (3) work through grouping symbols inside-out, and (4) write and interpret expressions. Let's put it all together.`,
      },
      {
        id: 'ne5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Spot an expression | a math phrase with **no** equals sign |
| Order of operations | **P** → **E** → **MD** (left→right) → **AS** (left→right) |
| Nested grouping | work from the **inside out** |
| "Sum/difference … then …" | wrap that part in **parentheses** |
| Compare without computing | read the **structure** (times-as-large vs. more-than) |

> ⚠️ **Top traps:** never just go left to right when there's a $\\times$ or $\\div$ in the mix, and remember multiply/divide are a team (and so are add/subtract) — handle each team left to right.`,
      },
      {
        id: 'ne5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $6 + 3 \\times (8 - 2)$.',
              options: ['$24$', '$54$', '$36$', '$48$'],
              correctAnswer: 0,
              explanation: 'Parentheses first: $8 - 2 = 6$. Then multiply: $3 \\times 6 = 18$. Then add: $6 + 18 = 24$.',
            },
            {
              question: 'Evaluate $2 \\times [\\,(5 + 1) \\times 3\\,]$.',
              options: ['$36$', '$33$', '$21$', '$16$'],
              correctAnswer: 0,
              explanation: 'Innermost first: $5 + 1 = 6$. Then inside the brackets: $6 \\times 3 = 18$. Then multiply: $2 \\times 18 = 36$.',
            },
          ],
        },
      },
      {
        id: 'ne5-mixed-dropdown',
        type: 'dropdown-select' as const,
        content: `**One More Set** 🔽

Choose the correct value or interpretation for each.`,
        exercise: {
          dropdowns: [
            { label: '$(15 + 5) \\div (2 + 2) = $', options: ['$5$', '$10$', '$20$', '$8$'] },
            { label: '$7 \\times 3 - (10 - 4) = $', options: ['$15$', '$21$', '$17$', '$11$'] },
            { label: '"$5$ times the sum of $9$ and $9$" is written…', options: ['$5 \\times (9 + 9)$', '$5 \\times 9 + 9$', '$(5 \\times 9) + 9$', '$9 + 9 \\times 5$'] },
          ],
          correctAnswers: ['$5$', '$15$', '$5 \\times (9 + 9)$'],
          hint1: 'Do each parentheses first: $20 \\div 4$.',
          hint2: 'Parentheses give $6$; multiply $7 \\times 3 = 21$, then subtract $6$.',
          hint3: '"The sum of $9$ and $9$" needs parentheses so it happens before the times $5$.',
          explanation: '1) $20 \\div 4 = 5$. 2) $21 - 6 = 15$. 3) The sum must be grouped: $5 \\times (9 + 9)$.',
        },
      },
      {
        id: 'ne5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which of these is a numerical expression?',
              options: ['$4 + 9 = 13$', '$8 \\times (6 - 1)$', '$30 \\div 5 = 6$', '$7 - 2 = 5$'],
              correctAnswer: 1,
              explanation: '$8 \\times (6 - 1)$ has no equals sign, so it is an expression. The other three are equations because they contain $=$.',
            },
            {
              question: 'Evaluate $100 - 4 \\times (6 + 9)$.',
              options: ['$40$', '$1440$', '$60$', '$96$'],
              correctAnswer: 0,
              explanation: 'Parentheses first: $6 + 9 = 15$. Then multiply: $4 \\times 15 = 60$. Then subtract: $100 - 60 = 40$.',
            },
            {
              question: 'Which expression means "the product of $6$ and $4$, decreased by $2$"?',
              options: ['$6 \\times (4 - 2)$', '$6 \\times 4 - 2$', '$6 - 4 \\times 2$', '$(6 - 2) \\times 4$'],
              correctAnswer: 1,
              explanation: 'The product of $6$ and $4$ is $6 \\times 4$, and "decreased by $2$" subtracts $2$ from it: $6 \\times 4 - 2$. Order of operations multiplies before subtracting, so no parentheses are needed.',
            },
          ],
        },
      },
    ],
  },
]
