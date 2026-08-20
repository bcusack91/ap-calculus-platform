export const lessonData = {
  topicSlug: 'sat-probability-two-way-tables-advanced',
  sections: [
    {
      id: 'prob-adv-p2-traps',
      type: 'text' as const,
      content: `# Probability & Two-Way Tables: Traps & Speed

**Part 2 of 3 — Distractor Autopsy**

Here is the table these questions work from — beverage preferences of $650$ people at a university:

| | Coffee | Tea | Neither | Total |
|---|---|---|---|---|
| Staff | 84 | 36 | 30 | 150 |
| Undergraduates | 168 | 92 | 90 | 350 |
| Graduate students | 78 | 42 | 30 | 150 |
| **Total** | 330 | 170 | 150 | **650** |

### Distractor Species 1: The Grand Total

Whenever a question conditions on anything, $650$ stops being the denominator — but the option built on $650$ is always offered, because dividing by the biggest number in the table feels like the safe move. It is the correct denominator **only** when the question describes a single random selection from everyone with no condition attached.

### Distractor Species 2: The Reversed Conditional

$\\frac{168}{330}$ ("of the coffee drinkers, what share are undergraduates") and $\\frac{168}{350}$ ("of the undergraduates, what share prefer coffee") are both defensible-looking numbers near $50\\%$. Only the sentence tells you which. Underline the words immediately following **"of the"** or **"given that"** — that group is the denominator.

### Distractor Species 3: Count Where Rate Belongs

Undergraduates supply the most tea drinkers ($92$) but not the highest tea *rate* ($92/350 \\approx 26.3\\%$, behind graduate students at $28\\%$). Any time the groups are unequal in size, "most" and "greatest proportion" split apart — and the item exists because of that split.

### Distractor Species 4: The Margin That Was Never Computed

"Those who do not prefer coffee" is $650 - 330 = 320$ people, a number printed nowhere in the table. Students who cannot find their denominator in a cell reach for the nearest visible total — usually the row total — and answer a different question.

### Distractor Species 5: Percent of the Wrong Whole

A percent answer must state its base. $\\frac{240}{510}$ and $\\frac{240}{450}$ are both "percent of suburban residents who…" until you decide whether the restriction is *suburban* or *not approving*.

---

## Speed Techniques

**Write the denominator first.** Before touching a number, write "out of ___" and fill in the population the sentence restricted you to. The numerator then takes care of itself.

**Translate "given that" mechanically.** $P(A \\mid B) = \\frac{\\text{count in both } A \\text{ and } B}{\\text{total in } B}$. The condition after "given that" is always $B$, and $B$ is always the denominator.

**For rate comparisons, use a common yardstick.** Convert each group's count to a percent of its own total before comparing. Comparing raw counts across unequal groups is meaningless — and is precisely what the wrong answer does.

**Build complement groups on the margin.** Total minus the named column gives the complement population; the row pieces of the complement are the row total minus that row's entry in the named column.`
    },
    {
      id: 'prob-adv-p2-q1',
      type: 'quiz' as const,
      question: `Among $650$ people surveyed at a university: of the $150$ staff, $36$ prefer tea; of the $350$ undergraduates, $92$ prefer tea; and of the $150$ graduate students, $42$ prefer tea. Which group has the greatest proportion of its members preferring tea?`,
      options: [
        'Staff',
        'Undergraduates',
        'Graduate students',
        'Staff and graduate students are tied for the greatest proportion'
      ],
      correctAnswer: 2,
      explanation: `Convert each to a rate within its own group: staff $\\frac{36}{150} = 24\\%$, undergraduates $\\frac{92}{350} \\approx 26.3\\%$, graduate students $\\frac{42}{150} = 28\\%$. Graduate students lead. The trap is undergraduates, who supply by far the most tea drinkers in raw count ($92$, more than double the graduate students' $42$) purely because that group is more than twice as large. The final option preys on staff and graduate students sharing the same group size of $150$ — same denominators, but $36$ and $42$ are different numerators.`
    },
    {
      id: 'prob-adv-p2-q2',
      type: 'quiz' as const,
      question: `Of the $650$ people surveyed, $330$ prefer coffee, and $168$ of those coffee drinkers are undergraduates. There are $350$ undergraduates in the survey overall. Of the people who prefer coffee, what percent are undergraduates? Round to the nearest tenth of a percent.`,
      options: ['$25.8\\%$', '$48.0\\%$', '$50.9\\%$', '$53.8\\%$'],
      correctAnswer: 2,
      explanation: `"Of the people who prefer coffee" makes the $330$ coffee drinkers the denominator: $\\frac{168}{330} \\approx 50.9\\%$. The traps: $48.0\\%$ is $\\frac{168}{350}$, the REVERSED conditional — the percent of undergraduates who prefer coffee — and it is close enough to the correct value to survive a rushed check; $25.8\\%$ is $\\frac{168}{650}$, the joint probability using the grand total; $53.8\\%$ is $\\frac{350}{650}$, the share of all respondents who are undergraduates, which ignores coffee entirely.`
    },
    {
      id: 'prob-adv-p2-q3',
      type: 'quiz' as const,
      question: `Of the $650$ people surveyed, $330$ prefer coffee. Among the $150$ staff members, $36$ prefer tea and $30$ prefer neither. One person is selected at random from those who do NOT prefer coffee. What is the probability that the person selected is a staff member? Round to the nearest thousandth.`,
      options: ['$0.102$', '$0.206$', '$0.231$', '$0.440$'],
      correctAnswer: 1,
      explanation: `Build the complement group: $650 - 330 = 320$ people do not prefer coffee, and the staff among them number $36 + 30 = 66$. So the probability is $\\frac{66}{320} \\approx 0.206$. The traps: $0.440$ is $\\frac{66}{150}$, dividing by the staff row total — the visible number students grab when their denominator is not printed in the table; $0.102$ is $\\frac{66}{650}$, using the grand total instead of the restricted group; $0.231$ is $\\frac{150}{650}$, the overall share of staff, which ignores the coffee condition.`
    }
  ]
}
