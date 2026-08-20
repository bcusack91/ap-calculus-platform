export const lessonData = {
  topicSlug: 'sat-linear-inequalities-graphs-advanced',
  sections: [
    {
      id: 'advlig1-patterns',
      type: 'text' as const,
      content: `# The 700-800 Patterns: Linear Inequalities & Graphs

**Part 1 of 3 — Constraint Systems Under Pressure**

Hard-tier inequality items are optimization problems in disguise: multiple constraints, and the answer lives at whichever constraint **binds first**.

### Archetype 1: The Binding Constraint

When two resources limit production (beads AND clasps, rods AND sheets), compute the limit each imposes separately — **the smaller limit wins**. The larger limit is always an option.

**Worked example.** Each birdhouse needs $5$ boards and $8$ screws; $120$ boards and $176$ screws available. Max birdhouses?

Boards: $120 \\div 5 = 24$. Screws: $176 \\div 8 = 22$. The screws bind: **$22$**. An item may then ask for revenue at $\\$20$ each: $22 \\times 20 = \\$440$ — and plant $24 \\times 20 = \\$480$ plus the raw count $22$ as options.

### Archetype 2: Substitute the Known Coordinate, Combine the Bounds

Given a system like $y < -\\frac{2}{3}x + 8$ and $y \\ge x - 4$ with a point $(6, b)$: substitute $x = 6$ into BOTH inequalities to get a bound from each, then take the **tighter** one. Strict inequalities exclude their boundary — "greatest integer $b$" with $b < 4$ is $3$, not $4$.

**Worked example.** $(k, 9)$ satisfies $y \\le 4x + 3$ and $y \\ge -2x + 15$. Least integer $k$?

First: $9 \\le 4k + 3$, so $k \\ge 1.5$. Second: $9 \\ge -2k + 15$, so $k \\ge 3$. Both must hold — the stricter bound $k \\ge 3$ governs: **$k = 3$**. Using only one inequality gives $2$, the planted trap.

### Archetype 3: Requirements Plus a Budget (Round the Right Way)

Real-world systems mix a **minimum requirement** ("at least 40 chairs", "at least \\$170 earned") with a **cap** (budget, total hours). Fund the requirement first, then see what's left — and round DOWN for capacity, UP for requirements.

**Worked example.** Chairs $\\$12$ each (at least $40$ required), tables $\\$45$ each, budget $\\$1{,}500$. Max tables?

Chairs claim $40 \\times 12 = \\$480$, leaving $\\$1{,}020$. Tables: $1020 \\div 45 = 22.67 \\rightarrow$ **$22$**. Ignoring the chair requirement gives $33$; rounding up gives $23$ — both are in the options.`
    },
    {
      id: 'advlig1-q1',
      type: 'quiz' as const,
      question: `A workshop builds kites. Each kite requires 4 rods and 3 sheets of fabric. The workshop has 130 rods and 84 sheets. What is the greatest number of kites it can build?`,
      options: ['$28$', '$32$', '$33$', '$42$'],
      correctAnswer: 0,
      explanation: 'Rods allow $130 \\div 4 = 32.5 \\rightarrow 32$ kites; fabric allows $84 \\div 3 = 28$ kites. The fabric binds first, so the answer is $28$ — the SMALLER limit. $32$ uses only the rod constraint, the classic single-constraint trap. $33$ compounds it by rounding $32.5$ up. $42$ divides $84$ by $2$, a wrong-rate slip. On any two-resource problem, compute both limits; the test always makes the wrong constraint give the more tempting number.'
    },
    {
      id: 'advlig1-q2',
      type: 'quiz' as const,
      question: 'The point $(3, b)$ is a solution to the system $y \\ge 2x - 9$ and $y > -3x + 1$. What is the least possible integer value of $b$?',
      options: ['$-8$', '$-7$', '$-3$', '$-2$'],
      correctAnswer: 2,
      explanation: 'Substitute $x = 3$ into both. First: $b \\ge 2(3) - 9 = -3$. Second: $b > -3(3) + 1 = -8$. Both must hold, and $b \\ge -3$ is the tighter bound, so the least integer is $-3$. The traps: $-8$ is the boundary of the weaker constraint (and excluded by the strict inequality anyway); $-7$ is the least integer satisfying ONLY the second inequality; $-2$ over-corrects by treating $\\ge$ as strict. Non-strict $\\ge$ includes its boundary — $-3$ itself is allowed.'
    },
    {
      id: 'advlig1-q3',
      type: 'quiz' as const,
      question: `A tutor earns $\\$18$ per hour on weekdays and $\\$25$ per hour on weekends. One week she works exactly 6 weekday hours, needs to earn at least $\\$260$ in total, and can work at most 14 hours overall. What is the least whole number of weekend hours she must work?`,
      options: ['$6$', '$7$', '$8$', '$11$'],
      correctAnswer: 1,
      explanation: 'Weekday earnings: $6 \\times 18 = \\$108$. Weekends must supply at least $260 - 108 = \\$152$, so $25w \\ge 152$ gives $w \\ge 6.08$ — a REQUIREMENT, so round UP to $7$. Check the cap: $6 + 7 = 13 \\le 14$ hours, consistent. Traps: $6$ rounds down and leaves her at $\\$258$, two dollars short. $8$ is $14 - 6$, the MOST she could work, not the least she must. $11$ is the round-up of $260 \\div 25 = 10.4$, which forgets the weekday income entirely.'
    }
  ]
};
