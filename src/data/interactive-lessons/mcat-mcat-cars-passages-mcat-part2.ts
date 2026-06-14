export const mcatCarsPsgPart2Data = {
  topicSlug: 'mcat-cars-passages-mcat',
  sections: [
    {
      id: 'cp2-intro',
      type: 'text' as const,
      content: `# CARS Passage Types

**Part 2 of 7 — Social Science Passages**

### Social Science Topics on CARS

- **History**: Social movements, political events, cultural shifts
- **Economics**: Theories, policy debates, market analysis
- **Political Science**: Governance, democracy, rights
- **Psychology/Sociology**: Social behavior, cultural norms (non-scientific)
- **Anthropology**: Cultural practices, human societies

### How Social Science Differs from Humanities

| Feature | Humanities | Social Sciences |
|---------|-----------|----------------|
| Evidence | Reasoning, textual analysis | Data, case studies, historical examples |
| Tone | Often more subjective | Often aims for objectivity |
| Arguments | Philosophical/theoretical | Empirical/evidence-based |

### Strategy for Social Science Passages

- **Identify the research question** or central issue
- **Note cause-and-effect claims** — authors often argue X caused Y
- **Pay attention to dates and context** — historical arguments depend on timeline
- **Watch for bias** — even "objective" passages have an author viewpoint`
    },
    {
      id: 'cp2-worked-example',
      type: 'text' as const,
      content: `### Worked Example — Reading a Social Science Passage

> *"For decades, urban planners treated the decline of mid-century downtowns as a problem of design: too few parks, too much asphalt, buildings that turned blank walls to the street. The remedy seemed obvious — redesign the spaces and the people would return. Yet cities that poured money into handsome plazas often found them empty. A competing account points elsewhere. The flight from downtown, on this view, tracked not aesthetics but the falling cost of suburban commuting after the highway boom. Where this second factor is absent — in cities hemmed in by geography — even unlovely downtowns retained their crowds. Design, it appears, was a symptom mistaken for a cause."*

**How to attack it:**

1. **State the central issue.** Why did mid-century downtowns decline? Two explanations are on the table: (A) bad design, (B) cheap suburban commuting.
2. **Identify the author's position.** The final sentence — "Design... was a symptom mistaken for a cause" — sides with explanation B. The author treats A as a *misdiagnosis*.
3. **Spot the evidence type.** This is social science, so notice the **comparative case**: cities "hemmed in by geography" kept their crowds even with poor design. That comparison is the author's strongest support for B over A.
4. **Watch the causal language.** "Tracked," "cause," "symptom" — the entire passage is an argument about *what causes what*. CARS will test whether you can separate correlation (empty plazas) from the author's preferred cause (commuting cost).
5. **Predict the trap.** A wrong answer will say the author thinks design "doesn't matter at all." The author actually says design was *not the primary cause* — a more limited claim.

> **Takeaway:** Social science passages live and die by causation. Always ask: *Which variable does the author think is doing the real work, and what evidence rules out the alternative?*`
    },
    {
      id: 'cp2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Social Science Passages** 🎯`,
      exercise: {
        questions: [
          {
            question: `A social science passage presents data showing a correlation between two variables. The author concludes one causes the other. A good critical reader would:`,
            options: [`Note that the author may be conflating correlation with causation — a potential weakness`, `Accept the conclusion since data supports it`, `Ignore the data and focus on the argument`, `Assume the author is wrong without evidence`],
            correctAnswer: 0,
            explanation: `Correlation does not establish causation — a fundamental critical-thinking principle. CARS questions often test whether you can identify logical weaknesses, including unwarranted causal claims.`
          },
          {
            question: `In the worked-example excerpt, the author's central claim is best stated as:`,
            options: [`Mid-century downtowns declined mainly because their design was unappealing`, `The decline of downtowns was driven primarily by cheaper suburban commuting, not by design flaws`, `Beautiful plazas always revive struggling downtowns`, `Geography is irrelevant to where people choose to live`],
            correctAnswer: 1,
            explanation: `The passage explicitly subordinates the design explanation ("a symptom mistaken for a cause") to the commuting-cost explanation. Option A states the very view the author rejects; C and D contradict the text.`
          },
          {
            question: `The author notes that cities "hemmed in by geography" retained downtown crowds even when those downtowns were "unlovely." This detail functions to:`,
            options: [`Concede that design is the true cause of downtown decline`, `Serve as a comparative case that isolates commuting cost as the decisive variable`, `Prove that geography alone determines a city's economy`, `Undermine the author's own conclusion`],
            correctAnswer: 1,
            explanation: `By holding design "unlovely" but removing easy suburban commuting (geography blocks sprawl), the example isolates the commuting variable. When the suburban-commute factor is absent, downtowns thrive regardless of looks — supporting the author's causal claim.`
          },
          {
            question: `A student concludes from the passage that "good urban design has no effect on downtown vitality." This conclusion is:`,
            options: [`Fully supported, because the author dismisses design entirely`, `Too strong — the author argues design was not the primary cause, not that it has zero effect`, `Supported by the plaza example`, `Irrelevant to the passage's argument`],
            correctAnswer: 1,
            explanation: `The author calls design "a symptom mistaken for a cause," demoting it from primary driver — but never claims design is wholly inconsequential. CARS routinely punishes answers that overstate ("no effect," "always," "never") beyond what the text licenses.`
          }
        ]
      }
    },
    {
      id: 'cp2-quiz2',
      type: 'multiple-choice' as const,
      content: `### Exit Ticket — Strengthen, Weaken & Tone`,
      exercise: {
        questions: [
          {
            question: `Which finding, if true, would most STRENGTHEN the author's argument?`,
            options: [`A study shows that after new highways cut suburban commute times, nearby downtowns lost population regardless of how their public spaces were rated`, `Several cities built award-winning plazas in the 1990s`, `Downtown rents rose during the period studied`, `Urban planners disagree about the definition of "good design"`],
            correctAnswer: 0,
            explanation: `The author's thesis is that falling commuting cost drove the flight from downtown. Evidence that downtown decline followed highway-driven commute reductions "regardless of public-space ratings" directly supports commuting-as-cause while controlling for design. The other options are tangential.`
          },
          {
            question: `Which finding, if true, would most WEAKEN the author's argument?`,
            options: [`Geographically constrained cities and sprawling cities lost downtown population at nearly identical rates, but the constrained cities had far better-designed public spaces`, `Suburban commuting became cheaper after the highway boom`, `Some plazas built downtown were poorly maintained`, `Historians debate exactly when the highway boom began`],
            correctAnswer: 0,
            explanation: `The author leaned on geographically constrained cities retaining crowds as proof that commuting cost, not design, mattered. If those cities declined just as fast — and only kept crowds where design was better — the design explanation revives and the commuting thesis weakens. Option B actually supports the author; C and D are minor.`
          },
          {
            question: `The author's attitude toward the design-focused explanation favored by "urban planners" is best described as:`,
            options: [`Respectful agreement`, `Critical — the author treats it as a well-meaning misdiagnosis that confused a symptom for a cause`, `Completely indifferent`, `Hostile and mocking`],
            correctAnswer: 1,
            explanation: `The author grants that the design view "seemed obvious" yet concludes design "was a symptom mistaken for a cause." That is pointed but measured critique — diagnosing an error without ridicule. "Respectful agreement" and "indifferent" understate the disagreement; "hostile and mocking" overstates the tone.`
          }
        ]
      }
    },
    {
      id: 'cp2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Social science passages use evidence/data more than humanities
- Watch for cause-effect claims — are they justified?
- Note the historical/social context of claims
- Even data-driven passages reflect the author's perspective
- Comparative cases (holding one factor fixed while another varies) are the author's tool for isolating a cause
- Reject answer choices that overstate the author's causal claim into "always," "never," or "no effect"`
    }
  ]
};
