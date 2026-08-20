export const lessonData = {
  topicSlug: 'sat-systems-linear-equations-advanced',
  sections: [
    {
      id: 'advsys3-drill',
      type: 'text' as const,
      content: `# Timed Drill: Systems of Linear Equations

**Part 3 of 3 — Four Questions, Full Difficulty**

Target pace: **75 seconds per question**.

Before you start, three reflexes to run on every item:

1. Mirrored coefficients? **Add or subtract whole equations first.**
2. Parameter question? **Ratio the known coefficients, apply the factor, mind the sign.**
3. Word problem? **Circle the final ask** — count vs. dollars, which entity, sum vs. difference.

Start the clock.`
    },
    {
      id: 'advsys3-q1',
      type: 'quiz' as const,
      question: 'If $7x + 3y = 72$ and $3x + 7y = 48$, what is the value of $x - y$?',
      options: ['$3$', '$6$', '$12$', '$24$'],
      correctAnswer: 1,
      explanation: 'Subtract the second equation from the first: $(7x - 3x) + (3y - 7y) = 72 - 48$, so $4x - 4y = 24$ and $x - y = 6$ in one step. $24$ is the value before dividing by $4$ — the stopping-short trap. $12$ is $x + y$ (adding gives $10x + 10y = 120$), the opposite combination. $3$ is $y$ alone (the full solution is $x = 9$, $y = 3$). Subtraction order matters: first minus second gives $+6$; reversing it gives $-6$ and a wrong sign.'
    },
    {
      id: 'advsys3-q2',
      type: 'quiz' as const,
      question: `A farm stand sells small baskets for $\\$7$ and large baskets for $\\$11$. On Saturday it sold 53 baskets in total and collected $\\$499$. How much of that money came from large baskets?`,
      options: ['$\\$32$', '$\\$147$', '$\\$231$', '$\\$352$'],
      correctAnswer: 3,
      explanation: 'Let $s$ and $l$ count the baskets: $s + l = 53$ and $7s + 11l = 499$. Substitute $s = 53 - l$: $7(53) + 4l = 499$, so $371 + 4l = 499$, giving $4l = 128$ and $l = 32$; then $s = 21$. Large-basket revenue: $11 \\times 32 = \\$352$. The traps: $\\$32$ is the COUNT of large baskets with a dollar sign glued on. $\\$147$ is the small-basket revenue ($7 \\times 21$) — wrong category. $\\$231$ is $11 \\times 21$, the large price times the small count. Two of the four options mix up count and price; unit-check every candidate.'
    },
    {
      id: 'advsys3-q3',
      type: 'quiz' as const,
      question: 'The system $9x + 6y = 21$ and $ax + by = 7$ has infinitely many solutions, where $a$ and $b$ are constants. What is the value of $a + b$?',
      options: ['$2$', '$3$', '$5$', '$15$'],
      correctAnswer: 2,
      explanation: 'The constants reveal the multiple: $7 = 21 \\times \\frac{1}{3}$, so the second equation is one-third of the first. Then $a = 9 \\times \\frac{1}{3} = 3$ and $b = 6 \\times \\frac{1}{3} = 2$, giving $a + b = 5$. The traps: $3$ is $a$ alone, $2$ is $b$ alone. $15$ is $a + b$ computed with the factor applied only to one coefficient ($9 + 6$). Here the scale factor came from the CONSTANTS because both were known — use whichever pair of knowns lines up.'
    },
    {
      id: 'advsys3-q4',
      type: 'quiz' as const,
      question: `Streaming service A charges $\\$60$ for a device plus $\\$9$ per month. Service B charges $\\$24$ for a device plus $\\$12$ per month. At the point when the total amount paid to A exceeds the total paid to B by exactly $\\$15$, what is the total amount paid to B?`,
      options: ['$\\$7$', '$\\$108$', '$\\$123$', '$\\$231$'],
      correctAnswer: 1,
      explanation: 'After $m$ months, A totals $60 + 9m$ and B totals $24 + 12m$. Set $(60 + 9m) - (24 + 12m) = 15$: $36 - 3m = 15$, so $3m = 21$ and $m = 7$. B has been paid $24 + 12(7) = \\$108$. (Check: A is at $60 + 63 = 123$, and $123 - 108 = 15$.) The traps: $\\$7$ is the month count, $\\$123$ is A’s total — the other entity — and $\\$231$ is both totals added. The subtraction direction is also a trap: "A exceeds B" means A minus B, and reversing it gives $3m - 36 = 15$, $m = 17$, which matches none of the checks.'
    }
  ]
};
