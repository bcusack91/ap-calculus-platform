export const mcatCarsStratPart7Data = {
  topicSlug: 'mcat-cars-strategy-mcat',
  sections: [
    {
      id: 'cs7-intro',
      type: 'text' as const,
      content: `# CARS Strategy

**Part 7 of 7 — Long-Term CARS Improvement Plan**

### Building CARS Skills Over Time

CARS cannot be crammed. It requires consistent practice over months.

### Recommended Practice Schedule

| Timeframe | Activity |
|-----------|----------|
| 3+ months out | Read challenging non-fiction daily (philosophy, ethics, social science) |
| 2 months out | Practice 1-2 timed passages daily with review |
| 1 month out | Full-length CARS sections under test conditions weekly |
| Test week | Light practice, review strategy, rest |

### How to Review CARS Practice

For EVERY wrong answer, ask:
1. Why was the wrong answer tempting?
2. What type of wrong answer was it? (extreme, out of scope, opposite, etc.)
3. What did I miss in the passage?
4. What specific text supports the right answer?

### Common CARS Mistakes

- Reading too quickly and missing nuance
- Choosing answers based on outside knowledge
- Not reading all four answer choices before selecting
- Spending too much time on one difficult question
- Confusing what the author says vs. what someone else says in the passage`
    },
    {
      id: 'cs7-worked',
      type: 'text' as const,
      content: `### Worked Example — A Review Protocol That Actually Builds Skill

Doing passages without rigorous review is how scores plateau. The growth happens in the *analysis of misses*. Here is a repeatable protocol applied to one missed question.

**The miss.** You chose (B); the answer was (D), an inference question.

**Step 1 — Why was MY choice wrong?** Re-read (B) and name its defect by type. "(B) said the author 'rejects' the theory, but the passage only says the author 'questions one aspect.' My choice was *too extreme* — I upgraded 'questions' to 'rejects.'" *Naming the defect type is non-negotiable* — it converts a one-off mistake into a recognizable pattern.

**Step 2 — Why was the RIGHT answer right?** Find the *exact sentence* that licenses (D). "(D) is supported by line 22, 'though valuable, the model leaves the central puzzle untouched.' That justifies the inference that the author finds the model incomplete." If you cannot point to the *text*, you have not finished reviewing.

**Step 3 — Why was the wrong answer TEMPTING?** "(B) used a real word from the passage ('theory') and felt decisive. I was pattern-matching vocabulary instead of weighing strength." This diagnoses the *cognitive habit* that produced the error.

**Step 4 — What is the fix, stated as a rule?** "When a choice intensifies the author's stance ('questions' → 'rejects'), distrust it." Add it to a running error log.

**The error log is the engine.** Over weeks, tally your misses by *type*. If 40% are "too extreme," your single highest-yield fix is to audit every choice for intensity words. Patterns invisible in one passage become obvious across fifty. **Quality of review > quantity of passages**: ten passages reviewed this deeply beat forty done carelessly.

**The long game.** Pair this review habit with daily reading of dense non-fiction (philosophy, history, criticism) so that unfamiliar prose stops feeling foreign. CARS is a skill grown over months, not a body of facts crammed in a week.

**Takeaway:** For every miss, name the wrong-answer type, cite the text that proves the right answer, diagnose why the trap tempted you, and log a rule. Let the error log steer what you practice next.`
    },
    {
      id: 'cs7-quiz1',
      type: 'multiple-choice' as const,
      content: `**CARS Strategy Review** 🎯`,
      exercise: {
        questions: [
          {
            question: `The single most effective way to improve CARS performance over 3 months is:`,
            options: [`Daily practice with careful review of every wrong answer`, `Memorizing a list of CARS strategies`, `Reading only science passages`, `Spending all study time on CARS and ignoring other sections`],
            correctAnswer: 0,
            explanation: `CARS improvement comes from consistent, deliberate practice with thorough review. Understanding WHY you got questions wrong is more valuable than doing more passages. Quality > quantity.`
          },
          {
            question: `When reviewing a missed CARS question, the MOST important step is to:`,
            options: [`Identify why the wrong answer tempted you and cite the exact text that supports the correct answer`, `Note the correct letter and move on`, `Count how many you missed in total`, `Assume the question was simply unfair`],
            correctAnswer: 0,
            explanation: `Deep review means diagnosing the trap (e.g., too extreme, out of scope) and grounding the right answer in specific text. This turns each miss into a transferable lesson. Merely recording the correct letter teaches nothing for future passages.`
          },
          {
            question: `Keeping an "error log" that tallies your wrong answers by type is valuable because it:`,
            options: [`Reveals recurring patterns, so you can target your highest-frequency mistake`, `Guarantees you never miss that question again`, `Replaces the need to read passages`, `Tracks how fast you read`],
            correctAnswer: 0,
            explanation: `Logging misses by category (extreme, opposite, out of scope, etc.) exposes patterns invisible in a single passage. If most errors share a type, fixing that habit yields the largest score gain. It is a diagnostic tool, not a guarantee.`
          },
          {
            question: `Why is reading dense non-fiction (philosophy, history, criticism) months before the test recommended?`,
            options: [`It builds familiarity with complex prose, so MCAT-style passages feel less foreign`, `The MCAT reuses passages from those books`, `It lets you memorize facts that appear on CARS`, `It replaces the need for timed practice`],
            correctAnswer: 0,
            explanation: `Regular exposure to challenging argumentative prose trains the comprehension and stamina CARS demands, making dense passages feel routine. It does not supply memorizable content (CARS needs none) and complements, rather than replaces, timed practice.`
          },
          {
            question: `A student does 40 passages in a week but never reviews them, while another does 10 and reviews each thoroughly. Who is likely improving more, and why?`,
            options: [`The second student — deliberate review of fewer passages builds skill faster than unreviewed volume`, `The first student — sheer volume always wins`, `Neither — practice has no effect on CARS`, `The first student — speed is the only thing that matters`],
            correctAnswer: 0,
            explanation: `Skill grows from understanding and correcting mistakes, not from raw repetition. Thorough review of ten passages produces more durable gains than racing through forty without reflection. On CARS, quality of practice beats quantity.`
          },
          {
            question: `One of the most common CARS errors is confusing the author's own view with a view the author merely reports. The best safeguard is to:`,
            options: [`Track whose voice each claim belongs to, watching for attributions like "critics contend" or "advocates argue"`, `Assume every strong claim is the author's thesis`, `Ignore opposing viewpoints entirely`, `Pick the answer that quotes the passage most directly`],
            correctAnswer: 0,
            explanation: `Passages routinely embed opponents' positions, and attribution phrases ("critics contend," "advocates argue") signal that a claim is not the author's. Tracking voice prevents you from crediting the author with views they actually report or rebut, a frequent and costly mix-up.`
          }
        ]
      }
    },
    {
      id: 'cs7-summary',
      type: 'text' as const,
      content: `### CARS Strategy — Complete! ✅

CARS is a skill built over time. The keys: active reading, strong elimination, understanding author tone, and consistent practice with careful review. For every miss, name the wrong-answer type, cite the text that proves the right answer, and log the pattern. Quality of review beats quantity of passages, and every wrong answer is a learning opportunity.`
    }
  ]
};
