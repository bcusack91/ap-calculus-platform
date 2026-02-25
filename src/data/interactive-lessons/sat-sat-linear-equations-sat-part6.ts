export const satLinearEquationsPart6Data = {
  topicSlug: 'sat-linear-equations-sat',
  sections: [
    {
      id: 'sat-l6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — SAT Strategies & Common Traps**

Now that you know the core skills, let's focus on **SAT-specific strategies** that save time and avoid common mistakes.

**Strategy 1: Backsolving (Plugging In Answer Choices)**

When you're stuck setting up an equation, try **plugging each answer choice** into the problem to see which one works. Start with choice B or C (the middle values) to save time.

**Example:** If $3x - 7 = 2(x + 1)$, what is $x$?
- A) 5  B) 7  C) 9  D) 11

Try B: $3(7) - 7 = 14$ and $2(7+1) = 16$. Not equal. ❌
Try C: $3(9) - 7 = 20$ and $2(9+1) = 20$. Equal! ✅

Answer: C
      `
    },
    {
      id: 'sat-l6-check1',
      type: 'multiple-choice' as const,
      content: `
**Try Backsolving** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'If $4(x - 2) = 3x + 5$, what is the value of $x$?',
            options: [
              '$9$',
              '$11$',
              '$13$',
              '$15$'
            ],
            correctAnswer: 2,
            explanation: 'Backsolve with C: $4(13 - 2) = 4(11) = 44$ and $3(13) + 5 = 39 + 5 = 44$. ✓ Or algebraically: $4x - 8 = 3x + 5 \\Rightarrow x = 13$.'
          }
        ]
      }
    },
    {
      id: 'sat-l6-strategy2',
      type: 'text' as const,
      content: `
**Strategy 2: Picking Numbers**

When a problem uses variables in the answer choices or asks about a general relationship, **pick easy numbers** and test.

**Example:** "If $a = 2b + 3$, which expression equals $4a - 2$?"

Pick $b = 1$: Then $a = 2(1) + 3 = 5$, and $4a - 2 = 18$.

Now test each answer choice with $b = 1$ to see which gives 18.

---

**Strategy 3: Watch for "No Solution" and "All Solutions" Clues**

If the SAT asks *"What value of $k$ makes this equation have no solution?"*, the equation must simplify to something like $0 = 5$ (a false statement). For infinite solutions, it must become $0 = 0$ (always true).
      `
    },
    {
      id: 'sat-l6-no-solution',
      type: 'multiple-choice' as const,
      content: `
**Practice: Special Solution Types** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'For what value of $a$ does the equation $a(x + 2) = 3x + 6$ have infinitely many solutions?',
            options: [
              '$1$',
              '$2$',
              '$3$',
              '$6$'
            ],
            correctAnswer: 2,
            explanation: 'Distribute: $ax + 2a = 3x + 6$. For infinitely many solutions, coefficients of $x$ must match AND constants must match: $a = 3$ and $2a = 6$. Both give $a = 3$. ✓'
          },
          {
            question: 'For what value of $b$ does $2(x + b) = 2x + 10$ have no solution?',
            options: [
              '$3$',
              '$5$',
              '$7$',
              'No value — this equation always has a solution for some $b$'
            ],
            correctAnswer: 3,
            explanation: "Distribute: $2x + 2b = 2x + 10$. Subtract $2x$: $2b = 10$, so $b = 5$, which gives infinitely many solutions. For any other $b$, you get a contradiction like $6 = 10$ — that means no solution. Since no single listed value of $b$ uniquely creates no solution, the answer is D."
          }
        ]
      }
    },
    {
      id: 'sat-l6-common-traps',
      type: 'text' as const,
      content: `
**Common SAT Traps with Linear Equations**

🚫 **Trap 1: Distributing the negative sign incorrectly**
- $-(x - 3) = -x + 3$, NOT $-x - 3$

🚫 **Trap 2: Forgetting to flip the inequality**
- Dividing by a negative changes $<$ to $>$

🚫 **Trap 3: Solving for the wrong thing**
- If the question asks for $2x + 1$ but you solved for $x$, plug $x$ back in!

🚫 **Trap 4: Not checking the domain**
- If a word problem asks for "how many students," your answer can't be negative or a fraction
      `
    },
    {
      id: 'sat-l6-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $3x + 5 = 26$, what is the value of $6x + 10$?',
            options: [
              '$42$',
              '$47$',
              '$52$',
              '$57$'
            ],
            correctAnswer: 2,
            explanation: "Notice that $6x + 10 = 2(3x + 5) = 2(26) = 52$. You don't even need to solve for $x$! This is a classic SAT shortcut."
          },
          {
            question: 'A tank contains 200 gallons of water. Water drains at 8 gallons per minute. After how many minutes will the tank have exactly 40 gallons?',
            options: [
              '$15$',
              '$20$',
              '$25$',
              '$30$'
            ],
            correctAnswer: 1,
            explanation: '$200 - 8t = 40$. Subtract 200: $-8t = -160$. Divide by $-8$: $t = 20$ minutes.'
          }
        ]
      }
    }
  ]
}
