export const lessonData = {
  topicSlug: 'sat-exponential-functions-advanced',
  sections: [
    {
      id: 'ea2-traps',
      type: 'text' as const,
      content: `# Exponential Functions: Traps & Speed

**Part 2 of 3 — Distractor Autopsy and Faster Routes**

### The Five Standard Distractors

1. **Percent remaining vs. percent decrease.** If $64\\%$ remains, the decrease is $36\\%$. The complement of the right answer is ALWAYS a choice on decay items.
2. **The linear split / linear stack.** $2.5\\%$ per month is not $30\\%$ per year (it is about $26.2\\%$, because each month's loss comes off a smaller base). $15\\%$ per two years is not $7.5\\%$ per year.
3. **Conversion run backward.** Rewriting $b^{t/4}$ requires the base $b^{1/4}$ (a root). Writing $(b^{4})^{t}$ multiplies the exponent instead of dividing — the reversed conversion is planted, usually as a suspiciously large percent.
4. **Off-by-one in periods.** "First exceeds," "first drops below": the last period BEFORE the crossing and the period AFTER it are both choices. Compute the boundary values and check which side of the threshold each sits on.
5. **The intermediate amount.** In half-life back-solving, the original amount and the answer to a neighboring time are planted.

### Speed Techniques

- **Powers of 2 recognition:** $256, 512, 1024, 2048, 4096 = 2^{8}$ through $2^{12}$. Ratios in doubling problems are always a clean power of 2 — find the exponent, never multiply forward step by step.
- **Step in half-lives, not years:** "$24$ years is $3$ half-lives before the $60$-year measurement" turns a two-stage computation into one multiplication by $2^{3}$.
- **Desmos exploit for thresholds:** graph $y = 250(1.06)^{x}$ and $y = 400$ and click the intersection; the first integer to the right of it is the answer. This kills off-by-one errors, but still verify the integer on both sides.
- **Compare-plans discipline:** compute each plan fully, label each number, and reread which quantity (a value, a loss, or a difference) the question wants. All three of the other quantities will be among the choices.`
    },
    {
      id: 'ea2-q1',
      type: 'quiz' as const,
      question: 'The amount of a chemical is modeled by $A(t) = 200(0.8)^{t}$ grams, with $t$ in hours. Asked "by what percent does the amount decrease over 2 hours," a student answers $64\\%$. What went wrong?',
      options: [
        'They treated the decay as linear and doubled $20\\%$',
        'They compounded three periods instead of two',
        'They reported the percent REMAINING instead of the percent decrease',
        'They used $0.2$ as the decay factor instead of $0.8$'
      ],
      correctAnswer: 2,
      explanation: 'Over 2 hours the amount is multiplied by $(0.8)^{2} = 0.64$ — so $64\\%$ REMAINS, and the decrease is $100\\% - 64\\% = 36\\%$. The complement trap is the single most common exponential-decay distractor: the computation is right, but it answers the opposite question. (The linear-doubling error would give $40\\%$, a different planted choice.)'
    },
    {
      id: 'ea2-q2',
      type: 'quiz' as const,
      question: 'A car loses $2.5\\%$ of its value each month. A student claims it loses $30\\%$ per year. Why is $30\\%$ wrong?',
      options: [
        'Each month\'s $2.5\\%$ is taken from a smaller base, so the true annual loss is about $26.2\\%$ — less than the linear stack',
        'Compounding accelerates decay, so the true annual loss is more than $30\\%$',
        'The true loss is $73.8\\%$, the complement of the student\'s answer',
        'The student should have used $13$ months, since the first month counts twice'
      ],
      correctAnswer: 0,
      explanation: 'The monthly factor is $0.975$, and $(0.975)^{12} \\approx 0.738$, so about $26.2\\%$ is lost — LESS than $2.5 \\times 12 = 30\\%$. For decay, compounding always loses less than the linear stack because each percent comes off an already-shrunken value. (For growth it is the reverse: compounding gains MORE than the linear stack.) Knowing the direction of the error lets you eliminate half the choices without computing.'
    },
    {
      id: 'ea2-q3',
      type: 'quiz' as const,
      question: 'A student rewrites $f(t) = 500(1.3)^{t/4}$ as $f(t) = 500(1.3^{4})^{t}$ to find the per-unit growth rate. What is the verdict?',
      options: [
        'Correct — exponent rules allow regrouping $t/4$ as $4t$',
        'Wrong — the base should be $(1.3)^{1/4}$; they multiplied the exponent instead of dividing',
        'Wrong — the coefficient $500$ must also be raised to the fourth power',
        'Wrong — the base should be $0.3$, the growth part alone'
      ],
      correctAnswer: 1,
      explanation: 'Since $\\frac{t}{4} = \\frac{1}{4} \\cdot t$, the correct regrouping is $\\left[(1.3)^{1/4}\\right]^{t} \\approx (1.0678)^{t}$ — about $6.8\\%$ per unit of $t$. The student\'s version, $(1.3^{4})^{t} = (2.8561)^{t}$, is the conversion run backward and wildly overstates the growth. Quick check: $t/4$ makes growth SLOWER per unit $t$ than $1.3$, so the correct per-unit base must be smaller than $1.3$.'
    }
  ]
};
