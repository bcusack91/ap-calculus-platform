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
| **Representativeness** | Judge probability by resemblance to a prototype | **Base-rate neglect** (the shy poetry-lover judged a librarian despite farmers vastly outnumbering librarians); **conjunction fallacy** ("feminist bank teller" judged likelier than "bank teller") |
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

**Passage.** Medical residents read a vignette of a 24-year-old with fatigue and joint pain whose presentation "closely resembles" a rare autoimmune disease (prevalence 1 in 10,000) but is also consistent with a common viral syndrome (prevalence 1 in 20). 71% of residents rank the rare disease first. In Phase 2, residents who just completed an ICU rotation featuring a fatal case of the rare disease rank it first at even higher rates. In Phase 3, giving residents explicit base-rate information cuts the error nearly in half, and requiring them to list evidence AGAINST their leading diagnosis cuts it further.

**Step 1 — name the Phase 1 error.** Ranking by resemblance to a memorized prototype while ignoring prevalence is the representativeness heuristic producing base-rate neglect: even a strong match to a 1-in-10,000 disease usually loses to a moderate match to a 1-in-20 one.

**Step 2 — name the Phase 2 amplifier.** A vivid, recent, emotionally charged case makes the rare disease easier to call to mind — availability now compounds representativeness. Note the two heuristics are dissociable: Phase 2 changed only recall ease, not the vignette's resemblance.

**Step 3 — map the debiasing results.** Base-rate provision attacks representativeness directly; the consider-the-opposite instruction attacks confirmation bias (residents otherwise seek features consistent with their leading hypothesis). The MCAT rewards matching each intervention to the specific bias it targets, not "education reduces bias" in general.

**Step 4 — the extension item.** "A resident who orders one more confirmatory test for the favored diagnosis, rather than the test that would best discriminate between the two, is displaying..." — confirmation bias, because the information sought can only support, not challenge, the current hypothesis. Discriminating tests are the clinical version of falsification.`
    },
    {
      id: 'cog2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Heuristics, Biases & Intelligence** 🎯`,
      exercise: {
        questions: [
          {
            question: `Told that Steve is "quiet, tidy, and loves detail," most people judge him more likely a librarian than a farmer, even though farmers outnumber male librarians many times over. The error illustrates:`,
            options: [`Representativeness heuristic and base-rate neglect`, `The availability heuristic, driven by ease of recall`, `Anchoring on the first occupation that was named`, `Functional fixedness applied to job categories`],
            correctAnswer: 0,
            explanation: `The judgment is driven by how well Steve MATCHES the librarian prototype while the vastly larger farmer base rate is ignored — the defining representativeness error. Availability would require the judgment to depend on ease of recalling instances; no initial numeric anchor is given; and functional fixedness concerns object use in problem solving.`
          },
          {
            question: `After a week of saturation news coverage of a rare train derailment, survey respondents rate rail travel as more dangerous than driving, contradicting fatality statistics. The bias at work is:`,
            options: [`The conjunction fallacy`, `The belief perseverance effect`, `The availability heuristic`, `Hindsight bias about the crash`],
            correctAnswer: 2,
            explanation: `Risk is being estimated from the EASE with which examples come to mind, which media coverage has just inflated — the availability heuristic's signature case. The conjunction fallacy requires a compound event judged likelier than its component; belief perseverance requires discredited evidence; hindsight bias requires an after-the-fact "I knew it."`
          },
          {
            question: `Given a candle, a book of matches, and a box of tacks, participants struggle to mount the candle on the wall until they empty the tack box — at which point many suddenly see the solution of tacking the BOX to the wall as a shelf. The initial difficulty is attributed to:`,
            options: [`Mental set from prior candle problems`, `A framing effect from how the task was described`, `Insufficient fluid reasoning ability`, `Functional fixedness about the tack box`],
            correctAnswer: 3,
            explanation: `Duncker's candle problem is THE demonstration of functional fixedness: the box's habitual function (holding tacks) dominates its representation until emptying it perceptually frees the object for a new role. Mental set is persistence of a prior STRATEGY, not an object-role fixation, and the sudden restructuring afterward is insight at work. Nothing about the task wording was reframed, and the solution appears once the box is emptied, not once reasoning ability changes.`
          },
          {
            question: `Longitudinal cognitive data typically show that vocabulary and accumulated professional knowledge hold steady or improve into the 60s, while speed of solving novel logic puzzles declines from early adulthood. This dissociation is described as:`,
            options: [`A general decline in g across all abilities`, `Stable crystallized, declining fluid intelligence`, `Declining crystallized, stable fluid ability`, `Evidence for Gardner's independent intelligences`],
            correctAnswer: 1,
            explanation: `Crystallized intelligence (stored knowledge, vocabulary) is age-robust; fluid intelligence (novel, speeded reasoning) peaks early and declines — the standard aging dissociation. A global g decline would drag both down; the reverse pattern contradicts the data, in which knowledge endures while novel speeded reasoning falls; Gardner's model concerns distinct domains, not the knowledge-vs-novelty split.`
          },
          {
            question: `Patients choose an operation described as having "90% one-month survival" far more often than the identical operation described as having "10% one-month mortality." This preference reversal demonstrates:`,
            options: [`A framing effect from gain versus loss wording`, `The gambler's fallacy about survival odds`, `Accurate reasoning about the stated probabilities`, `The testing effect on memory for statistics`],
            correctAnswer: 0,
            explanation: `The options are numerically identical; only the description changed, yet choices reversed — the framing effect, rooted in prospect theory's asymmetry (people treat losses as looming larger than equivalent gains). Rational-agent reasoning would be frame-invariant. The gambler's fallacy concerns independence of sequential events, and the testing effect belongs to memory.`
          }
        ]
      }
    },
    {
      id: 'cog2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Algorithms guarantee, heuristics approximate; insight restructures after impasse; mental set and functional fixedness are the two classic blocks
- Representativeness = judging by resemblance (base-rate neglect, conjunction fallacy); availability = judging by recall ease (vivid media risks); anchoring = insufficient adjustment from a starting number
- Framing: identical facts, different choices — risk-averse for gains, risk-seeking for losses; confirmation bias is countered by seeking disconfirming, discriminating evidence
- Intelligence theories: Spearman's g (positive test correlations) vs Gardner (multiple, weakly separable) vs Sternberg (analytic/creative/practical); fluid declines with age, crystallized endures
- IQ is a deviation score (mean 100, SD 15); the Flynn effect implicates environment; heritability is a population statistic, and stereotype threat is a situational depressant of scores — never an ability measure`
    }
  ]
};
