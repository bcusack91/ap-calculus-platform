export const lessonData = {
  topicSlug: 'sat-exponents-radicals-advanced',
  sections: [
    {
      id: 'expr-adv-p2-traps',
      type: 'text' as const,
      content: `# Exponents & Radicals: Traps & Speed

**Part 2 of 3 — Distractor Autopsy and Faster Routes**

Hard-tier exponent items are graded on a single skill: **not stopping early, and not stopping late**. Here are the five distractor species, in the order they appear most often.

### Species 1: The Intermediate Value

The most common wrong answer in this entire topic is a number that is genuinely correct — just not the one asked for.

- Solve $4^{x} \\cdot 8^{x-1} = 32^{2}$ and you get $5x = 13$. Both $13$ and $\\frac{13}{5}$ are choices.
- Solve $x^{3} = 8y$ with $y = 2x$ and you get $x = 4$. The question asks for $y = 8$.
- Solve $\\sqrt{x+5} - \\sqrt{x} = 1$ and you get $\\sqrt{x} = 2$, then $x = 4$, then $x + 5 = 9$. **All three** are choices; the answer is $\\sqrt{x+5} = 3$.
- Find $k = 3$ in $Q = kd^{3/2}$, and $3$ is a choice.

**Countermeasure:** before you compute anything, underline the requested expression and write it at the top of your scratch space. Then the last line of your work has to match that symbol, not just be a number.

### Species 2: The Unit Trap in Scientific Notation

Every scientific-notation hard item plants the *other* unit as an answer.

- Bytes per day $\\rightarrow$ per second: the per-**minute** and per-**hour** answers are both choices.
- Meters $\\rightarrow$ kilometers: the correct number of **meters** is a choice.
- Grams $\\rightarrow$ kilograms: the answer that skipped the $\\times 10^{3}$ is a choice.

**Countermeasure:** do the unit conversion FIRST, in a separate line, before you touch the mantissas. $1$ day $= 8.64 \\times 10^{4}$ s. $1$ hour $= 3.6 \\times 10^{3}$ s. $1$ kg $= 10^{3}$ g. Write it down, then divide.

### Species 3: The Dropped Negative

$y^{-1/3} = 2$ does **not** give $y = 8$. The negative exponent means a reciprocal: $y^{1/3} = \\frac{1}{2}$, so $y = \\frac{1}{8}$. Both $8$ and $\\frac{1}{8}$ will be offered, as will the intermediates $2$ and $\\frac{1}{2}$.

### Species 4: The Kept Extraneous Root

Discussed in Part 1, and it is worth restating as a distractor rule: whenever a radical equation asks for the **sum** of the solutions, the sum-of-all-candidates is a choice and the sum-of-valid-ones is the answer.

### Species 5: The Illegal Radical Move

$\\sqrt{18} + \\sqrt{8} \\neq \\sqrt{26}$. Radicals add only after they are simplified to a **common radicand**: $3\\sqrt{2} + 2\\sqrt{2} = 5\\sqrt{2}$. The $\\sqrt{26}$ route and its follow-on both appear as choices, so students who make the error still find a home for their answer.`
    },
    {
      id: 'expr-adv-p2-speed',
      type: 'text' as const,
      content: `### Speed Techniques

**Convert every radical to a rational exponent immediately.** $\\frac{\\sqrt{x} \\cdot \\sqrt[3]{x^{2}}}{\\sqrt[6]{x}}$ looks like a puzzle and is actually $\\frac{1}{2} + \\frac{2}{3} - \\frac{1}{6}$ — one common denominator and you are done. Never manipulate radical signs when exponents will do the work.

**Work nested radicals from the inside out, one layer at a time.** $\\sqrt{6\\sqrt{6\\sqrt{6}}}$: innermost $6^{1/2}$; multiply by $6$ to get $6^{3/2}$; square-root to $6^{3/4}$; multiply by $6$ to get $6^{7/4}$; square-root to $6^{7/8}$. Each layer is "add $1$, then halve." The exponents from the middle layers ($\\frac{3}{4}$, $\\frac{7}{4}$) are all planted as answers, so count your layers.

**Conjugates: the denominator becomes an integer, always.** $(\\sqrt{a} - b)(\\sqrt{a} + b) = a - b^{2}$. After multiplying, the most-missed step is dividing the *whole* numerator by that integer — the un-divided numerator is a standing distractor.

**Look for the collapse.** Expressions like $\\frac{1}{\\sqrt{5}-2} - \\frac{1}{\\sqrt{5}+2}$ are built so the radicals cancel and an integer falls out. If your answer to a "what is the value of" item still has a radical in it, re-check: these items usually resolve cleanly.

**Recognize $a^{2} - b^{2}$ in exponent form.** $\\frac{4^{x} - 1}{2^{x} - 1} = \\frac{(2^{x})^{2} - 1}{2^{x} - 1} = 2^{x} + 1$. Factoring beats solving.

**Desmos note:** for a single-variable exponential equation, graph both sides and read the intersection — but only *after* you have identified what the question asks for. Desmos gives you $x$; the item usually wants $9^{x-3}$.`
    },
    {
      id: 'expr-adv-p2-q1',
      type: 'quiz' as const,
      question: 'What is the sum of all values of $x$ that satisfy $\\sqrt{5x + 11} = x + 1$?',
      options: [
        '$3$',
        '$5$',
        '$-2$',
        '$6$'
      ],
      correctAnswer: 1,
      explanation: 'Squaring gives $5x + 11 = x^{2} + 2x + 1$, so $x^{2} - 3x - 10 = 0$ and $(x-5)(x+2) = 0$, with candidates $x = 5$ and $x = -2$. Check in the ORIGINAL equation: at $x = 5$, $\\sqrt{36} = 6$ and $5 + 1 = 6$, valid; at $x = -2$, $\\sqrt{1} = 1$ but $-2 + 1 = -1$, so it is extraneous. The only solution is $5$, so the sum is $5$. The distractors: $3$ is the sum of BOTH candidates — the answer of someone who never checked. $-2$ is the extraneous root alone. $6$ is the common value of both sides at $x = 5$, not a solution.'
    },
    {
      id: 'expr-adv-p2-q2',
      type: 'quiz' as const,
      question: 'For positive $x$ and $y$, which of the following is equivalent to $\\left(\\frac{16x^{8}}{81y^{-4}}\\right)^{-3/4}$?',
      options: [
        '$\\frac{27}{8x^{6}y^{3}}$',
        '$\\frac{8x^{6}y^{3}}{27}$',
        '$\\frac{27y^{3}}{8x^{6}}$',
        '$\\frac{3}{2x^{2}y}$'
      ],
      correctAnswer: 0,
      explanation: 'The negative outer exponent flips the fraction first: $\\left(\\frac{81y^{-4}}{16x^{8}}\\right)^{3/4} = \\left(\\frac{81}{16x^{8}y^{4}}\\right)^{3/4}$, since $y^{-4}$ in the numerator moves down as $y^{4}$. Now $81^{3/4} = 27$, $16^{3/4} = 8$, $(x^{8})^{3/4} = x^{6}$, and $(y^{4})^{3/4} = y^{3}$, giving $\\frac{27}{8x^{6}y^{3}}$. The distractors: $\\frac{8x^{6}y^{3}}{27}$ applies the exponent correctly but never flips for the negative sign. $\\frac{27y^{3}}{8x^{6}}$ flips but leaves $y$ on the wrong side of the bar. $\\frac{3}{2x^{2}y}$ uses $81^{1/4} = 3$ and $16^{1/4} = 2$, taking the fourth root but dropping the cube.'
    },
    {
      id: 'expr-adv-p2-q3',
      type: 'quiz' as const,
      question: 'A single bacterium has a mass of $4 \\times 10^{-13}$ grams. Asked how many such bacteria have a combined mass of $2$ kilograms, a student computes $2 \\div \\left(4 \\times 10^{-13}\\right) = 5 \\times 10^{12}$. What went wrong?',
      options: [
        'Nothing went wrong; $5 \\times 10^{12}$ is correct.',
        'The exponents should have been added, giving $5 \\times 10^{-14}$.',
        'The kilograms were never converted to grams; the answer is $5 \\times 10^{15}$.',
        'The mantissas should have been multiplied, giving $8 \\times 10^{12}$.'
      ],
      correctAnswer: 2,
      explanation: 'The bacterium’s mass is in GRAMS but the target mass is in KILOGRAMS, so the division mixes units. Convert first: $2$ kg $= 2 \\times 10^{3}$ g, and $\\frac{2 \\times 10^{3}}{4 \\times 10^{-13}} = 0.5 \\times 10^{16} = 5 \\times 10^{15}$. The distractors name the other three ways to go wrong: calling $5 \\times 10^{12}$ correct is the unit trap itself, the exponent rule for division is subtraction (not addition), and dividing scientific notation divides the mantissas rather than multiplying them.'
    }
  ]
};
