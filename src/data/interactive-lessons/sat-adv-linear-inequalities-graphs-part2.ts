export const lessonData = {
  topicSlug: 'sat-linear-inequalities-graphs-advanced',
  sections: [
    {
      id: 'advlig2-traps',
      type: 'text' as const,
      content: `# Traps & Speed: Linear Inequalities & Graphs

**Part 2 of 3 — Boundary Games and Test-Point Discipline**

### The Boundary Is Where They Get You

Nearly every hard inequality distractor is a boundary story:

- **Strict boundary planted as an answer.** If $3x + 2y < 18$, a point giving exactly $18$ FAILS — but it will be an option, and it will pass the other inequality convincingly.
- **Round-up on a budget / round-down on a requirement.** Both wrong directions always appear. Budget: $22.67 \\rightarrow 22$. Requirement: $8.64 \\rightarrow 9$.
- **The ignored constraint.** Answers computed from only one of the two (or three) conditions are systematically planted — usually as the LARGER, more satisfying number.
- **Least vs. greatest.** After combining bounds like $2 \\le b < 4$, the test asks for one end and offers both.

### Test-Point Discipline (the 20-second method)

For "which ordered pair is a solution" items, don't graph — **test each option in the harder inequality first** (the one more options will fail). Eliminate, then run survivors through the second inequality. Check strict vs. non-strict on EVERY substitution that lands exactly on a boundary; the test engineers one option to land there on purpose.

### Desmos Exploits

- Type both inequalities directly (Desmos shades them); the solution region is the **overlap**. Then check options by clicking — or plot each option as a point and see which lands in the dark region. Points on a **dashed** boundary don't count; on a **solid** boundary they do.
- For "greatest integer $b$ such that $(6, b)$ works": add the vertical line $x = 6$ and read off where it crosses the shaded overlap.
- Word problems: translating to a system and letting Desmos shade is usually SLOWER than funding the requirement first and dividing the leftover. Save Desmos for genuinely two-dimensional questions.`
    },
    {
      id: 'advlig2-q1',
      type: 'quiz' as const,
      question: 'Which ordered pair $(x, y)$ is a solution to the system $y > 0.5x + 1$ and $2x + 3y < 24$?',
      options: ['$(0, 8)$', '$(2, 3)$', '$(6, 4)$', '$(9, 6)$'],
      correctAnswer: 1,
      explanation: 'Test $(2, 3)$: first, $3 > 0.5(2) + 1 = 2$ — true; second, $2(2) + 3(3) = 13 < 24$ — true. Solution. Now the autopsy of the rest: $(0, 8)$ passes the first ($8 > 1$) but gives $2(0) + 3(8) = 24$, which is NOT strictly less than $24$ — boundary trap one. $(6, 4)$ gives $4 > 4$ — false, boundary trap two on the other inequality. $(9, 6)$ passes the first ($6 > 5.5$) but fails the second badly ($36 < 24$ is false). Two of the three wrong options sit exactly on a boundary; that is never an accident.'
    },
    {
      id: 'advlig2-q2',
      type: 'quiz' as const,
      question: `A caterer's budget allows at most t tables, where the cost constraint reduces to t <= 26.4. The answer choices are 25, 26, 27, and 29, and a student under time pressure picks 27. What exactly went wrong?`,
      options: [
        'The student ignored one of the constraints in the problem',
        'The student used the wrong per-table rate',
        'The student rounded down when the problem required rounding up',
        'The student rounded 26.4 up, but a budget cap means the greatest WHOLE number available is 26'
      ],
      correctAnswer: 3,
      explanation: 'With $t \\le 26.4$, buying $27$ tables costs more than the budget allows — fractional capacity never funds a whole extra unit. The greatest valid whole number is $26$. This is the signature budget-rounding trap: the round-up neighbor of the true answer is always planted ($27$ here), often alongside an extra-cautious round-down ($25$) and an ignored-constraint number ($29$). Requirements ("at least") round up; capacities and budgets round down — every time.'
    },
    {
      id: 'advlig2-q3',
      type: 'quiz' as const,
      question: `A 400-seat venue will sell out. VIP tickets cost $\\$90$ and general tickets cost $\\$55$. The promoter must collect at least $\\$30{,}100$. What is the least number of VIP tickets that must be sold?`,
      options: ['$168$', '$231$', '$232$', '$335$'],
      correctAnswer: 2,
      explanation: 'With $v$ VIP tickets, general tickets are $400 - v$: revenue is $90v + 55(400 - v) = 35v + 22{,}000 \\ge 30{,}100$, so $35v \\ge 8{,}100$ and $v \\ge 231.4$. A requirement rounds UP: $232$. (Check: $v = 232$ gives $\\$30{,}120$; $v = 231$ gives only $\\$30{,}085$.) The traps: $231$ rounds down and misses the target by $\\$15$. $168$ is $400 - 232$ — the general-ticket count, the other quantity. $335$ is $30{,}100 \\div 90$ rounded up, which ignores the revenue the general tickets contribute.'
    }
  ]
};
