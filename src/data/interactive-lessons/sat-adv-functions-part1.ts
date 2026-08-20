export const lessonData = {
  topicSlug: 'sat-functions-advanced',
  sections: [
    {
      id: 'fn-adv-p1-intro',
      type: 'text' as const,
      content: `# Functions: The 700-800 Patterns

**Part 1 of 3 — The Archetypes Hard-Tier Items Are Built From**

At the 700-800 level, function questions are almost never "evaluate $f(3)$." They are **chains**: two or three rules stacked end to end, with the real difficulty living in *which link of the chain the question actually asks about*.

### Archetype 1: The Rate Chain (Composition in Disguise)

A stem gives you two or three rates in different units and never uses the word "composition."

> A press prints $45$ pages per minute. The cost of a job of $p$ pages is $f(p) = 0.08p + 12$, where $\\$12$ is a per-job setup fee. A job cost $\\$48$. **How many minutes** did the press run?

The chain is minutes $\\rightarrow$ pages $\\rightarrow$ dollars. Going backward: $0.08p + 12 = 48$ gives $p = 450$ pages, then $450 \\div 45 = 10$ minutes.

**Both intermediates are planted.** $450$ (pages) is a choice. So is $13\\frac{1}{3}$ — what you get if you forget the setup fee. So is $0.8$ — what you get if you divide the leftover $\\$36$ by the *page* rate $45$ instead of the *cost-per-minute* rate $3.6$.

**The discipline:** write the chain with units on one line before touching numbers — minutes ($\\times 45$) $\\rightarrow$ pages ($\\times 0.08$, then $+12$) $\\rightarrow$ dollars. Then read the last sentence of the stem and stop at the link it names — not at the link where the algebra felt finished.

### Archetype 2: Working Backward Through a Table

> $f(1) = 6$, $f(2) = 3$, $f(3) = 7$, $f(4) = 1$, $f(5) = 4$. If $g(x) = 2x - 1$ and $f(g(x)) = 4$, what is $x$?

Work **outside in**. $f(\\text{something}) = 4$ forces that something to be $5$, because $f(5) = 4$. So $g(x) = 5$, and $2x - 1 = 5$ gives $x = 3$.

The three planted errors, all present as choices:

- **$5$** — you found $g(x)$ and stopped. The single most common miss.
- **$9$** — you found that the $f$-input must be $5$, then applied $g$ *forward* ($g(5) = 9$) instead of undoing it.
- **$2.5$** — you ignored $f$ entirely and solved $2x - 1 = 4$.

The same structure appears with an inner transformation: if $g(x) = f(2x) + 3$ and $g(x) = 10$, then $f(2x) = 7$, the table gives $2x = 3$, and the answer is $x = 1.5$ — with $3$ sitting right there as a choice.`
    },
    {
      id: 'fn-adv-p1-transform',
      type: 'text' as const,
      content: `### Archetype 3: Transformations — Inside Changes Input, Outside Changes Output

Every hard transformation item tests the same two rules:

- **Inside the parentheses** affects $x$, and does the **opposite** of what it looks like. $f(x - 3)$ shifts **right** $3$. $f(2x)$ **compresses** horizontally by a factor of $2$ (points move toward the $y$-axis, so their $x$-coordinates get **halved**).
- **Outside** affects $y$, and does exactly what it looks like. $f(x) + 4$ shifts up $4$; $-f(x)$ reflects across the $x$-axis; $1.2f(x)$ makes every height $20\\%$ larger.

**The order trap.** "Translated $3$ right and $2$ down, then reflected across the $x$-axis" is *not* $-f(x - 3) - 2$. The reflection negates **everything already there**: $g(x) = -\\big[f(x - 3) - 2\\big] = -f(x - 3) + 2$.

If $f(1) = -4$, then $g(4) = -(-4) + 2 = 6$. The choice $-6$ is "reflection forgotten," and the choice $2$ is "reflected the $f$ term but left the shift alone."

**The word-problem version.** "A second plant was sown $5$ days later and is $20\\%$ taller at every corresponding age." Later planting $\\rightarrow$ it is *younger* at time $t$ $\\rightarrow$ inside becomes $t - 5$. Taller $\\rightarrow$ output scaling $\\rightarrow$ $1.2$ outside. Answer: $1.2h(t - 5)$. The wrong answers put the $20\\%$ inside ($h(1.2t - 5)$) or turn the $5$-day delay into a $5$-centimeter drop ($1.2h(t) - 5$).

### Archetype 4: Inverses and the Reversal Rule

If the forward chain is bicycles $\\rightarrow$ (apply $h$) $\\rightarrow$ hours $\\rightarrow$ (apply $c$) $\\rightarrow$ dollars, then dollars $= c(h(n))$. To go from a **budget** back to bicycles, undo the chain **in reverse order**: $n = h^{-1}\\big(c^{-1}(B)\\big)$.

Undo the *last* function first. The choice $c^{-1}(h^{-1}(B))$ has both inverses but the wrong order — it would require $B$ to be measured in hours. The choices without inverses run the chain forward and produce dollars, not bicycles.

For inverses with a shift, evaluate the inside first: if $g(x) = f^{-1}(x - 6)$ and $f(2) = 12$, then $g(18) = f^{-1}(12) = 2$. The choice $12$ is the inner value; the choice $f^{-1}(18) - 6$ moves the shift outside.`
    },
    {
      id: 'fn-adv-p1-q1',
      type: 'quiz' as const,
      question: 'An industrial oven bakes $20$ trays per hour. The function $f(n) = 0.45n + 25$ gives the cost, in dollars, of a batch of $n$ trays, where the $\\$25$ is a one-time firing charge per batch. One batch cost $\\$79$. For how many hours did the oven run on that batch?',
      options: [
        '$2.7$',
        '$6$',
        '$8.8$',
        '$120$'
      ],
      correctAnswer: 1,
      explanation: 'Chain: hours $\\rightarrow$ trays $\\rightarrow$ dollars. Solve $0.45n + 25 = 79$: $0.45n = 54$, so $n = 120$ trays, and $120 \\div 20 = 6$ hours. (Equivalently the oven costs $0.45 \\times 20 = \\$9$ per hour plus $\\$25$, so $9t + 25 = 79$ gives $t = 6$.) The traps: $120$ is the number of TRAYS — the intermediate the algebra naturally ends at, in the wrong units. $8.8$ drops the $\\$25$ firing charge, giving $79 \\div 0.45 = 175.6$ trays and $175.6 \\div 20 = 8.8$ hours. $2.7$ correctly removes the charge to get $\\$54$ but then divides by the TRAY rate $20$ instead of the cost-per-hour rate $9$.'
    },
    {
      id: 'fn-adv-p1-q2',
      type: 'quiz' as const,
      question: 'The graph of $y = f(x)$ passes through the points $(5, -3)$ and $(-3, 8)$. The graph of $f$ is translated $4$ units to the left and $1$ unit up, and the resulting graph is then reflected across the $x$-axis to produce the graph of $y = g(x)$. What is the value of $g(1)$?',
      options: [
        '$-9$',
        '$-2$',
        '$2$',
        '$4$'
      ],
      correctAnswer: 2,
      explanation: 'Left $4$ and up $1$ gives $y = f(x + 4) + 1$. Reflecting across the $x$-axis negates the whole expression: $g(x) = -\\big[f(x + 4) + 1\\big] = -f(x + 4) - 1$. Then $g(1) = -f(5) - 1 = -(-3) - 1 = 2$. The traps: $-2$ is $f(5) + 1$, the value after the translation with the reflection forgotten. $4$ reflects only the $f$ term and leaves the $+1$ positive, $-f(5) + 1$. $-9$ shifts in the wrong direction — using $f(x - 4)$ sends you to $f(-3) = 8$, giving $-8 - 1$.'
    },
    {
      id: 'fn-adv-p1-q3',
      type: 'quiz' as const,
      question: 'At a bakery, the function $p(c)$ gives the number of pounds of dough needed to make $c$ cakes, and the function $t(p)$ gives the number of minutes of mixer time needed to prepare $p$ pounds of dough. Both functions are increasing and invertible. The bakery has $M$ minutes of mixer time available tomorrow. Which expression gives the number of cakes the bakery can make?',
      options: [
        '$t(p(M))$',
        '$p(t^{-1}(M))$',
        '$t^{-1}(p^{-1}(M))$',
        '$p^{-1}(t^{-1}(M))$'
      ],
      correctAnswer: 3,
      explanation: 'Forward, cakes feed into $p$ to give pounds and pounds feed into $t$ to give minutes: $\\text{minutes} = t(p(c))$. To run that backward from a minute budget, undo the LAST function first: $t^{-1}(M)$ turns minutes into pounds, then $p^{-1}$ turns pounds into cakes, giving $p^{-1}(t^{-1}(M))$. The traps: $t^{-1}(p^{-1}(M))$ uses both inverses but in the wrong order — it treats $M$ as a number of pounds. $t(p(M))$ runs the chain forward and outputs minutes, not cakes. $p(t^{-1}(M))$ correctly converts minutes to pounds but then applies $p$ forward instead of $p^{-1}$, producing pounds of dough for $M$ cakes.'
    }
  ]
};
