import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Probability Basics (Grade 7 Math).
 * Registry key / DB slug: 'probability-basics-grade7'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'probability-basics-grade7',
    sections: [
      {
        id: 'prob1-intro',
        type: 'text' as const,
        content: `# 🎲 Probability Basics

**Part 1 of 5 — What Is Probability?**

---

### Topics in This Part

| Section |
|---------|
| What Probability Measures |
| The 0-to-1 Scale |
| Likely, Unlikely, and Everything Between |

> 🔑 **Key Concept:** **Probability** is a number that tells you how *likely* an event is to happen. It always lands between $0$ (impossible) and $1$ (certain).`,
      },
      {
        id: 'prob1-what',
        type: 'text' as const,
        content: `## What Probability Measures

Some things are sure to happen, some can never happen, and most things are somewhere in between. Probability puts a **number** on that "in-between."

A few words we'll use the whole lesson:

| Word | Meaning | Example |
|------|---------|---------|
| **Experiment** | An action with an uncertain result | Rolling a die |
| **Outcome** | One possible result | Rolling a $4$ |
| **Event** | A result (or group of results) we care about | Rolling an even number |

> 💡 An **event** can be one outcome (rolling a $4$) or several outcomes grouped together (rolling an even number: $2$, $4$, or $6$).`,
      },
      {
        id: 'prob1-scale',
        type: 'text' as const,
        content: `## The 0-to-1 Scale

Every probability is a number from $0$ to $1$. You can write it as a **fraction**, a **decimal**, or a **percent**.

$$0 \\le P(\\text{event}) \\le 1$$

| Probability | Means | In words |
|-------------|-------|----------|
| $0$ | $0\\%$ | **Impossible** — can never happen |
| $\\frac{1}{2}$ | $50\\%$ | **Even chance** — just as likely as not |
| $1$ | $100\\%$ | **Certain** — sure to happen |

The closer the number is to $1$, the **more likely** the event. The closer to $0$, the **less likely**.

> ⚠️ A probability can never be **negative** and can never be **more than $1$**. If you ever get an answer like $1.4$ or $-\\frac{1}{2}$, you made a mistake somewhere.`,
      },
      {
        id: 'prob1-scale-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A probability of $0$ means the event is:',
              options: ['Certain to happen', 'Impossible', 'An even chance', 'Very likely'],
              correctAnswer: 1,
              explanation: 'A probability of $0$ means the event can never happen — it is impossible. A probability of $1$ would mean certain.',
            },
            {
              question: 'Which of these could NOT be a probability?',
              options: ['$0.25$', '$\\frac{3}{4}$', '$1.5$', '$0$'],
              correctAnswer: 2,
              explanation: 'Every probability is between $0$ and $1$. $1.5$ is greater than $1$, so it is impossible as a probability. The others are all valid.',
            },
          ],
        },
      },
      {
        id: 'prob1-words',
        type: 'text' as const,
        content: `## Likely, Unlikely, and Everything Between

We often describe events in words. Here is how the words line up with the scale:

| Probability range | Description |
|-------------------|-------------|
| Exactly $0$ | Impossible |
| Between $0$ and $\\frac{1}{2}$ | Unlikely |
| Exactly $\\frac{1}{2}$ | Equally likely (even chance) |
| Between $\\frac{1}{2}$ and $1$ | Likely |
| Exactly $1$ | Certain |

**Example:** The probability of flipping **heads** on a fair coin is $\\frac{1}{2}$ — an even chance.

**Example:** The probability that the **sun rises tomorrow** is essentially $1$ — certain.

**Example:** The probability of rolling a $7$ on a standard $6$-sided die is $0$ — impossible (there is no $7$).`,
      },
      {
        id: 'prob1-words-drop',
        type: 'dropdown-select' as const,
        content: `**Match the Description** 🔽

Pick the best word for each probability.`,
        exercise: {
          dropdowns: [
            { label: '$P = 1$ is:', options: ['Certain', 'Impossible', 'Unlikely', 'Even chance'] },
            { label: '$P = \\frac{1}{2}$ is:', options: ['Even chance', 'Certain', 'Impossible', 'Likely'] },
            { label: '$P = 0.1$ is:', options: ['Unlikely', 'Likely', 'Certain', 'Even chance'] },
          ],
          correctAnswers: ['Certain', 'Even chance', 'Unlikely'],
          hint1: 'A probability of $1$ means the event is sure to happen.',
          hint2: '$\\frac{1}{2}$ sits exactly in the middle — just as likely as not.',
          hint3: '$0.1$ is close to $0$, so the event probably will NOT happen.',
          explanation: '$P=1$ → certain. $P=\\frac{1}{2}$ → even chance. $P=0.1$ is near $0$, so it is unlikely.',
        },
      },
      {
        id: 'prob1-scale-text',
        type: 'text' as const,
        content: `## Putting Numbers on the Scale

You don't always need a formula to place a probability — sometimes you can reason about how "fair" a situation is.

- A **fair coin** has two equally likely sides, so $P(\\text{heads}) = \\frac{1}{2}$.
- A **certain** event always gets $1$; an **impossible** one always gets $0$.
- If something is **twice as likely** to fail as to succeed, success gets the smaller share.

> 💡 Quick gut-check: before computing, ask "should my answer be near $0$, near $\\frac{1}{2}$, or near $1$?" If your final number disagrees with your gut, re-check the count.`,
      },
      {
        id: 'prob1-scale-drill',
        type: 'input-boxes' as const,
        content: `**Place It on the Scale** 🧮

Give each probability as a number from $0$ to $1$.

**1)** A spinner has $4$ equal sections. $P(\\text{landing on one chosen section}) = \\,?$  *(fraction)*
**2)** $P(\\text{a certain event}) = \\,?$
**3)** $P(\\text{an impossible event}) = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1/4', '1', '0'],
          hint1: 'One favorable section out of $4$ equal sections is $\\frac{1}{4}$.',
          hint2: 'A certain event always has probability $1$.',
          hint3: 'An impossible event always has probability $0$.',
          explanation: '1) $\\frac{1}{4}$.  2) certain $= 1$.  3) impossible $= 0$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'probability-basics-grade7',
    sections: [
      {
        id: 'prob2-intro',
        type: 'text' as const,
        content: `# 🎲 Probability Basics

**Part 2 of 5 — Theoretical Probability & Sample Spaces**

---

> 🔑 **The Formula:** When every outcome is equally likely,
> $$P(\\text{event}) = \\frac{\\text{number of favorable outcomes}}{\\text{total number of outcomes}}$$`,
      },
      {
        id: 'prob2-sample',
        type: 'text' as const,
        content: `## The Sample Space

The **sample space** is the list of *all* possible outcomes of an experiment. Counting it correctly is the key to every probability problem.

| Experiment | Sample space | Total outcomes |
|------------|--------------|----------------|
| Flip a coin | H, T | $2$ |
| Roll a die | $1, 2, 3, 4, 5, 6$ | $6$ |
| Spin a $4$-color spinner | red, blue, green, yellow | $4$ |

A **favorable outcome** is any outcome that counts as the event you want.

> 💡 "Favorable" does not mean "good" — it just means it matches the event you are measuring. If your event is "roll an odd number," the favorable outcomes are $1$, $3$, and $5$.`,
      },
      {
        id: 'prob2-formula',
        type: 'text' as const,
        content: `## Theoretical Probability

**Theoretical probability** is what *should* happen based on counting, when all outcomes are equally likely.

$$P(\\text{event}) = \\frac{\\text{favorable outcomes}}{\\text{total outcomes}}$$

### Worked Example: Rolling an even number on a die

- **Total outcomes:** $6$ (the numbers $1$ through $6$)
- **Favorable outcomes:** $3$ (the evens $2$, $4$, $6$)

$$P(\\text{even}) = \\frac{3}{6} = \\frac{1}{2}$$

### Worked Example: Drawing a red marble

A bag has $4$ red, $3$ blue, and $1$ green marble. Total $= 4 + 3 + 1 = 8$.

$$P(\\text{red}) = \\frac{4}{8} = \\frac{1}{2}$$

> 🔑 **Always simplify** your fraction when you can — $\\frac{4}{8}$ and $\\frac{1}{2}$ mean the same probability.`,
      },
      {
        id: 'prob2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A standard die is rolled. What is $P(\\text{rolling a } 3)$?',
              options: ['$\\frac{1}{6}$', '$\\frac{1}{3}$', '$\\frac{3}{6}$', '$\\frac{1}{2}$'],
              correctAnswer: 0,
              explanation: 'There is exactly $1$ way to roll a $3$ out of $6$ equally likely outcomes, so $P = \\frac{1}{6}$.',
            },
            {
              question: 'A bag has $4$ red, $3$ blue, and $1$ green marble. What is $P(\\text{blue})$?',
              options: ['$\\frac{3}{8}$', '$\\frac{3}{7}$', '$\\frac{1}{3}$', '$\\frac{3}{4}$'],
              correctAnswer: 0,
              explanation: 'Total marbles $= 4+3+1 = 8$. Blue marbles $= 3$. So $P(\\text{blue}) = \\frac{3}{8}$.',
            },
          ],
        },
      },
      {
        id: 'prob2-bridge',
        type: 'text' as const,
        content: `## Counting Carefully

The whole skill is **counting**: how many outcomes match the event, and how many outcomes there are in total.

For an event like "greater than $4$" on a die, list them out so you don't miss any: $5$ and $6$ — that's $2$ favorable outcomes out of $6$.

> 💡 When in doubt, **write the sample space** ($1,2,3,4,5,6$) and circle the favorable ones. Now try a few on your own.`,
      },
      {
        id: 'prob2-drill',
        type: 'input-boxes' as const,
        content: `**Find the Probability** 🧮

A standard $6$-sided die is rolled. Write each probability as a **simplified fraction** (like \`1/2\`).

**1)** $P(\\text{rolling a } 5) = \\,?$
**2)** $P(\\text{rolling an odd number}) = \\,?$
**3)** $P(\\text{rolling a number greater than } 4) = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1/6', '1/2', '1/3'],
          hint1: 'There is only one $5$ out of $6$ numbers: $\\frac{1}{6}$.',
          hint2: 'Odd numbers are $1, 3, 5$ — that is $3$ out of $6$, which simplifies to $\\frac{1}{2}$.',
          hint3: 'Numbers greater than $4$ are $5$ and $6$ — that is $2$ out of $6$, which simplifies to $\\frac{1}{3}$.',
          explanation: '1) $\\frac{1}{6}$.  2) $\\frac{3}{6} = \\frac{1}{2}$.  3) $\\frac{2}{6} = \\frac{1}{3}$.',
        },
      },
      {
        id: 'prob2-spinner-text',
        type: 'text' as const,
        content: `## Spinners Work the Same Way

A spinner with **equal** sections behaves just like a die: each section is one equally likely outcome.

If a spinner has $8$ equal sections, the total number of outcomes is $8$, and you count favorable sections the same way you counted die faces.

> ⚠️ This only works when the sections are **the same size**. Unequal sections are not equally likely, so the simple counting formula would not apply.`,
      },
      {
        id: 'prob2-spinner-drop',
        type: 'dropdown-select' as const,
        content: `**Spinner Probabilities** 🔽

A spinner has $8$ equal sections numbered $1$ through $8$. Choose the correct probability.`,
        exercise: {
          dropdowns: [
            { label: '$P(\\text{landing on } 8)$:', options: ['$\\frac{1}{8}$', '$\\frac{1}{4}$', '$\\frac{8}{8}$', '$\\frac{1}{2}$'] },
            { label: '$P(\\text{an even number})$:', options: ['$\\frac{1}{2}$', '$\\frac{1}{4}$', '$\\frac{1}{8}$', '$\\frac{4}{8}$'] },
            { label: '$P(\\text{a number less than } 3)$:', options: ['$\\frac{1}{4}$', '$\\frac{1}{8}$', '$\\frac{1}{3}$', '$\\frac{3}{8}$'] },
          ],
          correctAnswers: ['$\\frac{1}{8}$', '$\\frac{1}{2}$', '$\\frac{1}{4}$'],
          hint1: 'Only one section shows an $8$ out of $8$ sections.',
          hint2: 'Even numbers are $2,4,6,8$ — that is $4$ out of $8$, which simplifies.',
          hint3: 'Numbers less than $3$ are $1$ and $2$ — that is $2$ out of $8$.',
          explanation: '$P(8)=\\frac{1}{8}$. Evens: $\\frac{4}{8}=\\frac{1}{2}$. Less than $3$: $\\frac{2}{8}=\\frac{1}{4}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'probability-basics-grade7',
    sections: [
      {
        id: 'prob3-intro',
        type: 'text' as const,
        content: `# 🎲 Probability Basics

**Part 3 of 5 — Complements: The Probability of "Not"**

---

> 🔑 **The Complement Rule:** The probability that an event does **not** happen is
> $$P(\\text{not } A) = 1 - P(A)$$`,
      },
      {
        id: 'prob3-complement',
        type: 'text' as const,
        content: `## What Is a Complement?

The **complement** of an event $A$ is "everything *except* $A$" — all the outcomes where $A$ does **not** happen.

Because something either happens or it doesn't, the two probabilities must add to $1$:

$$P(A) + P(\\text{not } A) = 1$$

Rearranging gives the rule:

$$P(\\text{not } A) = 1 - P(A)$$

### Worked Example: Not rolling a 6

On a die, $P(\\text{rolling a } 6) = \\frac{1}{6}$. So:

$$P(\\text{not } 6) = 1 - \\frac{1}{6} = \\frac{6}{6} - \\frac{1}{6} = \\frac{5}{6}$$

> 💡 **Why this is handy:** counting "all the ways something does NOT happen" can be slow. The complement lets you count the *one* thing it does, then subtract from $1$.`,
      },
      {
        id: 'prob3-worked',
        type: 'text' as const,
        content: `### Worked Example: Marbles

A bag has $10$ marbles: $7$ are red and $3$ are not red.

$$P(\\text{red}) = \\frac{7}{10}$$

$$P(\\text{not red}) = 1 - \\frac{7}{10} = \\frac{10}{10} - \\frac{7}{10} = \\frac{3}{10}$$

Notice $\\frac{7}{10} + \\frac{3}{10} = \\frac{10}{10} = 1$. ✓

### Quick check with percents

If there is a $30\\%$ chance of rain, then the chance of **no rain** is:

$$100\\% - 30\\% = 70\\%$$

> ⚠️ The complement of "**at least one**" is "**none**," and the complement of "**all**" is "**not all**." Read the event carefully before you subtract.`,
      },
      {
        id: 'prob3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'If $P(\\text{win}) = \\frac{2}{5}$, what is $P(\\text{not win})$?',
              options: ['$\\frac{3}{5}$', '$\\frac{2}{5}$', '$\\frac{1}{5}$', '$\\frac{5}{2}$'],
              correctAnswer: 0,
              explanation: '$P(\\text{not win}) = 1 - \\frac{2}{5} = \\frac{5}{5} - \\frac{2}{5} = \\frac{3}{5}$.',
            },
            {
              question: 'The chance of snow is $25\\%$. What is the chance of NO snow?',
              options: ['$25\\%$', '$50\\%$', '$75\\%$', '$100\\%$'],
              correctAnswer: 2,
              explanation: '$P(\\text{no snow}) = 100\\% - 25\\% = 75\\%$.',
            },
          ],
        },
      },
      {
        id: 'prob3-bridge',
        type: 'text' as const,
        content: `## Two Ways to the Same Answer

For "not red" with $3$ red out of $5$ marbles, you can either:

1. **Count directly** — there are $2$ non-red marbles, so $\\frac{2}{5}$, or
2. **Use the complement** — $1 - \\frac{3}{5} = \\frac{2}{5}$.

Both give the same answer. The complement is the faster route when there are *many* ways to "not" happen. Try it below.`,
      },
      {
        id: 'prob3-drill',
        type: 'input-boxes' as const,
        content: `**Use the Complement** 🧮

Answer with a **simplified fraction** (like \`5/6\`) unless told otherwise.

**1)** On a die, $P(\\text{not rolling a } 1) = \\,?$
**2)** A bag is $\\frac{3}{8}$ green marbles. $P(\\text{not green}) = \\,?$
**3)** If $P(\\text{event}) = 0.4$ as a decimal, then $P(\\text{not event}) = \\,?$  *(decimal)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5/6', '5/8', '0.6'],
          hint1: '$P(1) = \\frac{1}{6}$, so $P(\\text{not } 1) = 1 - \\frac{1}{6} = \\frac{5}{6}$.',
          hint2: '$1 - \\frac{3}{8} = \\frac{8}{8} - \\frac{3}{8} = \\frac{5}{8}$.',
          hint3: '$1 - 0.4 = 0.6$.',
          explanation: '1) $1-\\frac{1}{6}=\\frac{5}{6}$.  2) $1-\\frac{3}{8}=\\frac{5}{8}$.  3) $1-0.4=0.6$.',
        },
      },
      {
        id: 'prob3-recap',
        type: 'text' as const,
        content: `## Quick Recap

The complement rule shows up everywhere — weather, games, marbles, spinners. The setup is always the same:

$$P(\\text{not } A) = 1 - P(A)$$

And the two probabilities always add back to $1$. Use both ideas in the dropdown below.`,
      },
      {
        id: 'prob3-drop',
        type: 'dropdown-select' as const,
        content: `**Complements** 🔽

A spinner has $5$ equal sections: $3$ red and $2$ blue. Fill in each probability.`,
        exercise: {
          dropdowns: [
            { label: '$P(\\text{red})$:', options: ['$\\frac{3}{5}$', '$\\frac{2}{5}$', '$\\frac{1}{5}$', '$\\frac{5}{3}$'] },
            { label: '$P(\\text{not red})$:', options: ['$\\frac{2}{5}$', '$\\frac{3}{5}$', '$\\frac{1}{5}$', '$0$'] },
            { label: '$P(\\text{red}) + P(\\text{not red})$:', options: ['$1$', '$\\frac{1}{2}$', '$0$', '$\\frac{6}{5}$'] },
          ],
          correctAnswers: ['$\\frac{3}{5}$', '$\\frac{2}{5}$', '$1$'],
          hint1: '$3$ red sections out of $5$ total.',
          hint2: '"Not red" means blue: $2$ out of $5$, or use $1 - \\frac{3}{5}$.',
          hint3: 'An event and its complement always add to $1$.',
          explanation: '$P(\\text{red})=\\frac{3}{5}$, $P(\\text{not red})=\\frac{2}{5}$, and $\\frac{3}{5}+\\frac{2}{5}=1$. ✓',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'probability-basics-grade7',
    sections: [
      {
        id: 'prob4-intro',
        type: 'text' as const,
        content: `# 🎲 Probability Basics

**Part 4 of 5 — Experimental Probability & Predictions**

---

> 🔑 **Theory vs. Experiment:** *Theoretical* probability comes from counting. *Experimental* probability comes from actually doing the experiment and recording results.`,
      },
      {
        id: 'prob4-experimental',
        type: 'text' as const,
        content: `## Experimental Probability

**Experimental probability** (also called *relative frequency*) is based on data you collect:

$$P(\\text{event}) = \\frac{\\text{number of times the event happened}}{\\text{total number of trials}}$$

### Worked Example: Flipping a coin

Suppose you flip a coin $20$ times and get **heads** $12$ times.

$$P(\\text{heads}) = \\frac{12}{20} = \\frac{3}{5} = 0.6$$

The **theoretical** probability of heads is $\\frac{1}{2} = 0.5$. The experiment gave $0.6$ — close, but not exact.

> 💡 **The Law of Large Numbers (in plain words):** the *more* trials you run, the *closer* your experimental probability usually gets to the theoretical probability.`,
      },
      {
        id: 'prob4-table',
        type: 'text' as const,
        content: `### Worked Example: Reading a results table

A student spun a $4$-color spinner $50$ times:

| Color | Times spun |
|-------|-----------|
| Red | $15$ |
| Blue | $10$ |
| Green | $20$ |
| Yellow | $5$ |

The total is $15 + 10 + 20 + 5 = 50$. The experimental probability of green is:

$$P(\\text{green}) = \\frac{20}{50} = \\frac{2}{5} = 0.4$$

And the experimental probability of yellow is:

$$P(\\text{yellow}) = \\frac{5}{50} = \\frac{1}{10} = 0.1$$

> ⚠️ For experimental probability, the **denominator is the total number of trials** ($50$), *not* the number of colors ($4$).`,
      },
      {
        id: 'prob4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'You roll a die $30$ times and get a $4$ exactly $6$ times. What is the experimental $P(4)$?',
              options: ['$\\frac{1}{5}$', '$\\frac{1}{6}$', '$\\frac{1}{30}$', '$\\frac{1}{4}$'],
              correctAnswer: 0,
              explanation: 'Experimental $P = \\frac{6}{30} = \\frac{1}{5}$. (The theoretical value would be $\\frac{1}{6}$, but the experiment gave $\\frac{1}{5}$.)',
            },
            {
              question: 'Which is most likely to make experimental probability close to theoretical probability?',
              options: ['Running very few trials', 'Running many trials', 'Stopping after the first win', 'It never gets closer'],
              correctAnswer: 1,
              explanation: 'The more trials you run, the closer experimental probability usually gets to the theoretical value (Law of Large Numbers).',
            },
          ],
        },
      },
      {
        id: 'prob4-compare-text',
        type: 'text' as const,
        content: `## Comparing the Two

Use the spinner table from above again:

| Color | Times spun | Experimental probability |
|-------|-----------|--------------------------|
| Red | $15$ | $\\frac{15}{50} = \\frac{3}{10}$ |
| Blue | $10$ | $\\frac{10}{50} = \\frac{1}{5}$ |
| Green | $20$ | $\\frac{20}{50} = \\frac{2}{5}$ |
| Yellow | $5$ | $\\frac{5}{50} = \\frac{1}{10}$ |

If the spinner were *perfectly fair*, each color's **theoretical** probability would be $\\frac{1}{4}$ (one color out of four equal sections). Notice the experimental values are *near* $\\frac{1}{4}$ but not equal — that's normal for only $50$ spins.

> 💡 The four experimental probabilities should still add to $1$: $\\frac{15}{50}+\\frac{10}{50}+\\frac{20}{50}+\\frac{5}{50} = \\frac{50}{50} = 1$. ✓`,
      },
      {
        id: 'prob4-compare-drop',
        type: 'dropdown-select' as const,
        content: `**Theoretical vs. Experimental** 🔽

A coin is flipped $40$ times and lands heads $24$ times. Fill in each blank.`,
        exercise: {
          dropdowns: [
            { label: 'Experimental $P(\\text{heads})$:', options: ['$\\frac{3}{5}$', '$\\frac{1}{2}$', '$\\frac{24}{40}$ stays unsimplified', '$\\frac{2}{5}$'] },
            { label: 'Theoretical $P(\\text{heads})$:', options: ['$\\frac{1}{2}$', '$\\frac{3}{5}$', '$\\frac{1}{4}$', '$1$'] },
            { label: 'Which used the actual data?', options: ['Experimental', 'Theoretical', 'Both the same', 'Neither'] },
          ],
          correctAnswers: ['$\\frac{3}{5}$', '$\\frac{1}{2}$', 'Experimental'],
          hint1: 'Experimental uses the data: $\\frac{24}{40}$, then simplify.',
          hint2: 'A fair coin has theoretical $P(\\text{heads}) = \\frac{1}{2}$ no matter what the data shows.',
          hint3: 'Experimental probability is the one built from recorded results.',
          explanation: 'Experimental $= \\frac{24}{40} = \\frac{3}{5}$; theoretical $= \\frac{1}{2}$. Experimental probability is the one based on the actual flips.',
        },
      },
      {
        id: 'prob4-predict',
        type: 'text' as const,
        content: `## Making Predictions

You can use probability to **predict** how many times something will happen in many trials:

$$\\text{predicted count} = P(\\text{event}) \\times (\\text{number of trials})$$

### Worked Example

If $P(\\text{heads}) = \\frac{1}{2}$ and you flip a coin $80$ times, you'd *predict*:

$$\\frac{1}{2} \\times 80 = 40 \\text{ heads}$$

### Worked Example

If $P(\\text{red}) = \\frac{1}{4}$ on a spinner and you spin $60$ times, you'd predict:

$$\\frac{1}{4} \\times 60 = 15 \\text{ reds}$$

> 💡 A prediction is an *estimate*. Real results will usually be close but not exactly equal.`,
      },
      {
        id: 'prob4-drill',
        type: 'input-boxes' as const,
        content: `**Predict the Count** 🧮

Use $\\text{predicted count} = P \\times (\\text{trials})$. Enter a **whole number**.

**1)** $P(\\text{heads}) = \\frac{1}{2}$, flip $50$ times. Predict heads: $\\,?$
**2)** $P(\\text{rolling a } 6) = \\frac{1}{6}$, roll $60$ times. Predict sixes: $\\,?$
**3)** $P(\\text{blue}) = \\frac{1}{4}$, spin $100$ times. Predict blues: $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['25', '10', '25'],
          hint1: '$\\frac{1}{2} \\times 50 = 25$.',
          hint2: '$\\frac{1}{6} \\times 60 = 10$.',
          hint3: '$\\frac{1}{4} \\times 100 = 25$.',
          explanation: '1) $\\frac{1}{2}\\times 50 = 25$.  2) $\\frac{1}{6}\\times 60 = 10$.  3) $\\frac{1}{4}\\times 100 = 25$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'probability-basics-grade7',
    sections: [
      {
        id: 'prob5-intro',
        type: 'text' as const,
        content: `# 🎲 Probability Basics

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) place a probability on the $0$-to-$1$ scale, (2) compute theoretical probability by counting, (3) use the complement rule, and (4) work with experimental probability and predictions. Let's put it all together.`,
      },
      {
        id: 'prob5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Theoretical probability | $\\dfrac{\\text{favorable}}{\\text{total}}$ |
| Probability of "not $A$" | $1 - P(A)$ |
| Experimental probability | $\\dfrac{\\text{times it happened}}{\\text{total trials}}$ |
| Predict a count | $P(\\text{event}) \\times \\text{trials}$ |
| Valid range | $0 \\le P \\le 1$ |

> ⚠️ **Remember:** always simplify fractions, never let a probability exceed $1$ or go below $0$, and an event plus its complement always add to $1$.`,
      },
      {
        id: 'prob5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A bag has $5$ red, $2$ blue, and $3$ yellow marbles. What is $P(\\text{yellow})$?',
              options: ['$\\frac{3}{10}$', '$\\frac{3}{7}$', '$\\frac{1}{3}$', '$\\frac{3}{5}$'],
              correctAnswer: 0,
              explanation: 'Total $= 5+2+3 = 10$. Yellow $= 3$, so $P(\\text{yellow}) = \\frac{3}{10}$.',
            },
            {
              question: 'If $P(\\text{rain}) = \\frac{2}{7}$, what is $P(\\text{no rain})$?',
              options: ['$\\frac{5}{7}$', '$\\frac{2}{7}$', '$\\frac{7}{5}$', '$\\frac{1}{7}$'],
              correctAnswer: 0,
              explanation: '$P(\\text{no rain}) = 1 - \\frac{2}{7} = \\frac{7}{7} - \\frac{2}{7} = \\frac{5}{7}$.',
            },
          ],
        },
      },
      {
        id: 'prob5-bridge',
        type: 'text' as const,
        content: `## One Spinner, Every Skill

The next drill uses a single $10$-section spinner to touch all four skills at once: counting favorable outcomes, simplifying, taking a complement, and predicting a count.

> 💡 Take them one at a time. For each, decide first: am I *counting* a probability, *subtracting* for a complement, or *multiplying* to predict?`,
      },
      {
        id: 'prob5-drill',
        type: 'input-boxes' as const,
        content: `**Final Drill** 🧮

A spinner has $10$ equal sections numbered $1$ to $10$.

**1)** $P(\\text{landing on a number} > 7)$ as a simplified fraction $= \\,?$
**2)** $P(\\text{NOT landing on } 1)$ as a simplified fraction $= \\,?$
**3)** If you spin $40$ times, predict the number of times you land on an even number. *(whole number)* $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3/10', '9/10', '20'],
          hint1: 'Numbers greater than $7$ are $8, 9, 10$ — that is $3$ out of $10$.',
          hint2: '$1 - \\frac{1}{10} = \\frac{9}{10}$.',
          hint3: '$P(\\text{even}) = \\frac{5}{10} = \\frac{1}{2}$, so $\\frac{1}{2} \\times 40 = 20$.',
          explanation: '1) $\\{8,9,10\\}$ gives $\\frac{3}{10}$.  2) $1-\\frac{1}{10}=\\frac{9}{10}$.  3) $\\frac{1}{2}\\times 40 = 20$.',
        },
      },
      {
        id: 'prob5-exit-text',
        type: 'text' as const,
        content: `## You're Ready

That's the whole toolkit: the $0$-to-$1$ scale, theoretical probability from counting, the complement rule, and experimental probability with predictions.

The Exit Quiz below pulls one question from each big idea. Read each carefully and decide which tool fits before you answer.`,
      },
      {
        id: 'prob5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'A standard die is rolled. What is $P(\\text{rolling a number less than } 3)$?',
              options: ['$\\frac{1}{3}$', '$\\frac{1}{2}$', '$\\frac{1}{6}$', '$\\frac{2}{3}$'],
              correctAnswer: 0,
              explanation: 'Numbers less than $3$ are $1$ and $2$ — that is $2$ out of $6$, so $\\frac{2}{6} = \\frac{1}{3}$.',
            },
            {
              question: 'If $P(\\text{event}) = 0.85$, the event is best described as:',
              options: ['Impossible', 'Unlikely', 'Likely', 'Certain'],
              correctAnswer: 2,
              explanation: '$0.85$ is between $\\frac{1}{2}$ and $1$, so the event is likely (but not certain, which would be $1$).',
            },
            {
              question: 'You flip a coin $200$ times. About how many heads should you predict?',
              options: ['$50$', '$100$', '$150$', '$200$'],
              correctAnswer: 1,
              explanation: '$P(\\text{heads}) = \\frac{1}{2}$, so the prediction is $\\frac{1}{2} \\times 200 = 100$ heads.',
            },
          ],
        },
      },
    ],
  },
]
