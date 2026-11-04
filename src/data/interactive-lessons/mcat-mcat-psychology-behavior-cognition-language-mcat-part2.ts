export const mcatPsychCogLangPart2Data = {
  topicSlug: 'mcat-psychology-behavior-cognition-language-mcat',
  sections: [
    {
      id: 'cog2-intro',
      type: 'text' as const,
      content: `# Cognition & Language

**Part 2 of 4 — Problem Solving, Decision Biases & Intelligence**

### Two Routes to a Solution

- **Algorithm**: exhaustive, rule-based procedure — guarantees a solution, costs time (trying every locker combination)
- **Heuristic**: mental shortcut — fast, usually good enough, systematically biased in known directions
- **Insight**: sudden restructuring of the problem ("aha") after an impasse; **incubation** (stepping away) sometimes releases it

### Barriers to Problem Solving

- **Mental set**: persisting with a previously successful strategy after it stops fitting (water-jar problems)
- **Functional fixedness**: seeing objects only in their usual role — Duncker's candle problem (the tack box is a shelf, once you stop seeing "container")
- **Confirmation bias**: searching for and weighting evidence that supports the current hypothesis; the reason good experiments try to *falsify*

### The Judgment Heuristics (Kahneman & Tversky — know each signature error)

| Heuristic | Shortcut | Signature error |
|-----------|----------|-----------------|
| **Representativeness** | Judge probability by resemblance to a prototype | **Base-rate neglect** (the meek, tidy man judged a librarian despite farmers vastly outnumbering librarians); **conjunction fallacy** ("feminist bank teller" judged likelier than "bank teller") |
| **Availability** | Judge frequency by ease of recall | Overestimating vivid, recent, or heavily reported risks (plane crashes, shark attacks) over statistically larger ones |
| **Anchoring** | Adjust from an initial number, insufficiently | First offers and arbitrary numbers drag final estimates toward them |

Related distortions: **framing effects** (identical options chosen differently as "90% survival" vs. "10% mortality" — people are risk-averse for gains, risk-seeking for losses); **overconfidence**; **belief perseverance** (conclusions outlive their discredited evidence); **hindsight bias** ("knew it all along"); **gambler's fallacy** (independent events "due"); **sunk-cost reasoning**.

### Intelligence — the Theories the MCAT Contrasts

- **Spearman's g**: one general factor; positive correlations among all cognitive tests are its evidence
- **Gardner's multiple intelligences**: eight-plus independent capacities (musical, bodily-kinesthetic, interpersonal, etc.); criticized for weak psychometric separation
- **Sternberg's triarchic**: analytical, creative, practical
- **Fluid intelligence** (novel reasoning; declines with age) vs. **crystallized** (accumulated knowledge/vocabulary; stable or rising into later adulthood) — the standard aging dissociation
- IQ is a **deviation score**: mean 100, SD 15; the **Flynn effect** is the generational rise in raw scores (environment must matter, since gene pools cannot shift that fast)
- **Heritability** (proportion of variance in a *population* attributable to genes) is not a fixed individual quantity: it rises in enriched, uniform environments and says nothing about group differences under different conditions
- **Stereotype threat**: performance drops when a negative group stereotype is made salient — a situational, reversible effect that passages use to probe test-fairness interpretations`
    },
    {
      id: 'cog2-worked',
      type: 'text' as const,
      content: `### Worked Example — A Diagnostic-Reasoning Passage, Fully Read

**Problem 1.** A vignette of a 24-year-old with fatigue and joint pain "closely resembles" a rare autoimmune disease (1 in 10,000) but also fits a common viral syndrome (1 in 20); 71% of residents rank the rare disease first. In Phase 2, residents fresh from an ICU rotation with a fatal case of it rank it first more often.

- **(a)** Which heuristic drives the Phase 1 ranking, and what error does it produce?
- **(b)** Why should even a strong match to the rare disease usually lose?
- **(c)** What pushes the Phase 2 rate higher still?
- **(d)** What changed between Phase 1 and Phase 2, and what stayed the same?

**(a) Representativeness.** Ranking by resemblance to a memorized prototype while ignoring prevalence is the representativeness heuristic, and its signature error is base-rate neglect.

**(b) The base rates.** The viral syndrome is 500 times more common ($\\tfrac{1}{20}$ vs. $\\tfrac{1}{10{,}000}$), so a moderate match to it usually beats a strong match to the 1-in-10,000 disease.

**(c) Availability.** A vivid, recent, emotionally charged case makes the rare disease easier to call to mind, so availability now compounds representativeness.

**(d) Only recall ease changed.** The vignette, and so its resemblance to the prototype, stayed the same in both phases; Phase 2 changed only how easily a case comes to mind. That is why the two heuristics are dissociable.

**Problem 2.** In Phase 3, explicit base-rate information cuts the error nearly in half, and requiring residents to list evidence AGAINST their leading diagnosis cuts it further. One resident orders one more test whose result is expected in the favored diagnosis.

- **(a)** Which heuristic's error does base-rate information attack?
- **(b)** Which bias does listing contrary evidence attack?
- **(c)** What is the resident who orders that test displaying?
- **(d)** What kind of test would a falsification mindset choose instead?

**(a) Base-rate neglect.** Supplying base rates attacks base-rate neglect, the error of the representativeness heuristic: it puts back the prevalence information that resemblance-based judgment ignores.

**(b) Confirmation bias.** Residents otherwise seek features consistent with their leading hypothesis; the consider-the-opposite instruction forces a search the other way. The MCAT rewards matching each intervention to the specific bias it targets, not "education reduces bias" in general.

**(c) Confirmation bias again.** The test was chosen because it fits the favored diagnosis, so the information sought can only support, not challenge, the current hypothesis.

**(d) A discriminating test.** A test whose result differs between the two diagnoses can disconfirm the favored one. Discriminating tests are the clinical version of falsification.`
    },
    {
      id: 'cog2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Heuristics, Biases & Intelligence** 🎯`,
      exercise: {
        questions: [
          {
            question: `After a week of saturation news coverage of a rare train derailment, survey respondents rate rail travel as more dangerous than driving, contradicting fatality statistics. The bias at work is:`,
            options: [`The conjunction fallacy about combined events`,`The belief perseverance effect`, `The availability heuristic`, `Hindsight bias about the crash`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Risk is being estimated from the EASE with which examples come to mind, which media coverage has just inflated — the availability heuristic's signature case. The conjunction fallacy requires a compound event judged likelier than its component; belief perseverance requires discredited evidence; hindsight bias requires an after-the-fact "I knew it."`
          },
          {
            question: `Given a candle, a book of matches, and a box of tacks, participants struggle to mount the candle on the wall until they empty the tack box — at which point many suddenly see the solution of tacking the BOX to the wall as a shelf. The initial difficulty is attributed to:`,
            options: [`Mental set from prior candle problems`, `A framing effect from how the task was described`, `Insufficient fluid reasoning ability`, `Functional fixedness about the box`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Duncker's candle problem is THE demonstration of functional fixedness: the box's habitual function (holding tacks) dominates its representation until emptying it perceptually frees the object for a new role. Mental set is persistence of a prior STRATEGY, not an object-role fixation, and the sudden restructuring afterward is insight at work. Nothing about the task wording was reframed, and the solution appears once the box is emptied, not once reasoning ability changes.`
          },
          {
            question: `Longitudinal cognitive data typically show that vocabulary and accumulated professional knowledge hold steady or improve into the 60s, while speed of solving novel logic puzzles declines from early adulthood. This dissociation is described as:`,
            options: [`A general decline in g across all abilities`, `Stable crystallized, declining fluid intelligence`, `Declining crystallized, stable fluid ability`, `Evidence for Gardner's independent intelligences`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Crystallized intelligence (stored knowledge, vocabulary) is age-robust; fluid intelligence (novel, speeded reasoning) peaks early and declines — the standard aging dissociation. A global g decline would drag both down; the reverse pattern contradicts the data, in which knowledge endures while novel speeded reasoning falls; Gardner's model concerns distinct domains, not the knowledge-vs-novelty split.`
          },
          {
            question: `Patients choose an operation described as having "90% one-month survival" far more often than the identical operation described as having "10% one-month mortality." This preference reversal demonstrates:`,
            options: [`A framing effect from gain versus loss wording`, `The gambler's fallacy about survival odds`, `Accurate reasoning about the stated probabilities`, `The testing effect on memory for statistics`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `The options are numerically identical; only the description changed, yet choices reversed — the framing effect, rooted in prospect theory's asymmetry (people treat losses as looming larger than equivalent gains). Rational-agent reasoning would be frame-invariant. The gambler's fallacy concerns independence of sequential events, and the testing effect belongs to memory.`
          },
          {
            question: `Told that Steve is "quiet, tidy, and loves detail," most people judge him more likely a librarian than a farmer, even though farmers outnumber male librarians many times over. The error illustrates:`,
            options: [`Representativeness heuristic and base-rate neglect`, `The availability heuristic, driven by ease of recall`, `Anchoring on the first occupation that was named`, `Functional fixedness applied to job categories`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `The judgment is driven by how well Steve MATCHES the librarian prototype while the vastly larger farmer base rate is ignored — the defining representativeness error. Availability would require the judgment to depend on ease of recalling instances; no initial numeric anchor is given; and functional fixedness concerns object use in problem solving.`
          }
        ]
      }
    },
    {
      id: 'cog2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Representativeness.** Judging by resemblance to a prototype produces base-rate neglect and the conjunction fallacy.
- **Availability and anchoring.** Vivid, recent cases feel frequent; estimates stay too close to an initial number.
- **Intelligence theories.** Spearman's one g vs. Gardner's many vs. Sternberg's three; IQ is a deviation score, mean 100, SD 15.
- **Fluid vs. crystallized.** Novel reasoning declines from early adulthood; knowledge and vocabulary hold steady or rise.

**Common traps**

- **Mental set vs. fixedness.** Mental set repeats an old strategy; functional fixedness locks an object into its usual role.
- **Treating the choice gap as rational.** "90% survival" and "10% mortality" are identical; different choices are a framing effect.
- **Generic debiasing.** Match fix to bias: base rates counter representativeness, contrary evidence counters confirmation bias.
- **Heritability as individual.** A population statistic; it says nothing about the cause of differences between groups in different environments.`
    }
  ]
};
