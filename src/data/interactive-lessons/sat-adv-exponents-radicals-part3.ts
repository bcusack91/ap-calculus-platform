export const lessonData = {
  topicSlug: 'sat-exponents-radicals-advanced',
  sections: [
    {
      id: 'expr-adv-p3-intro',
      type: 'text' as const,
      content: `# Exponents & Radicals: Timed Drill

**Part 3 of 3 — Four Questions at Full Difficulty**

Pace yourself at about **90 seconds per question**. Run the same three-step loop on each one:

1. **Name the archetype in 10 seconds.** Common base? Factor the common power? Rational-exponent scaling? Radical equation? Unit conversion?
2. **Write the requested quantity at the top of your scratch work** — the literal symbol, not a description. $3^{x+2}$, not "the answer."
3. **Spend the last 10 seconds matching your final line to that symbol.** If your last line reads $x = 4$ and the top of your page reads $y$, you are one step from a planted wrong answer.

For any radical equation, the check is not optional — it is part of the solution.`
    },
    {
      id: 'expr-adv-p3-q1',
      type: 'quiz' as const,
      question: 'For $x > 0$, $\\dfrac{\\sqrt[3]{x^{4}} \\cdot \\sqrt{x}}{\\sqrt[6]{x}} = x^{k}$. What is the value of $k$?',
      options: [
        '$\\frac{11}{6}$',
        '$2$',
        '$\\frac{4}{3}$',
        '$\\frac{5}{3}$'
      ],
      correctAnswer: 3,
      explanation: 'Rewrite every radical as a rational exponent: $\\sqrt[3]{x^{4}} = x^{4/3}$, $\\sqrt{x} = x^{1/2}$, $\\sqrt[6]{x} = x^{1/6}$. Multiplying adds and dividing subtracts: $k = \\frac{4}{3} + \\frac{1}{2} - \\frac{1}{6} = \\frac{8}{6} + \\frac{3}{6} - \\frac{1}{6} = \\frac{10}{6} = \\frac{5}{3}$. The distractors: $\\frac{11}{6}$ is $\\frac{4}{3} + \\frac{1}{2}$, dropping the denominator entirely. $2$ ADDS the $\\frac{1}{6}$ instead of subtracting it — the sign error that division invites. $\\frac{4}{3}$ reads $\\sqrt[3]{x^{4}}$ as the whole expression.'
    },
    {
      id: 'expr-adv-p3-q2',
      type: 'quiz' as const,
      question: 'What is the value of $\\dfrac{1}{\\sqrt{7} + \\sqrt{5}} + \\dfrac{1}{\\sqrt{7} - \\sqrt{5}}$?',
      options: [
        '$\\sqrt{7}$',
        '$2\\sqrt{7}$',
        '$\\sqrt{5}$',
        '$\\frac{\\sqrt{7}}{6}$'
      ],
      correctAnswer: 0,
      explanation: 'Rationalize each term. The conjugate product is $(\\sqrt{7})^{2} - (\\sqrt{5})^{2} = 7 - 5 = 2$, so $\\frac{1}{\\sqrt{7}+\\sqrt{5}} = \\frac{\\sqrt{7}-\\sqrt{5}}{2}$ and $\\frac{1}{\\sqrt{7}-\\sqrt{5}} = \\frac{\\sqrt{7}+\\sqrt{5}}{2}$. Adding, the $\\sqrt{5}$ terms cancel: $\\frac{2\\sqrt{7}}{2} = \\sqrt{7}$. The distractors: $2\\sqrt{7}$ is the combined numerator with the division by $2$ forgotten. $\\sqrt{5}$ is what you get from SUBTRACTING the two rationalized forms (up to sign) instead of adding. $\\frac{\\sqrt{7}}{6}$ uses $7 + 5 = 12$ as the conjugate denominator, adding where the difference of squares subtracts.'
    },
    {
      id: 'expr-adv-p3-q3',
      type: 'quiz' as const,
      question: 'A ground station receives data from a satellite at a constant $7.2 \\times 10^{10}$ bits per hour. Which of the following is closest to that rate in bits per SECOND?',
      options: [
        '$1.2 \\times 10^{9}$',
        '$2 \\times 10^{7}$',
        '$2 \\times 10^{10}$',
        '$2.59 \\times 10^{14}$'
      ],
      correctAnswer: 1,
      explanation: 'One hour is $3600 = 3.6 \\times 10^{3}$ seconds, so the rate is $\\frac{7.2 \\times 10^{10}}{3.6 \\times 10^{3}} = 2 \\times 10^{7}$ bits per second. The distractors are the three neighboring units and operations: $1.2 \\times 10^{9}$ divides by $60$ and is the rate per MINUTE. $2 \\times 10^{10}$ divides by $3.6$ instead of $3.6 \\times 10^{3}$, a three-place exponent slip. $2.59 \\times 10^{14}$ MULTIPLIES by $3600$ — that is bits per hour scaled up, the reverse of the conversion.'
    },
    {
      id: 'expr-adv-p3-q4',
      type: 'quiz' as const,
      question: 'The equation $\\left(5^{x}\\right)^{x} \\cdot 5^{8} = 5^{6x}$ has two real solutions. What is the sum of those solutions?',
      options: [
        '$2$',
        '$4$',
        '$6$',
        '$8$'
      ],
      correctAnswer: 2,
      explanation: 'Combine the exponents: the left side is $5^{x^{2}+8}$ and the right side is $5^{6x}$, so $x^{2} + 8 = 6x$, giving $x^{2} - 6x + 8 = 0$ and $(x-2)(x-4) = 0$. The solutions are $2$ and $4$, so the sum is $6$. The distractors: $2$ is the smaller solution (and also the positive difference of the two), $4$ is the larger solution — both are the natural stopping points of the factoring — and $8$ is the PRODUCT of the solutions, which is also the constant term you can read straight off the equation.'
    }
  ]
};
