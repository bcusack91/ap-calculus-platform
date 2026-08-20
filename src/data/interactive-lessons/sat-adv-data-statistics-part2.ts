export const lessonData = {
  topicSlug: 'sat-data-statistics-advanced',
  sections: [
    {
      id: 'ds-adv-p2-traps',
      type: 'text' as const,
      content: `# Data & Statistics: Traps & Speed

**Part 2 of 3 — The Distractor Species**

Every wrong answer in this topic is a **correct calculation of the wrong quantity**. That is what makes them dangerous: you never feel like you made a mistake. Learn to recognize them by name.

### Species 1: The Reversed Conditional

"Of the poetry readers, what percent are under 30?" and "Of the members under 30, what percent prefer poetry?" share a numerator and differ in denominator — column total versus row total. Both values appear in the choices, often as 39.6 and 16.4.

**Defense:** the group named right after "of" is the denominator. Write it down before dividing.

### Species 2: The Grand-Total Denominator

Dividing by the grand total answers "what share of **everyone** is in this cell." It is correct only when the question actually says "of all 620 employees." When a question restricts to a row or a column and you divide by the grand total anyway, the value is always too small — and always on the menu.

### Species 3: The Complement

$32/53$ instead of $21/53$. The arithmetic is flawless and the answer is the percentage of exactly the group you were **not** asked about. When your answer and one other choice sum to about 100 percent, re-read which side of the split the question wanted.

### Species 4: Count Instead of Rate

"144 participants improved with Treatment Y and only 126 with Treatment X, so Y is better." Y also had 50 more participants. Raw counts are comparable **only** when the group totals are equal, and hard items never make them equal. Whenever a claim rests on which number is bigger, convert both to rates before believing it.

The same species appears as **ratio of counts instead of ratio of rates**: $40/14 = 2.9$ when the true ratio of defect rates is $4.0$, because the two lines inspected different numbers of units.

### Species 5: The Mismatched Scaling

The population you are estimating and the rate you multiply by must describe the **same** group.

| Population being estimated | Correct rate |
|---|---|
| All 12,000 customers | cell ÷ grand total |
| The 6,300 parents in the district | cell ÷ parents row total |
| The 9,500 Location B customers | cell ÷ Location B row total |

Scaling a row rate by the whole population, or a whole-sample rate by one subgroup, is the built-in trap on every one of these items.

### Species 6: The Intermediate Value

This year's estimate when the question asked for the increase. The total number of passers when the question asked how many passed on a retake. The first of two rates when the question asked for the difference. **Re-read the final clause before bubbling.**`
    },
    {
      id: 'ds-adv-p2-speed',
      type: 'text' as const,
      content: `### Speed Technique 1: Label the Margin Before You Divide

Spend three seconds writing "denom = column, 82" next to the problem. Nearly every miss in this topic is a denominator chosen from muscle memory rather than from the sentence.

### Speed Technique 2: Reconcile the Table Once

When a cell is missing, recover it from the margin that has a single unknown, then check it against the perpendicular margin. Two missing cells are usually solvable in a chain, and often **only one of them is needed** — recover the one your question touches and check the grand total.

### Speed Technique 3: Percentage Points Are Subtraction, "Times" Is Division

- "By how many **percentage points**?" → subtract the two rates.
- "Is how many **times**?" → divide the two rates.
- "By what **percent** did it increase?" → divide the change by the original.

Three different operations on the same two numbers, and at least two of the three results will appear as choices.

### Speed Technique 4: Adjusted Denominators First

If the question excludes a category ("among those who were not absent," "with income of 30 thousand or more"), build the restricted total **before** doing anything else — usually by adding two columns or by subtracting one column from the row total. Then keep the numerator inside that same restricted set. A numerator drawn from two columns and a denominator drawn from one is the most common structural error on these items.

### Speed Technique 5: Estimate to Eliminate

Rates in these tables are usually clean-ish fractions. $105/400$ is a hair over one quarter; $54/300$ is under one fifth. That is enough to rule out two choices instantly and to catch a denominator error before you commit — if your "rate" comes out above 100 percent or absurdly small, you grabbed the wrong margin.`
    },
    {
      id: 'ds-adv-p2-q1',
      type: 'quiz' as const,
      question: 'The table shows the internet service used by 800 surveyed households.\n\n| | Fiber | Cable | Satellite | Total |\n|---|---|---|---|---|\n| City | 210 | 120 | 30 | 360 |\n| Suburb | 112 | 126 | 42 | 280 |\n| Rural | 24 | 66 | 70 | 160 |\n| Total | 346 | 312 | 142 | 800 |\n\nThe 160 rural households surveyed were selected at random from the 12,000 rural households in the region. Based on the survey, which of the following is the best estimate of the number of rural households in the region that use satellite service?',
      options: [
        '1,050',
        '5,250',
        '2,130',
        '2,400'
      ],
      correctAnswer: 1,
      explanation: 'The population being estimated is rural households only, so the rate must be computed inside the Rural row: $70/160 = 0.4375$, and $0.4375(12{,}000) = 5{,}250$. Choice A uses $70/800 = 0.0875$, a rate computed over all three regions and then applied to a rural-only population — the mismatched-scaling trap, which badly underestimates because most of the sample is not rural. Choice C scales the Satellite column total, $142/800$, estimating satellite use across all regions. Choice D scales $160/800$, the rural share of the sample, which measures who was surveyed rather than what service they use.'
    },
    {
      id: 'ds-adv-p2-q2',
      type: 'quiz' as const,
      question: 'The table shows outcomes for 950 patients at three clinics.\n\n| | Improved | Unchanged | Worse | Total |\n|---|---|---|---|---|\n| Clinic A | 156 | 78 | 26 | 260 |\n| Clinic B | 189 | 105 | 21 | 315 |\n| Clinic C | 175 | 140 | 60 | 375 |\n| Total | 520 | 323 | 107 | 950 |\n\nWhich of the following statements is supported by the table?',
      options: [
        'Clinic B had the highest improvement rate, because 189 patients improved there, more than at any other clinic.',
        'Of the patients who improved, 30 percent were at Clinic A, so Clinic A’s improvement rate is 30 percent.',
        'Clinic A and Clinic B had equal improvement rates, even though 33 more patients improved at Clinic B.',
        'Clinic C had the lowest improvement rate, and that rate was less than half of Clinic A’s rate.'
      ],
      correctAnswer: 2,
      explanation: 'Each rate uses its own row total: Clinic A is $156/260 = 60.0$ percent, Clinic B is $189/315 = 60.0$ percent, and Clinic C is $175/375 = 46.7$ percent. A and B tie exactly, even though B treated 55 more patients and therefore recorded 33 more improvements. Choice A is the count-instead-of-rate error: 189 is the largest count only because Clinic B is larger than Clinic A. Choice B computes $156/520 = 30$ percent, which is the Clinic A share of the improved column, then mislabels that reversed conditional as an improvement rate. Choice D correctly identifies Clinic C as lowest but the numeric claim fails: half of 60.0 percent is 30 percent, and 46.7 percent is well above that.'
    },
    {
      id: 'ds-adv-p2-q3',
      type: 'quiz' as const,
      question: 'A factory inspected 1,200 units from three production lines.\n\n| | Defective | Reworked | Passed | Total |\n|---|---|---|---|---|\n| Line M | 36 | 64 | 300 | 400 |\n| Line N | 15 | 45 | 440 | 500 |\n| Line P | 9 | 41 | 250 | 300 |\n| Total | 60 | 150 | 990 | 1200 |\n\nThe defect rate for a line is the number of defective units from that line divided by the number of units inspected from that line. The defect rate for Line M is how many times the defect rate for Line N?',
      options: [
        '$2.4$',
        '$0.3$',
        '$3.0$',
        '$1.25$'
      ],
      correctAnswer: 2,
      explanation: 'Line M: $36/400 = 0.09$. Line N: $15/500 = 0.03$. The ratio is $0.09/0.03 = 3.0$. Choice A divides the raw defect counts, $36/15 = 2.4$, which ignores that Line N inspected 100 more units; the size difference is exactly why the true ratio of rates is larger than the ratio of counts. Choice B inverts the comparison, reporting Line N relative to Line M. Choice D is the ratio of the line sizes, $500/400 = 1.25$, which compares how much was inspected rather than how often defects occurred.'
    }
  ]
};
