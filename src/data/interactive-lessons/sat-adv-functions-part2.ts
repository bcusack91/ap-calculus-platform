export const lessonData = {
  topicSlug: 'sat-functions-advanced',
  sections: [
    {
      id: 'fn-adv-p2-traps',
      type: 'text' as const,
      content: `# Functions: Traps & Speed

**Part 2 of 3 — The Four Species of Wrong Answer**

Hard function items are not written by adding hard arithmetic. They are written by taking a correct multi-step solution and **turning each intermediate step into an answer choice**. Learn the four species and you can often eliminate three options before finishing the algebra.

### Species 1: The Intermediate Value (the big one)

Roughly two of every three hard function items plant the value you compute one step before the end.

| The question asks for | The planted intermediate |
| --- | --- |
| minutes | the number of pages / gallons / bottles |
| cases shipped | the number of pallets |
| milligrams per dose | the milligrams per day |
| the amount **over budget** | the total cost |
| elapsed time between two events | the second event's time |
| seconds | the radius, then the area |

**The habit that beats it:** before you click, say the units of your number out loud and compare them with the last four words of the stem. "$20$ pallets" versus "how many CASES" is a mismatch you can catch in two seconds.

A special case worth its own line: **the "additional / more than / exceeds" ask.** When a stem ends with "by how much does it exceed," "how many MORE," or "how many additional," you have one subtraction left after the number that feels final.

### Species 2: The Dropped Fixed Fee

Any model of the form $f(x) = mx + b$ in context is an invitation. Divide the *whole* output by $m$ and you get a clean-looking wrong answer every time.

- Correct: $\\$83.36 = 0.992m + 4 \\Rightarrow 0.992m = 79.36 \\Rightarrow m = 80$.
- Planted: $83.36 \\div 0.992 = 84.0$.

Note how *reasonable* $84$ looks. Fixed fees must be stripped **before** any division.

### Species 3: The Wrong-Rate Division

You correctly isolate a quantity, then divide by a rate from the wrong link of the chain: dollars divided by miles-per-gallon, leftover cost divided by trays-per-hour, budget divided by liters-per-bottle instead of dollars-per-bottle. Every one of these produces a plausible number in impossible units. **Cancel units in the division**, not just the numbers.

### Species 4: Direction Errors on Inverses and Transformations

Applying $g$ forward when the situation calls for $g^{-1}$; shifting left when the story says the second thing started *later*; stretching when the rule says $f(2x)$; inverting a composition without reversing the order; multiplying by an exchange rate when the conversion required dividing.

**The size check catches almost all of these.** If a euro is worth more than a dollar, the dollar figure must be bigger. If the second plant was sown later, it must be shorter at time $t$ (before its $20\\%$ advantage is applied). If a compression pulls points toward the $y$-axis, the $x$-coordinate must shrink.`
    },
    {
      id: 'fn-adv-p2-speed',
      type: 'text' as const,
      content: `### Speed Techniques

**1. Collapse the rate chain into one constant.** Do not compute step by step through a three-rate stem. Multiply the rates together first and watch for the arithmetic gift the writers hide there.

> $1.5$ scoops per minute, $0.8$ kilogram per scoop, $\\$1.25$ per kilogram.

Note $0.8 \\times 1.25 = 1$ exactly, so the whole chain collapses to $\\$1.50$ per minute and the inequality $1.5t \\le 60$ is a mental calculation. Hard items are *built* around such collapses; if the numbers look ugly, you probably multiplied in the wrong order.

**2. Outside-in for compositions, inside-out for evaluations.** If the equation is $f(g(x)) = k$, start at the outer function and read the table backward. If the expression is $g(f(3))$, start inside. Choosing the wrong direction is what produces the swapped-intermediate distractors.

**3. On "which expression" items, track units, not algebra.** For $g(f(1250)) - g(f(900))$: $f$ outputs gallons, $g$ turns gallons into dollars, and a difference of two dollar amounts is dollars. That single pass eliminates every choice that ends in gallons or in a per-unit rate.

Then apply the **proportionality check**: unless the stem says $f$ and $g$ are proportional, $g(f(1250)) - g(f(900))$ is **not** $g(f(350))$. A setup fee or bulk discount breaks it. "The cost of the paint for $350$ square feet" is the most attractive wrong answer on the whole test for this archetype.

**4. Discrete quantities round UP, boundary values are excluded.** Spools, buses, and shifts come in whole units: $4.85$ spools means buy $5$. Both $4$ (rounded down) and $4.85 \\times \\text{price}$ (fractional spool) will be options.

And when a stem says **fewer than** or **more than**, the boundary is *not* the answer. If $\\frac{300}{4 + 2d} < 25$ gives $d > 4$, then day $4$ — where the job takes exactly $25$ hours — is planted, and the answer is day $5$.

**5. Budget your time by the number of links.** A two-link chain should take $60$ seconds; a three-link chain with a unit conversion, about $90$. If you are past two minutes, you have almost certainly mis-ordered the chain — rewrite it with units and restart rather than pushing forward.`
    },
    {
      id: 'fn-adv-p2-q1',
      type: 'quiz' as const,
      question: 'The table gives values of the function $f$: $f(-1) = 8$, $f(0) = 5$, $f(1) = 1$, $f(2) = -2$, $f(3) = 6$, $f(4) = 9$. The function $g$ is defined by $g(x) = f(3x) - 4$. For what value of $x$ does $g(x) = 2$?',
      options: [
        '$1$',
        '$2$',
        '$3$',
        '$9$'
      ],
      correctAnswer: 0,
      explanation: 'From $g(x) = 2$: $f(3x) - 4 = 2$, so $f(3x) = 6$. The table gives $f(3) = 6$, so $3x = 3$ and $x = 1$. The traps: $3$ is the value of $3x$ — the intermediate that still has to be divided by $3$, and the most-chosen wrong answer. $9$ comes from reading the rule as $g(x) = f\\left(\\frac{x}{3}\\right) - 4$, treating the horizontal compression as a stretch. $2$ comes from ignoring $f$ entirely and solving $3x - 4 = 2$.'
    },
    {
      id: 'fn-adv-p2-q2',
      type: 'quiz' as const,
      question: 'A recording studio charges $C(h) = 45 + 30h$ dollars for a session lasting $h$ hours, where the $\\$45$ is a fixed engineer\'s fee. An arts grant reimburses $35$ percent of whatever the studio charges. After the reimbursement, a musician\'s out-of-pocket cost for one session was $\\$126.75$. How many hours long was the session?',
      options: [
        '$195$',
        '$2.725$',
        '$5$',
        '$10.6$'
      ],
      correctAnswer: 2,
      explanation: 'Out-of-pocket is $65$ percent of the charge: $0.65(45 + 30h) = 126.75$. Divide by $0.65$: $45 + 30h = 195$, so $30h = 150$ and $h = 5$ hours. The traps: $195$ is the studio\'s full CHARGE in dollars — the intermediate value, not a number of hours. $10.6$ divides by the complement $0.35$ instead of $0.65$, giving $126.75 \\div 0.35 = 362.14$ and then $(362.14 - 45) \\div 30$. $2.725$ ignores the reimbursement entirely and solves $45 + 30h = 126.75$.'
    },
    {
      id: 'fn-adv-p2-q3',
      type: 'quiz' as const,
      question: 'A museum uses two functions: $n(d)$ gives the number of visitors on day $d$, and $r(v)$ gives the total revenue, in dollars, produced by $v$ visitors. Neither function is assumed to be proportional, because the museum receives a fixed daily operating credit. Which of the following best describes what $r(n(30)) - r(n(12))$ represents?',
      options: [
        'The number of additional visitors on day $30$ compared with day $12$',
        'The revenue, in dollars, produced by $18$ visitors',
        'The average revenue, in dollars, per visitor over that period',
        'The additional revenue, in dollars, produced on day $30$ compared with day $12$'
      ],
      correctAnswer: 3,
      explanation: '$n(30)$ and $n(12)$ are visitor counts; applying $r$ to each converts them to dollar amounts, and a difference of two dollar amounts is a difference in revenue. The traps: the first option stops one link early — that would be $n(30) - n(12)$, measured in visitors, not dollars. The second option is the signature distractor for this archetype: it would require $r$ and $n$ to be directly proportional, and the stem explicitly mentions a fixed daily credit, so $r(n(30)) - r(n(12))$ need not equal the revenue from $18$ visitors. The third option describes a quotient, not a difference.'
    }
  ]
};
