export const lessonData = {
  topicSlug: 'sat-probability-two-way-tables-advanced',
  sections: [
    {
      id: 'prob-adv-p1-intro',
      type: 'text' as const,
      content: `# Probability & Two-Way Tables: The 700-800 Patterns

**Part 1 of 3 — The Archetypes Hard-Tier Items Are Built From**

Every hard item in this bank reduces to one question: **what is the denominator?** The numerator is almost always sitting in plain sight. The entire difficulty is deciding which population the question has restricted you to.

Here is a table of the kind these items use — $500$ shelter animals by species and length of stay:

| | Under 1 year | 1 to 3 years | Over 3 years | Total |
|---|---|---|---|---|
| Cats | 96 | 74 | 40 | 210 |
| Dogs | 120 | 85 | 35 | 240 |
| Rabbits | 24 | 18 | 8 | 50 |
| **Total** | 240 | 177 | 83 | **500** |

### Archetype 1: The Three Denominators

One cell, $35$ dogs over 3 years, supports three completely different probabilities:

- **Joint** — "a randomly chosen animal is a dog AND has been here over 3 years": $\\frac{35}{500}$. Denominator is the grand total.
- **Conditional on the row** — "**given that** it is a dog, it has been here over 3 years": $\\frac{35}{240}$. Denominator is the dog total.
- **Conditional on the column** — "**given that** it has been here over 3 years, it is a dog": $\\frac{35}{83}$. Denominator is the over-3-years total.

All three are always in the options. The phrase **"given that"** — or "of the dogs," or "among those who…" — names your denominator.

### Archetype 2: The Reversed Conditional

$P(A \\mid B)$ and $P(B \\mid A)$ are different numbers built from the same cell. "Given that the animal is a cat, the probability it has been here over 3 years" is $\\frac{40}{210}$; "given that it has been here over 3 years, the probability it is a cat" is $\\frac{40}{83}$. Reading the condition off the wrong side of the sentence is the most common way strong students lose this question.

### Archetype 3: The Missing Entry

One cell is blank, and you recover it from the margins: a row must sum to its row total, a column to its column total. Fill it in, then answer the actual question — which is never "what is the missing entry."

### Archetype 4: Rate vs. Count

"Which group has the **greatest number** who prefer tea" and "which group has the **greatest proportion** who prefer tea" usually have different answers, because the groups are different sizes. The largest group almost always supplies the largest raw count, and that is exactly the trap.

### Archetype 5: The Complement Group

"Selected at random from those who do **not** prefer coffee" builds a new population that appears nowhere in the table. Compute it: grand total minus the coffee column, and the matching pieces of each row.`
    },
    {
      id: 'prob-adv-p1-q1',
      type: 'quiz' as const,
      question: `At an animal shelter, $240$ of the $500$ animals are dogs, and $35$ of those dogs have been at the shelter for over $3$ years. Across all species, $83$ animals have been at the shelter for over $3$ years. Given that an animal is a dog, what is the probability that it has been at the shelter for over $3$ years?`,
      options: ['$\\frac{35}{83}$', '$\\frac{35}{240}$', '$\\frac{35}{500}$', '$\\frac{83}{500}$'],
      correctAnswer: 1,
      explanation: `"Given that an animal is a dog" restricts the population to the $240$ dogs, so the probability is $\\frac{35}{240}$. The traps are the other two denominators the same numerator can take: $\\frac{35}{83}$ answers the REVERSED question ("given that it has been here over 3 years, is it a dog?"); $\\frac{35}{500}$ is the joint probability, which is what you would want if the stem said "a randomly chosen animal is a dog and has been here over 3 years"; $\\frac{83}{500}$ drops the dog condition altogether.`
    },
    {
      id: 'prob-adv-p1-q2',
      type: 'quiz' as const,
      question: `Using the same shelter data: $40$ of the $210$ cats have been at the shelter for over $3$ years, and $83$ of the $500$ animals in total have been there for over $3$ years. Given that an animal has been at the shelter for over $3$ years, what is the probability that it is a cat?`,
      options: ['$\\frac{40}{83}$', '$\\frac{40}{210}$', '$\\frac{40}{500}$', '$\\frac{210}{500}$'],
      correctAnswer: 0,
      explanation: `Here the condition is the length of stay, so the population is the $83$ animals that have been there over $3$ years, giving $\\frac{40}{83}$. Compare this with the previous question deliberately: the same kind of cell, but the condition sits on the other side of the sentence. $\\frac{40}{210}$ is the reversed conditional — "given that it is a cat, has it been here over 3 years?" — and is the single most attractive wrong answer; $\\frac{40}{500}$ is the joint probability; $\\frac{210}{500}$ is the marginal probability of being a cat, ignoring the condition entirely.`
    },
    {
      id: 'prob-adv-p1-q3',
      type: 'quiz' as const,
      question: `At a competition, Country X won $60$ medals in total: $24$ gold, $18$ silver, and the rest bronze. Across all countries, $69$ bronze medals were awarded out of $180$ medals overall. What fraction of all the bronze medals were won by Country X?`,
      options: ['$\\frac{18}{69}$', '$\\frac{18}{60}$', '$\\frac{18}{180}$', '$\\frac{69}{180}$'],
      correctAnswer: 0,
      explanation: `First recover the missing cell from the row: Country X's bronze count is $60 - 24 - 18 = 18$. The question asks what fraction of the BRONZE medals those represent, so the denominator is the $69$ bronze medals: $\\frac{18}{69}$. The traps: $\\frac{18}{60}$ uses Country X's own total, answering "what fraction of Country X's medals were bronze" — the reversed conditional; $\\frac{18}{180}$ uses the grand total, giving the joint probability; $\\frac{69}{180}$ is the overall share of medals that were bronze, which ignores Country X.`
    }
  ]
}
