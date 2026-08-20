export const lessonData = {
  topicSlug: 'sat-exponents-radicals-advanced',
  sections: [
    {
      id: 'expr-adv-p1-intro',
      type: 'text' as const,
      content: `# Exponents & Radicals: The 700-800 Patterns

**Part 1 of 3 — The Archetypes Hard-Tier Items Are Built From**

Easy exponent questions ask you to simplify. Hard ones hide a **conversion step** in front of the simplification, then ask for a quantity you were never solving for. Five archetypes cover nearly the entire hard bank.

### Archetype 1: Force a Common Base

Every equation with unequal bases — $9$ and $27$, $4$ and $8$ and $32$, $\\frac{1}{3}$ and $9$ — is really one base in disguise. Rewrite both sides as powers of the smallest base, then **equal bases force equal exponents**.

$9^{2x-1} = 27^{x+2} \\;\\Rightarrow\\; 3^{4x-2} = 3^{3x+6} \\;\\Rightarrow\\; 4x - 2 = 3x + 6$

Two conversion errors are planted every time: converting **neither** side (setting $2x-1 = x+2$) and converting **only one** side. Both produce a clean-looking integer that sits in the choices.

Reciprocals are just negative exponents: $\\left(\\frac{1}{3}\\right)^{2x} = 3^{-2x}$. Drop that minus sign and you land exactly on a distractor.

### Archetype 2: Factor Out the Common Power

When powers are **added or subtracted**, you cannot combine exponents — you factor.

$3^{x+1} + 3^{x} = 3^{x}(3 + 1) = 4 \\cdot 3^{x}$

So $3^{x+1} + 3^{x} = 108$ gives $3^{x} = 27$ in one line. The same move handles $\\frac{2^{n+3} - 2^{n}}{2^{n-1}}$: factor $2^{n}$ out of the top, write the bottom as $\\frac{2^{n}}{2}$, and the variable cancels completely. Any expression that is "the same for every $n$" is a factor-and-cancel item.

### Archetype 3: Rational Exponents Are Scaling Rules

$S = kV^{2/3}$ and $Q = kd^{3/2}$ are not formulas to memorize — they are instructions for what happens when the input is multiplied.

If $V$ triples, then $S$ is multiplied by $3^{2/3}$. If $d$ is multiplied by $4$, then $Q$ is multiplied by $4^{3/2} = 8$. The exponent goes on the **factor**, not on the answer.

The signature trap is the **inverted exponent**: $3^{3/2}$ offered next to $3^{2/3}$. Read the exponent, then read it again.`
    },
    {
      id: 'expr-adv-p1-arch45',
      type: 'text' as const,
      content: `### Archetype 4: Radical Equations Manufacture Fake Solutions

Squaring both sides is not a reversible step. It can create solutions the original equation never had.

$\\sqrt{2x+7} = x - 4 \\;\\Rightarrow\\; x^{2} - 10x + 9 = 0 \\;\\Rightarrow\\; x = 1 \\text{ or } x = 9$

Check both: at $x = 9$, $\\sqrt{25} = 5$ and $9 - 4 = 5$. At $x = 1$, $\\sqrt{9} = 3$ but $1 - 4 = -3$. **A principal square root is never negative**, so $x = 1$ is extraneous.

Notice the design: the question asks for the **sum of all solutions**, so the answer for "never checked" ($1 + 9 = 10$) is a distinct choice from the answer for "checked" ($9$). You cannot skip verification and get lucky.

When two radicals appear, isolate one before squaring: $\\sqrt{x+5} = 1 + \\sqrt{x}$, square, and the cross term $2\\sqrt{x}$ leaves one radical to isolate again.

### Archetype 5: Simplify With Fractional and Negative Exponents

$\\left(\\frac{27a^{-6}}{8b^{9}}\\right)^{-2/3}$ is a four-step machine, and each step has a matching distractor.

1. **Negative outer exponent flips the whole fraction** first.
2. **Move negative exponents** across the bar as you flip — $a^{-6}$ in the bottom becomes $a^{6}$ on top.
3. **Apply the exponent to the coefficient too**: $8^{2/3} = 4$, not $8$. The denominator of the exponent is the root; the numerator is the power.
4. **Dividing by a negative power adds**: $\\frac{x^{4}}{x^{-1}} = x^{5}$, not $x^{3}$.

### The Question Behind the Question

Look at what the hard items actually ask for: not $x$, but $9^{x-3}$. Not $x$, but $y$. Not $x$, but $3^{x+2}$. Not the new stopping distance, but how many **more** feet. In every case the value you naturally produce first is a wrong answer choice. Circle the requested quantity before you start.`
    },
    {
      id: 'expr-adv-p1-q1',
      type: 'quiz' as const,
      question: 'If $8^{3x-2} = 16^{x+3}$, what is the value of $x$?',
      options: [
        '$\\frac{5}{2}$',
        '$\\frac{9}{8}$',
        '$\\frac{18}{5}$',
        '$18$'
      ],
      correctAnswer: 2,
      explanation: 'Convert to base $2$: $8^{3x-2} = 2^{9x-6}$ and $16^{x+3} = 2^{4x+12}$. Equal bases force $9x - 6 = 4x + 12$, so $5x = 18$ and $x = \\frac{18}{5}$. The distractors: $\\frac{5}{2}$ comes from skipping the conversion entirely and setting $3x - 2 = x + 3$; $\\frac{9}{8}$ converts only the left side ($9x - 6 = x + 3$); and $18$ is the value of $5x$, the intermediate result one division short of the answer.'
    },
    {
      id: 'expr-adv-p1-q2',
      type: 'quiz' as const,
      question: 'If $2^{x+2} + 2^{x} = 80$, what is the value of $2^{x+3}$?',
      options: [
        '$4$',
        '$16$',
        '$64$',
        '$128$'
      ],
      correctAnswer: 3,
      explanation: 'Factor the common power: $2^{x+2} + 2^{x} = 2^{x}(4 + 1) = 5 \\cdot 2^{x} = 80$, so $2^{x} = 16$ and $x = 4$. The question asks for $2^{x+3} = 2^{7} = 128$. The distractors are the three values you pass through on the way: $4$ is $x$ itself, $16$ is $2^{x}$, and $64$ is $2^{x+2}$ — one power short of what was requested.'
    },
    {
      id: 'expr-adv-p1-q3',
      type: 'quiz' as const,
      question: 'For a certain species of tree, the mass $M$ of the trunk is proportional to $h^{5/2}$, where $h$ is the tree’s height. If two trees have the same shape and one is $4$ times as tall as the other, the mass of the taller trunk is how many times the mass of the shorter?',
      options: [
        '$32$',
        '$4^{2/5}$',
        '$10$',
        '$1024$'
      ],
      correctAnswer: 0,
      explanation: 'Write $M = kh^{5/2}$. Replacing $h$ with $4h$ gives $k(4h)^{5/2} = 4^{5/2} \\cdot kh^{5/2}$, and $4^{5/2} = (\\sqrt{4})^{5} = 2^{5} = 32$. The distractors: $4^{2/5} \\approx 1.74$ inverts the exponent, the single most common rational-exponent error. $10$ multiplies $4$ by $\\frac{5}{2}$ instead of raising to it. $1024 = 4^{5}$ applies the power but ignores the square root in the denominator of the exponent.'
    }
  ]
};
