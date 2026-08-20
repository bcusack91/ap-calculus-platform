export const lessonData = {
  topicSlug: 'sat-data-statistics-advanced',
  sections: [
    {
      id: 'ds-adv-p1-intro',
      type: 'text' as const,
      content: `# Data & Statistics: The 700-800 Patterns

**Part 1 of 3 — The Archetypes Hard-Tier Items Are Built From**

This topic is **reading two-way tables and drawing rates out of them**. The arithmetic is division. The difficulty is entirely in choosing the denominator, and every hard item is engineered so that the wrong denominators are also available as answer choices.

### Archetype 1: The Denominator Decides

Any single cell in a two-way table supports **three completely different percentages**. Take the cell 92 in a table whose row total is 240, column total is 272, and grand total is 660:

| Phrasing | Denominator | Value |
|---|---|---|
| "of **all** respondents" | grand total 660 | 13.9% |
| "of respondents **in the 35-54 group**" | row total 240 | 38.3% |
| "of respondents **who disapproved**" | column total 272 | 33.8% |

Same numerator, three answers. Hard items exploit this by pairing a correct number with the wrong phrasing, or by asking two of the three in one question and shuffling them.

**The rule:** the phrase immediately after "of" names the group you have been restricted to, and that group's total is your denominator. Circle it before you divide.

### Archetype 2: Rate Comparison Across Rows

"For each grade, the bus rate is the number of students in that grade who take the bus divided by the number of students in that grade. By how many percentage points does Grade 9 exceed Grade 11?"

Each group's rate uses **its own row total** — never a shared denominator. That is the whole point: comparing $\\frac{84}{500}$ to $\\frac{40}{500}$ is not a comparison of rates, it is a comparison of counts wearing a percent sign.

Watch for two variants:
- **"Percentage points" vs. "times."** A difference of rates is measured in percentage points; a ratio of rates is "how many times." Compute the one asked.
- **Adjusted denominators.** "The pass rate **among students who were not absent**" means you must subtract the absent column from each row total first. The unadjusted rate is always an answer choice, and it always ranks the groups differently.

### Archetype 3: Missing Cells

Roughly a third of hard items hide one or two entries behind a question mark. Recovering them is mechanical, but the order matters: use whichever margin has only **one** unknown in it. Then **check the recovered value against the other margin** — a table that does not reconcile means you made an arithmetic slip, and you would rather find it in five seconds than after computing a percent from it.`
    },
    {
      id: 'ds-adv-p1-scale',
      type: 'text' as const,
      content: `### Archetype 4: Scaling a Sample to a Population

"The 800 people surveyed are representative of the company's 12,000 customers. Estimate the number of customers ages 35 and over who prefer the website."

The one rule that decides these:

> **The rate's denominator must match the population you are scaling.**

- Estimating over the **whole** population? The rate must come from the **whole** sample: $\\frac{\\text{cell}}{\\text{grand total}} \\times \\text{population}$.
- Estimating within a **subgroup** ("the 450 parents surveyed were drawn from 6,300 parents in the district")? The rate must be computed **inside that row**: $\\frac{\\text{cell}}{\\text{row total}} \\times \\text{subgroup population}$.

Mixing them is the signature error of this archetype, and the item is built so that the mismatch produces a plausible-looking number. If you scale a within-row rate by the entire population, you overestimate wildly; if you scale a whole-sample rate by a subgroup, you underestimate.

Two further variants:

- **Apply a stated rate to a new group.** "All 300 Premium subscribers will move to the Plus plan; if the resulting 750 renew at the current **Plus** rate..." — use the Plus row's rate, not the Premium row's, and not the overall rate. The whole item is a test of reading which group's rate was specified.
- **Growth between two years.** Scale the same cell rate to both population sizes and **subtract**. Both intermediate counts will be on the menu.

### Archetype 5: "Which Statement Is Supported?"

Four claims, each of which requires a different denominator or a count-versus-rate judgment. Do not evaluate all four fully. Scan for the fastest disqualifier:

- A claim that reads a raw count as a rate ("more students improved with Y, so Y worked better") is wrong whenever the groups differ in size.
- A claim that reverses a conditional ("of the frequent visitors, most were teens" vs. "most teens visit frequently") is wrong unless you check the right margin.
- A claim with a numeric comparison ("more than three times") is often true of the raw counts and false of the rates. That is exactly why it is there.`
    },
    {
      id: 'ds-adv-p1-q1',
      type: 'quiz' as const,
      question: 'The table shows the preferred viewing format of 900 moviegoers, by age group.\n\n| | Standard | 3D | IMAX | Total |\n|---|---|---|---|---|\n| Under 18 | 96 | 84 | 60 | 240 |\n| 18 to 39 | 150 | 96 | 114 | 360 |\n| 40 and over | 174 | 60 | 66 | 300 |\n| Total | 420 | 240 | 240 | 900 |\n\nOf the moviegoers who prefer IMAX, what percent are ages 18 to 39, to the nearest tenth of a percent?',
      options: [
        '$12.7$',
        '$31.7$',
        '$47.5$',
        '$52.5$'
      ],
      correctAnswer: 2,
      explanation: 'The phrase "of the moviegoers who prefer IMAX" restricts the group to the IMAX column, whose total is 240. Of those, 114 are ages 18 to 39, so the answer is $114/240 = 47.5$ percent. Choice B uses the row total 360, which answers the reversed conditional: what percent of 18-to-39-year-olds prefer IMAX. Choice A uses the grand total 900, answering what percent of all moviegoers are both 18 to 39 and prefer IMAX. Choice D is the complement, $126/240$, the percent of IMAX viewers outside that age group.'
    },
    {
      id: 'ds-adv-p1-q2',
      type: 'quiz' as const,
      question: 'The table shows training status for 1,000 employees at a company.\n\n| | Completed | In progress | Not started | Total |\n|---|---|---|---|---|\n| Sales | 168 | 72 | 60 | 300 |\n| Support | 154 | 126 | 70 | 350 |\n| Engineering | 189 | 105 | 56 | 350 |\n| Total | 511 | 303 | 186 | 1000 |\n\nFor each department, the completion rate is the number of employees in that department who completed the training divided by the number of employees in that department. By how many percentage points does the Sales completion rate exceed the Support completion rate?',
      options: [
        '$1.4$',
        '$2.7$',
        '$56.0$',
        '$12.0$'
      ],
      correctAnswer: 3,
      explanation: 'Each rate uses its own row total. Sales: $168/300 = 56.0$ percent. Support: $154/350 = 44.0$ percent. The difference is $56.0 - 44.0 = 12.0$ percentage points. Choice A divides both counts by the grand total 1,000, giving 16.8 percent and 15.4 percent; a shared denominator turns the comparison of rates back into a comparison of counts, which is precisely what the question forbids. Choice B divides both by the Completed column total 511, which answers "of the employees who completed training, what share came from each department." Choice C is the Sales rate alone, the intermediate value.'
    },
    {
      id: 'ds-adv-p1-q3',
      type: 'quiz' as const,
      question: 'The table shows 740 orders by channel and status. One entry is missing.\n\n| | Shipped | Processing | Cancelled | Total |\n|---|---|---|---|---|\n| Phone | 96 | 45 | ? | 165 |\n| Online | 288 | 110 | 42 | 440 |\n| In store | 84 | 35 | 16 | 135 |\n| Total | 468 | 190 | 82 | 740 |\n\nOf the orders that were cancelled, what percent were placed by phone, to the nearest tenth of a percent?',
      options: [
        '$29.3$',
        '$14.5$',
        '$3.2$',
        '$70.7$'
      ],
      correctAnswer: 0,
      explanation: 'The Phone row has only one unknown, so the missing cell is $165 - 96 - 45 = 24$; it checks against the Cancelled column, $24 + 42 + 16 = 82$. The restriction is to cancelled orders, so the denominator is the column total 82: $24/82 = 29.3$ percent. Choice B uses the Phone row total 165, the reversed conditional — what percent of phone orders were cancelled. Choice C uses the grand total 740, answering what share of all orders were both by phone and cancelled. Choice D is the complement, the percent of cancelled orders placed through other channels.'
    }
  ]
};
