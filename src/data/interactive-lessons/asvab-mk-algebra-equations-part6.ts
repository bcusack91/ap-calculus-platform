export const asvabMkAlgebraEquationsPart6Data = {
  topicSlug: 'asvab-mk-algebra-equations',
  sections: [
    {
      id: 'mkle6-intro',
      type: 'text' as const,
      content: `# ⚖️ Linear Equations and Inequalities

**Part 6 of 7 — Test Strategy and Common Traps**

### Your Clock on MK

| Version | Questions | Time | Per question |
|:---|:---:|:---:|:---:|
| CAT-ASVAB (computer, at MEPS) | $15$ | $31$ minutes | about $2$ minutes |
| Paper enlistment version | $25$ | $24$ minutes | about $1$ minute |

On the computer version, a few things change how you should work:

- **You can't go back.** Once you answer, the question is gone. Check your work **before** you click.
- **It adapts to you.** A right answer usually brings a harder question next. Don't panic if questions get tougher: that's usually a good sign.
- **Every question might count.** Some questions may be unscored tryouts, and you can't tell which, so treat every one as scored.
- **Don't rush-guess at the end.** If time runs out, unfinished questions are scored as random guesses. The official advice is to keep reading and genuinely answering when time is short, because the computer test applies a relatively large penalty for a string of wrong answers at the end of a subtest.

Two minutes is plenty for one equation. Use it: solve, then **check**.`
    },
    {
      id: 'mkle6-strategies',
      type: 'text' as const,
      content: `## Four Moves That Save Points

### 1. Check by substituting

Plug your answer back into the **original** equation. If both sides don't match, you made a slip somewhere. This takes about 15 seconds and catches most sign errors.

### 2. Work backward from the choices

When an equation looks messy, try the answer choices. Start with a middle value: if it's too big, you know to try smaller ones.

Example: "Which value of $x$ makes $3(x - 2) + x = 18$ true?" Try $6$: $3(4) + 6 = 18$ ✓. Done, without solving anything.

### 3. Answer the question that was asked

Read the last line again before you choose. Many questions ask for something **other** than $x$:

"If $3x + 4 = 19$, what is $6x + 1$?"

$3x = 15$, so $x = 5$, and $6x + 1 = 31$. The choices will include $5$ (the value of $x$) and $15$ (the value of $3x$) to catch people who stop early. A shortcut: $6x$ is double $3x$, so $6x = 30$ without ever finding $x$.

### 4. Know where the wrong choices come from

Test writers build wrong answers from common mistakes. If you know the mistakes, you can spot the traps.

| Common mistake | Example |
|:---|:---|
| Distributing to only the first term | $-2(x - 4)$ written as $-2x - 4$ instead of $-2x + 8$ |
| Losing the negative on the second term | $-2(x - 4)$ written as $-2x - 8$ |
| Not flipping the inequality | $-3x > 12$ "solved" as $x > -4$ instead of $x < -4$ |
| Reversing "less than" | "$6$ less than $n$" written as $6 - n$ |
| Stopping early | finding $x$ when the question asks for $x + 3$ |
| Moving a term without changing its sign | $x + 7 = 2$ "solved" as $x = 9$ |`
    },
    {
      id: 'mkle6-mc',
      type: 'multiple-choice' as const,
      content: '**Spot the trap.** 🎯 Each wrong choice comes from a real mistake. Find the right one.',
      exercise: {
        questions: [
          {
            question: 'Solve for $x$: $10 - 2(x + 3) = 12$',
            options: ['$\\frac{1}{2}$', '$-1.5$', '$4$', '$-4$'],
            correctAnswer: 3,
            explanation: 'Distribute $-2$ to both terms: $10 - 2x - 6 = 12$, so $4 - 2x = 12$, $-2x = 8$ and $x = -4$. Distributing to the $x$ only ($10 - 2x + 3$) leads to $\\frac{1}{2}$; computing $10 - 2$ first leads to $-1.5$; dropping the negative at the end gives $4$.'
          },
          {
            question: 'If $4x - 5 = 23$, what is the value of $x + 4$?',
            options: ['$7$', '$11$', '$4.5$', '$8.5$'],
            correctAnswer: 1,
            explanation: '$4x = 28$, so $x = 7$ and $x + 4 = 11$. The value $7$ is $x$ itself (stopping early). Subtracting $5$ instead of adding gives $x = 4.5$, and $8.5$ adds $4$ to that wrong value.'
          },
          {
            question: 'Solve: $-5x \\ge 20$',
            options: ['$x \\ge -4$', '$x \\le 4$', '$x \\le -4$', '$x \\ge 4$'],
            correctAnswer: 2,
            explanation: 'Divide by $-5$ and flip the sign: $x \\le -4$. Leaving the sign alone gives $x \\ge -4$, the most common trap on inequality questions. Check: $x = -5$ gives $25 \\ge 20$ ✓.'
          },
          {
            question: 'Which value of $x$ makes $2(x + 5) - x = 17$ true?',
            options: ['$7$', '$6$', '$12$', '$11$'],
            correctAnswer: 0,
            explanation: 'Try the choices: $x = 7$ gives $2(12) - 7 = 24 - 7 = 17$ ✓. Solving directly: $2x + 10 - x = 17$, so $x + 10 = 17$ and $x = 7$. Writing $2(x + 5)$ as $2x + 5$ leads to $12$.'
          }
        ]
      }
    },
    {
      id: 'mkle6-dropdown',
      type: 'dropdown-select' as const,
      content: `**Find the error.** 🔽 A student solved $3 - 4(x - 2) = 23$ like this:

| Step | Work |
|:---:|:---|
| 1 | $3 - 4x - 8 = 23$ |
| 2 | $-4x - 5 = 23$ |
| 3 | $-4x = 28$ |
| 4 | $x = -7$ |`,
      exercise: {
        dropdowns: [
          {
            label: 'The first incorrect step is:',
            options: ['Step 2', 'Step 3', 'Step 4', 'Step 1'],
            correctAnswer: 3
          },
          {
            label: 'The mistake in that step is:',
            options: [
              '$-4$ times $-2$ should be $+8$',
              '$3 - 4$ should be done first',
              'the $23$ should be negative',
              '$-4$ times $x$ should be $+4x$'
            ],
            correctAnswer: 0
          },
          {
            label: 'The correct solution is:',
            options: ['$x = -7$', '$x = 3$', '$x = -3$', '$x = 7$'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['Step 1', '$-4$ times $-2$ should be $+8$', '$x = -3$'],
        hint1: 'Check the distribution in Step 1 term by term.',
        hint2: 'What is $-4 \\cdot (-2)$?',
        hint3: 'Redo it: $3 - 4x + 8 = 23$.',
        explanation: 'In Step 1, $-4 \\cdot (-2) = +8$, not $-8$. Correctly: $3 - 4x + 8 = 23$, so $11 - 4x = 23$, $-4x = 12$ and $x = -3$. Check: $3 - 4(-3 - 2) = 3 + 20 = 23$ ✓'
      }
    },
    {
      id: 'mkle6-input',
      type: 'input-boxes' as const,
      content: `**Answer what's asked.** ✍️

**1)** If $5x + 3 = 28$, what is $10x - 1$?

**2)** If $2y - 7 = 9$, what is $y + 10$?`,
      exercise: {
        boxes: 2,
        correctAnswers: ['49', '18'],
        hint1: '$5x = 25$, so $10x = 50$.',
        hint2: '$2y = 16$, so $y = 8$.',
        hint3: 'Now finish: the question does not ask for $x$ or $y$.',
        explanation: '(1) $5x = 25$, so $10x = 50$ and $10x - 1 = 49$. (2) $2y = 16$, so $y = 8$ and $y + 10 = 18$.'
      }
    },
    {
      id: 'mkle6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- About **2 minutes per MK question** on the CAT-ASVAB: enough to solve **and** check
- You can't go back, so check by substituting **before** you answer
- Stuck? Plug in the answer choices, starting from a middle value
- Re-read the last line: the question may ask for $2x$, $x + 4$ or $y$
- Wrong choices come from predictable mistakes: half-distributed negatives, unflipped inequalities, reversed "less than," stopping early
- If time is short, keep genuinely working: a run of wild guesses at the end costs more than it saves

> **Up Next:** Part 7 — the mixed mastery set.`
    }
  ]
};
