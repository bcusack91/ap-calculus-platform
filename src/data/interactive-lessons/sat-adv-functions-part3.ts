export const lessonData = {
  topicSlug: 'sat-functions-advanced',
  sections: [
    {
      id: 'fn-adv-p3-intro',
      type: 'text' as const,
      content: `# Functions: Timed Drill

**Part 3 of 3 — Four Questions at Full Difficulty**

Work at about **90 seconds per question** — the realistic budget for a hard Module 2 function item. For each one, run the same three-beat routine:

1. **Ten seconds:** name the archetype (rate chain, table reversal, transformation, inverse order) and write the chain with units.
2. **Sixty seconds:** compute, keeping every intermediate labeled with its units.
3. **Twenty seconds:** re-read the final sentence and confirm your number wears the units it asks for. If your value appears among the choices in the *wrong* units, that is confirmation you built the right chain — and a warning that the trap is one step behind you.

Do not look at the answer choices before step 2. On these items the choices are engineered to make each intermediate feel like a destination.`
    },
    {
      id: 'fn-adv-p3-q1',
      type: 'quiz' as const,
      question: 'A reservoir is drained so that the volume of water remaining, in gallons, $t$ hours after draining begins is $V(t) = 12{,}000 - 800t$. The depth of the water, in feet, when the volume is $V$ gallons is $d(V) = \\frac{V}{2{,}400}$. How many MINUTES after draining begins does the depth reach $2.5$ feet?',
      options: [
        '$7.5$',
        '$450$',
        '$828$',
        '$6{,}000$'
      ],
      correctAnswer: 1,
      explanation: 'A depth of $2.5$ feet means $\\frac{V}{2400} = 2.5$, so $V = 6{,}000$ gallons. Then $12000 - 800t = 6000$ gives $800t = 6000$ and $t = 7.5$ hours, which is $7.5 \\times 60 = 450$ minutes. The traps: $7.5$ is the time in HOURS — the natural end of the algebra, one conversion short of the ask. $6{,}000$ is the volume in gallons, an earlier intermediate. $828$ comes from reciprocating the depth relationship, computing $V = 2400 \\div 2.5 = 960$ instead of $2400 \\times 2.5$, which gives $t = 13.8$ hours.'
    },
    {
      id: 'fn-adv-p3-q2',
      type: 'quiz' as const,
      question: 'A fabrication shop\'s laser cutter uses coolant at a rate of $22$ milliliters per hour of cutting. Coolant is sold only in sealed $1.5$-liter bottles at $\\$34$ each, and an opened bottle cannot be carried over to the next month. The shop has $190$ hours of cutting scheduled for next month. What is the shop\'s coolant cost, in dollars, for next month?',
      options: [
        '$68$',
        '$94.76$',
        '$102$',
        '$4{,}180$'
      ],
      correctAnswer: 2,
      explanation: 'Coolant needed: $190 \\times 22 = 4{,}180$ milliliters, or $4.18$ liters. Bottles needed: $4.18 \\div 1.5 = 2.79$, and since bottles are sealed and cannot be carried over, the shop must buy $3$. Cost: $3 \\times 34 = \\$102$. The traps: $4{,}180$ is the milliliters of coolant, an intermediate in the wrong units. $68$ rounds $2.79$ DOWN to $2$ bottles, which would leave the month\'s cutting unfinished. $94.76$ pays for a fractional bottle, $2.787 \\times 34$, ignoring that bottles are sold whole.'
    },
    {
      id: 'fn-adv-p3-q3',
      type: 'quiz' as const,
      question: 'The function $f$ is invertible, with $f(1) = 4$, $f(2) = 9$, $f(3) = 15$, $f(4) = 21$, and $f(5) = 30$. The function $g$ is defined by $g(x) = f^{-1}(x - 6)$. What is the value of $g(21)$?',
      options: [
        '$-2$',
        '$4$',
        '$15$',
        '$3$'
      ],
      correctAnswer: 3,
      explanation: 'Evaluate the inside first: $21 - 6 = 15$. Then $g(21) = f^{-1}(15)$, and since $f(3) = 15$, the answer is $3$. The traps: $15$ is the value of the inner expression $x - 6$, the intermediate handed to $f^{-1}$. $4$ ignores the $-6$ and computes $f^{-1}(21) = 4$ — dangerously plausible because $21$ is a table value. $-2$ applies the shift on the outside instead of the inside, computing $f^{-1}(21) - 6 = 4 - 6$.'
    },
    {
      id: 'fn-adv-p3-q4',
      type: 'quiz' as const,
      question: 'The function $h(t)$ gives the height, in centimeters, of a tomato seedling $t$ weeks after it was sown. A seedling of a second variety was sown $3$ weeks later than the first. At every corresponding age, the second variety is $15$ percent shorter than the first. Which function gives the height of the SECOND seedling $t$ weeks after the FIRST one was sown?',
      options: [
        '$0.85h(t - 3)$',
        '$0.85h(t + 3)$',
        '$h(0.85t - 3)$',
        '$0.85h(t) - 3$'
      ],
      correctAnswer: 0,
      explanation: 'At time $t$ measured from the first sowing, the second seedling has been growing for $t - 3$ weeks, so a plant of the first variety at that age would be $h(t - 3)$ tall. Being $15$ percent shorter scales the OUTPUT by $0.85$, giving $0.85h(t - 3)$. The traps: $0.85h(t + 3)$ shifts the wrong way, treating the later-sown plant as older rather than younger. $h(0.85t - 3)$ applies the $15$ percent to the input (time) instead of the output (height) — an inside-versus-outside error. $0.85h(t) - 3$ turns the $3$-week delay into a $3$-centimeter height reduction, confusing a horizontal shift with a vertical one.'
    }
  ]
};
