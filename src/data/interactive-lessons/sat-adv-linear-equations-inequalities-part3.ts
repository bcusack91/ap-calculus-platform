export const lessonData = {
  topicSlug: 'sat-linear-equations-inequalities-advanced',
  sections: [
    {
      id: 'advlei3-drill',
      type: 'text' as const,
      content: `# Timed Drill: Linear Equations & Inequalities

**Part 3 of 3 — Four Questions, Full Difficulty**

Target pace: **75 seconds per question**. That is the real budget these carry on test day if you want time banked for harder algebra later in the module.

Drill discipline:

1. Read the **final sentence first** — know the quantity being asked before you touch the setup.
2. After solving, spend 5 seconds asking: "is this the asked-for quantity, or my intermediate?"
3. On max/min questions, verify the boundary integer before committing.

Start the clock.`
    },
    {
      id: 'advlei3-q1',
      type: 'quiz' as const,
      question: 'In the equation $c(3x - 5) = 12x + d$, $c$ and $d$ are constants and the equation is true for all values of $x$. What is the value of $d - c$?',
      options: ['$-24$', '$-20$', '$-16$', '$4$'],
      correctAnswer: 0,
      explanation: 'Expanding gives $3cx - 5c = 12x + d$. True for all $x$ means coefficients match ($3c = 12$, so $c = 4$) and constants match ($d = -5c = -20$). Then $d - c = -20 - 4 = -24$. The traps: $-20$ is $d$ alone and $4$ is $c$ alone — intermediate values. $-16$ is $d + c$, answering the wrong combination. Hard items love asking for $d - c$ precisely because the sum and the individual values all feel like finish lines.'
    },
    {
      id: 'advlei3-q2',
      type: 'quiz' as const,
      question: `A freight elevator has a maximum capacity of 1,500 pounds. A worker weighing 174 pounds rides along with equipment already loaded that weighs 396 pounds. Each box to be added weighs 62 pounds. What is the greatest number of boxes the elevator can carry?`,
      options: ['$14$', '$15$', '$17$', '$24$'],
      correctAnswer: 1,
      explanation: 'Worker plus equipment: $174 + 396 = 570$ pounds. Remaining capacity: $1500 - 570 = 930$ pounds, and $930 \\div 62 = 15$ exactly, so $15$ boxes fit with the load at precisely $1{,}500$ pounds — the maximum is allowed. $14$ is the over-cautious answer from rounding down a division that was already exact. $17$ comes from forgetting the worker: $1104 \\div 62 = 17.8$. $24$ ignores both the worker and the equipment: $1500 \\div 62 = 24.2$. When the division comes out exact, check whether the limit is inclusive — "maximum capacity" includes the boundary.'
    },
    {
      id: 'advlei3-q3',
      type: 'quiz' as const,
      question: `A bakery sells muffins for $\\$4.00$ and scones for $\\$2.50$. One morning the number of scones sold was 6 more than twice the number of muffins sold, and total revenue was $\\$258$. How much revenue came from scones?`,
      options: ['$\\$42$', '$\\$60$', '$\\$108$', '$\\$150$'],
      correctAnswer: 3,
      explanation: 'Let $m$ be muffins; scones are $2m + 6$. Revenue: $4m + 2.5(2m + 6) = 258$, so $4m + 5m + 15 = 258$, giving $9m = 243$ and $m = 27$. Scones: $2(27) + 6 = 60$, so scone revenue is $60 \\times 2.50 = \\$150$. The traps: $\\$60$ is the scone COUNT dressed up as dollars. $\\$108$ is the muffin revenue — right computation, wrong item. $\\$42$ is the difference between the two revenues ($150 - 108$), which a different version of this question would ask for. Match the number to the exact quantity requested.'
    },
    {
      id: 'advlei3-q4',
      type: 'quiz' as const,
      question: 'If $\\frac{2}{3}(9x + 6) = 4x - 10$, what is the value of $x + 8$?',
      options: ['$-7$', '$1$', '$7$', '$15$'],
      correctAnswer: 1,
      explanation: 'Distribute: $\\frac{2}{3}(9x + 6) = 6x + 4$. Then $6x + 4 = 4x - 10$ gives $2x = -14$, so $x = -7$, and $x + 8 = 1$. The traps: $-7$ is $x$ itself, the intermediate. $7$ comes from dropping the sign on $x$, and $15$ is $7 + 8$ — the sign error carried through to the requested expression. Fast check: $x = -7$ gives left side $\\frac{2}{3}(-57) = -38$ and right side $-38$. Verified in seconds.'
    }
  ]
};
