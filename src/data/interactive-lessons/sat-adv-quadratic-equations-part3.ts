export const lessonData = {
  topicSlug: 'sat-quadratic-equations-advanced',
  sections: [
    {
      id: 'qa3-drill-intro',
      type: 'text' as const,
      content: `# Quadratic Equations: Timed Drill

**Part 3 of 3 — Four Questions at Full Difficulty**

Set a pace of about **75 seconds per question** — that is the real budget for a hard Module 2 item. For each question: identify the archetype in the first 10 seconds, pick the fast route (Vieta, symmetry, discriminant), and check that your final number answers the question actually asked before you click.

If you finish one early, spend the leftover seconds on the sanity check, not on the next question.`
    },
    {
      id: 'qa3-q1',
      type: 'quiz' as const,
      question: 'In the $xy$-plane, the line $y = 6x + c$ is tangent to the parabola $y = x^{2} + 2x + 7$. What is the value of $c$?',
      options: [
        '$-3$',
        '$2$',
        '$3$',
        '$15$'
      ],
      correctAnswer: 2,
      explanation: 'Set equal: $x^{2} + 2x + 7 = 6x + c$ gives $x^{2} - 4x + (7 - c) = 0$. Tangency: $16 - 4(7 - c) = 0$, so $16 = 28 - 4c$ and $c = 3$. (Check: $x^{2} - 4x + 4 = 0$ gives $x = 2$, where the parabola reads $4 + 4 + 7 = 15$ and the line reads $12 + 3 = 15$.) $2$ is the $x$-coordinate of the tangent point, $15$ is its $y$-coordinate, and $-3$ is the sign slip $16 = 28 + 4c$.'
    },
    {
      id: 'qa3-q2',
      type: 'quiz' as const,
      question: 'A theater charges $\\$12$ per ticket and sells $400$ tickets per night. For each $\\$1$ increase in price, it sells $20$ fewer tickets. What is the greatest possible nightly revenue, in dollars?',
      options: [
        '$16$',
        '$320$',
        '$4800$',
        '$5120$'
      ],
      correctAnswer: 3,
      explanation: 'With $n$ price increases, revenue is $(12 + n)(400 - 20n) = 4800 + 160n - 20n^{2}$, whose vertex is at $n = \\frac{160}{40} = 4$. Price becomes $\\$16$, tickets become $320$, and revenue is $16 \\times 320 = \\$5120$. The plants: $16$ is the optimal price, $320$ is the ticket count (both intermediates), and $4800$ is the CURRENT revenue $12 \\times 400$ — the value of the model at $n = 0$.'
    },
    {
      id: 'qa3-q3',
      type: 'quiz' as const,
      question: 'The equation $x^{2} - kx + 24 = 0$ has two positive integer solutions that differ by $2$. What is the value of $k$?',
      options: [
        '$2$',
        '$10$',
        '$11$',
        '$24$'
      ],
      correctAnswer: 1,
      explanation: 'By Vieta the roots multiply to $24$ and sum to $k$. Scan factor pairs of $24$: $(1,24)$, $(2,12)$, $(3,8)$, $(4,6)$ — only $4$ and $6$ differ by $2$. So $k = 4 + 6 = 10$. This is a 20-second factor-pair scan, not a quadratic-formula problem. $2$ is the difference itself, $11$ is the sum of the WRONG pair $(3,8)$, and $24$ is the product.'
    },
    {
      id: 'qa3-q4',
      type: 'quiz' as const,
      question: 'For how many integer values of $b$ does the equation $x^{2} + bx + 16 = 0$ have NO real solutions?',
      options: [
        '$7$',
        '$8$',
        '$15$',
        '$17$'
      ],
      correctAnswer: 2,
      explanation: 'No real solutions means $b^{2} - 64 < 0$, so $-8 < b < 8$. The integers strictly between $-8$ and $8$ are $-7, -6, \\ldots, 7$: that is $15$ values. $7$ counts only the positive ones (forgetting $b$ can be negative and zero), $17$ wrongly includes the endpoints $\\pm 8$ (where the discriminant is $0$ and there IS a real solution), and $8$ is an off-by-one count.'
    }
  ]
};
