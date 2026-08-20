export const lessonData = {
  topicSlug: 'sat-linear-inequalities-graphs-advanced',
  sections: [
    {
      id: 'advlig3-drill',
      type: 'text' as const,
      content: `# Timed Drill: Linear Inequalities & Graphs

**Part 3 of 3 — Four Questions, Full Difficulty**

Target pace: **75 seconds per question**.

Pre-flight checklist:

1. Count the constraints. **Every one of them must be used or consciously ruled out.**
2. Requirement $\\rightarrow$ round up. Budget/capacity $\\rightarrow$ round down. Say it before you round.
3. Strict inequality $\\rightarrow$ the boundary itself is OUT.

Start the clock.`
    },
    {
      id: 'advlig3-q1',
      type: 'quiz' as const,
      question: `A technician performs inspections that take 22 minutes each during a 7-hour shift that includes two required 20-minute breaks. Policy requires at least 12 and at most 20 inspections per shift. What is the greatest number of inspections the technician can complete in one shift?`,
      options: ['$17$', '$18$', '$19$', '$20$'],
      correctAnswer: 0,
      explanation: 'Working time: $7 \\times 60 - 2 \\times 20 = 420 - 40 = 380$ minutes. Then $380 \\div 22 = 17.27$, and capacity rounds DOWN: $17$ inspections ($374$ minutes used). The policy bounds are consistent ($12 \\le 17 \\le 20$). The traps: $18$ rounds up and would need $396$ minutes. $19$ ignores the breaks ($420 \\div 22 = 19.09$, rounded down). $20$ is the policy cap, which the clock never lets the technician reach — a stated bound is not automatically attainable.'
    },
    {
      id: 'advlig3-q2',
      type: 'quiz' as const,
      question: `A florist makes b bouquets and w wreaths. She can make at most 60 items in total. Each bouquet uses 5 roses and each wreath uses 8 roses, and at most 400 roses are available. She must make at least 15 wreaths. Which system represents these conditions?`,
      options: [
        '$b + w \\le 60$, $8b + 5w \\le 400$, $w \\ge 15$',
        '$b + w \\le 60$, $5b + 8w \\le 400$, $w \\le 15$',
        '$b + w \\le 60$, $5b + 8w \\le 400$, $w \\ge 15$',
        '$b + w \\ge 60$, $5b + 8w \\le 400$, $w \\ge 15$'
      ],
      correctAnswer: 2,
      explanation: '"At most 60 items" gives $b + w \\le 60$. Roses: $5$ per bouquet and $8$ per wreath with at most $400$ gives $5b + 8w \\le 400$ — the rate must attach to its own variable. "At least 15 wreaths" gives $w \\ge 15$. The first option swaps the rose rates between products; the second flips "at least" into $w \\le 15$; the fourth turns the item cap into a minimum. On system-translation items, check each option against ONE phrase at a time — a single reversed symbol is the entire question.'
    },
    {
      id: 'advlig3-q3',
      type: 'quiz' as const,
      question: 'The point $(a, 7)$ is a solution to the system $y < 5x - 3$ and $y \\ge -x + 9$. What is the least possible integer value of $a$?',
      options: ['$2$', '$3$', '$9$', '$10$'],
      correctAnswer: 1,
      explanation: 'Substitute $y = 7$. First inequality: $7 < 5a - 3$, so $5a > 10$ and $a > 2$ — STRICT, so $a = 2$ is excluded and the least integer is $3$. Second: $7 \\ge -a + 9$, so $a \\ge 2$, which $a = 3$ satisfies. The traps: $2$ is the boundary value the strict inequality throws out. $10$ is the unfinished intermediate from $5a > 10$. $9$ is the intercept of the second boundary line, a number copied from the problem. When the two bounds nearly coincide ($a > 2$ vs. $a \\ge 2$), strictness alone decides the answer.'
    },
    {
      id: 'advlig3-q4',
      type: 'quiz' as const,
      question: `A carpenter builds only benches this month. Each bench requires 12 boards and 16 bolts. He has 300 boards and 360 bolts, and each bench sells for $\\$45$. What is the greatest revenue he can earn?`,
      options: ['$\\$22$', '$\\$990$', '$\\$1{,}035$', '$\\$1{,}125$'],
      correctAnswer: 1,
      explanation: 'Boards allow $300 \\div 12 = 25$ benches; bolts allow $360 \\div 16 = 22.5 \\rightarrow 22$ benches. The bolts bind, so revenue is $22 \\times 45 = \\$990$. The traps: $\\$1{,}125$ prices the board-only limit ($25 \\times 45$), ignoring the binding constraint. $\\$1{,}035$ prices the rounded-UP count ($23 \\times 45$). $\\$22$ is the bench count itself dressed as dollars. Full chain: both constraints, round down, then convert to the asked-for units — three separate places to lose the point.'
    }
  ]
};
