export const mcatCarsReasonPart6Data = {
  topicSlug: 'mcat-cars-reasoning-mcat',
  sections: [
    {
      id: 'cr6-intro',
      type: 'text' as const,
      content: `# CARS Logical Reasoning

**Part 6 of 7 — Evidence Evaluation**

### Types of Evidence in CARS

| Evidence Type | Strength | Example |
|--------------|----------|---------|
| **Empirical data** | Strong | "A study of 10,000 participants showed..." |
| **Expert testimony** | Moderate | "According to Dr. Smith, a leading researcher..." |
| **Historical precedent** | Moderate | "In 1932, a similar policy led to..." |
| **Anecdotal** | Weak | "My friend tried it and it worked" |
| **Hypothetical** | Weak | "Imagine a world where..." |

### Evaluating Evidence on CARS

Questions may ask:
- "Which evidence most supports the author's claim?"
- "The author uses the example of X primarily to..."
- "How does paragraph 3 relate to the main argument?"

### Role of Examples in Arguments

Examples in CARS passages serve specific functions:
1. **Illustrate** a general principle
2. **Provide evidence** for a claim
3. **Counter** an opposing position
4. **Qualify** or nuance a broad claim
5. **Introduce** a new perspective

**Key Insight**: Always ask WHY the author included an example, not just WHAT it says.`
    },
    {
      id: 'cr6-worked',
      type: 'text' as const,
      content: `### Worked Example — Function vs. Content

A huge share of CARS "Reasoning Within the Text" questions ask what a sentence or example *does* (its rhetorical function), not what it *says* (its content). These are different skills, and the answer choices exploit the confusion.

> Paragraph 2: "Defenders of the old canon insist it represents timeless excellence. Consider Homer, still read after three millennia. **Yet** popularity is not the same as merit: best-selling pamphlets of the 1600s are forgotten today, while once-ignored poets are now central."

Question: *The author mentions Homer primarily in order to...*

**Trace the move.** The Homer sentence appears right after the *defenders'* claim and is immediately followed by "Yet." The author is not endorsing Homer as proof of the canon; the author is *voicing the opposing side's best example* before pivoting against it with "Yet."

**Function:** Homer is presented as a **concession** — the strongest case for the view the author is about to qualify or rebut.

**Why the content-based traps fail.**
- "To prove that the old canon reflects timeless excellence" — this restates the *defenders'* point as if it were the *author's*. It confuses whose voice is speaking. Trap.
- "To show that ancient works are widely read" — true as content, but it misses the *purpose*: the sentence exists to set up the "Yet" reversal.
- "To argue popularity equals merit" — the author argues the *opposite*.

**Discipline:** When a question says "primarily in order to," look at the *sentences around* the cited material — especially pivot words like "yet," "however," "but." Function questions are answered by *position in the argument*, not by paraphrasing the line. And always track *whose view* a sentence expresses; CARS constantly plants the opponent's claim mid-paragraph to see if you mistake it for the author's.`
    },
    {
      id: 'cr6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Evidence Evaluation** 🎯`,
      exercise: {
        questions: [
          {
            question: `An author argues that education reform improves outcomes, then describes one school that succeeded after reforms. A questioner could fairly note that:`,
            options: [`One school is anecdotal evidence — not sufficient to generalize to all schools`, `The school must be representative of all schools`, `Education reform always works everywhere`, `The example disproves the argument`],
            correctAnswer: 0,
            explanation: `A single case study is anecdotal — it illustrates possibility but doesn't prove the claim for all schools. The MCAT tests whether you can evaluate the strength and limitations of evidence.`
          },
          {
            question: `A passage states: "Granted, a few early trials showed no effect. But these used doses now known to be too low." The phrase "Granted... But" indicates the author is:`,
            options: [`Conceding a point to the opposition, then rebutting it to strengthen their own position`, `Abandoning their argument`, `Committing a straw man fallacy`, `Presenting purely neutral background`],
            correctAnswer: 0,
            explanation: `"Granted" signals a concession (acknowledging contrary evidence), and "But" signals the rebuttal. This concede-then-counter structure is a common rhetorical move that actually reinforces the author's position by addressing objections.`
          },
          {
            question: `Which ranking of evidence strength is most defensible on CARS, from strongest to weakest?`,
            options: [`Large controlled empirical study > qualified expert testimony > single anecdote > hypothetical scenario`, `Hypothetical scenario > anecdote > expert testimony > empirical study`, `Anecdote > empirical study > hypothetical > expert testimony`, `All evidence types are equally strong`],
            correctAnswer: 0,
            explanation: `Systematic empirical data generally outranks expert opinion, which outranks a lone anecdote, which outranks a purely imagined hypothetical. CARS does not require statistics, but it does reward recognizing this rough hierarchy when comparing how well evidence supports a claim.`
          },
          {
            question: `A "primary purpose of this example" question is best answered by:`,
            options: [`Examining the example's role in the argument — what claim it supports, concedes, or rebuts`, `Paraphrasing exactly what the example says`, `Picking the choice that repeats the most words from the example`, `Recalling outside facts about the example's subject`],
            correctAnswer: 0,
            explanation: `Function questions test rhetorical purpose, not content. The correct answer describes the job the example performs in the argument (illustrate, support, concede, rebut, qualify). Restating the content or matching vocabulary ignores the question being asked.`
          },
          {
            question: `Mid-paragraph, an author writes a strong claim and then immediately adds "or so its advocates contend." This signals that the strong claim:`,
            options: [`Represents the advocates' view, which the author may be about to challenge — not necessarily the author's own position`, `Is the author's firmly held conclusion`, `Is a proven empirical fact`, `Should be ignored entirely`],
            correctAnswer: 0,
            explanation: `The attribution "or so its advocates contend" assigns the claim to others and distances the author from it, often foreshadowing a rebuttal. Tracking whose voice a sentence expresses is essential; CARS routinely plants opposing claims to test whether you attribute them correctly.`
          },
          {
            question: `An author supports a sweeping claim using only a single vivid personal story. The best critique of this evidentiary choice is that the story:`,
            options: [`Is anecdotal and may be unrepresentative, so it cannot by itself justify a general conclusion`, `Is too boring to be persuasive`, `Proves the claim conclusively`, `Is irrelevant because stories are never evidence`],
            correctAnswer: 0,
            explanation: `A single anecdote can illustrate a possibility and engage the reader, but it provides no assurance of being typical, so it cannot establish a broad generalization. The flaw is unrepresentativeness, not that stories can never be evidence at all.`
          }
        ]
      }
    },
    {
      id: 'cr6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Empirical data > expert opinion > historical precedent > anecdote > hypothetical
- "Primary purpose" questions test function, not content
- Use surrounding pivot words ("yet," "but," "granted") to read function
- Track WHOSE view a sentence expresses — opponents' claims are often planted
- Single case studies illustrate possibility but don't prove general claims`
    }
  ]
};
