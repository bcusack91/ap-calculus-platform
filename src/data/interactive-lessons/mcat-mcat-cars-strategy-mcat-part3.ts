export const mcatCarsStratPart3Data = {
  topicSlug: 'mcat-cars-strategy-mcat',
  sections: [
    {
      id: 'cs3-intro',
      type: 'text' as const,
      content: `# CARS Strategy

**Part 3 of 7 — Eliminating Wrong Answers**

### The CARS Elimination Framework

On CARS, finding the WRONG answers is often easier than finding the right one.

### Types of Wrong Answers

| Type | Description | Example |
|------|-------------|---------|
| **Too extreme** | Uses absolute language ("always," "never," "all") | "No author has ever addressed this topic" |
| **Out of scope** | Introduces ideas not in the passage | References a theory never mentioned |
| **Opposite** | Reverses the author's position | Says author supports X when author opposes X |
| **Too narrow** | Only addresses a detail, not the main question | Correct for one paragraph but not the whole passage |
| **Distortion** | Takes a passage idea and twists it | Exaggerates a qualified claim |

### The "Goldilocks" Principle

The best CARS answer is usually:
- Not too extreme, not too narrow
- Closely supported by text
- Matches the author's tone
- Addresses the specific question being asked`
    },
    {
      id: 'cs3-worked',
      type: 'text' as const,
      content: `### Worked Example — Eliminating Four Choices by Type

The fastest way to a right answer is often to *name the defect* in each wrong one. Label as you go.

> Passage gist: The author argues that social media has *modestly* eroded long-form reading habits, while conceding that it has also *expanded* access to short informational texts. Net verdict: a mixed, slightly negative effect.

Question: *Which best expresses the author's view of social media's effect on reading?*

**(A)** "Social media has *destroyed* the public's ability to read." — Tag: **too extreme** ("destroyed," "ability"). The author said *modestly eroded*, not destroyed. Cut.

**(B)** "Social media has had *no effect* on reading habits." — Tag: **opposite/contradiction**. The author claims a real, if modest, effect. Cut.

**(C)** "Social media has improved literacy by teaching grammar in comment sections." — Tag: **out of scope**. Grammar in comments was never mentioned; this imports an outside idea. Cut.

**(D)** "Social media has somewhat reduced long-form reading even as it broadened access to short texts." — Tag: **survives**. It is moderate, captures both the erosion and the concession, and matches the author's mixed tone. **Select.**

**The meta-skill.** Three of four wrong answers fell to a *named* flaw — extreme, opposite, out of scope — without your needing to re-derive the right answer from scratch. The surviving choice almost always has the *softest, most qualified* wording ("somewhat," "even as") because CARS authors write with nuance. When two choices remain, prefer the one that (1) stays closest to the text and (2) matches the author's tone. Distrust any option containing "always," "never," "all," "none," "destroyed," or "proves" until the passage explicitly earns that strength.`
    },
    {
      id: 'cs3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Elimination Practice** 🎯`,
      exercise: {
        questions: [
          {
            question: `A passage discusses how modern architecture balances aesthetics with function. The author argues both matter equally. Which answer to "What is the main idea?" is BEST?`,
            options: [`Modern architecture must integrate aesthetic appeal and functional design`, `Function is always more important than aesthetics in modern architecture`, `The aesthetic qualities of modern buildings have been steadily declining`, `Every modern architect prioritizes aesthetics over functional concerns`],
            correctAnswer: 0,
            explanation: `The claim that function is "always" more important than aesthetics is too extreme. The claim that aesthetic qualities are "declining" is never stated — a distortion. The claim that "every" architect prioritizes aesthetics is extreme and reverses the balance (extreme + opposite). Only the choice about integrating aesthetic appeal and functional design captures the balanced main idea.`
          },
          {
            question: `An answer choice states, "No society has ever benefited from this practice," for a passage that gave a balanced, qualified view. The most likely defect is:`,
            options: [`Too extreme — "no... ever" overshoots a qualified passage`, `Out of scope — it introduces a topic the passage never raised`, `Too narrow — it covers only one paragraph of the passage`, `Perfectly correct — strong wording signals the right answer`],
            correctAnswer: 0,
            explanation: `Absolute terms like "no," "ever," "all," and "never" overshoot a nuanced passage. Extreme wording is a hallmark of trap answers in CARS; the correct choice usually mirrors the passage's measured tone rather than amplifying it.`
          },
          {
            question: `A choice accurately describes something in paragraph 2 but the question asks for the main idea of the whole passage. This choice is best rejected as:`,
            options: [`Too narrow — true of a detail but not responsive to the question`, `Out of scope — it goes beyond anything the passage discusses`, `Opposite — it reverses the position the author takes overall`, `Too extreme — it overstates what the paragraph actually says`],
            correctAnswer: 0,
            explanation: `A statement can be factually supported yet still wrong because it answers a narrower question than the one posed. "Too narrow" choices are tempting precisely because they are true; always check that the choice addresses the actual question's scope.`
          },
          {
            question: `When two answer choices remain after elimination, the better tiebreaker is usually to choose the one that:`,
            options: [`Stays closest to the text and matches the author's tone`, `Is worded more forcefully, sounding more certain and decisive`, `Uses more sophisticated, academic-sounding vocabulary`, `Is the longer, more detailed of the two choices`],
            correctAnswer: 0,
            explanation: `CARS rewards fidelity to the passage and tonal consistency. Between two finalists, the choice that hews closest to what the text actually says and reflects the author's attitude wins. Force, vocabulary, and length are not indicators of correctness.`
          },
          {
            question: `An answer choice introduces a famous theory that the passage never mentions, even though the theory is real and relevant to the topic. This choice is:`,
            options: [`Out of scope — CARS answers depend on the passage, not outside truth`, `Correct — bringing in a real, relevant theory strengthens an answer`, `Too narrow — it addresses only one detail rather than the whole topic`, `Opposite — it contradicts the position the author takes in the passage`],
            correctAnswer: 0,
            explanation: `CARS answers must be grounded in the passage. A real, relevant idea that the passage never raises is still out of scope, because the test measures comprehension of the given text rather than outside knowledge. Truth in the world does not make it the right answer here.`
          },
          {
            question: `A passage says a policy "may sometimes reduce costs." Which answer choice is a distortion of this claim?`,
            options: [`"The policy reliably and fully eliminates costs"`, `"The policy can occasionally lower costs"`, `"The policy may help reduce costs in some cases"`, `"The author is cautiously optimistic about cost savings"`],
            correctAnswer: 0,
            explanation: `"Reliably and fully eliminates" inflates a tentative, occasional effect ("may sometimes reduce") into a guaranteed, total one — a distortion. The other options preserve the original hedged strength ("can occasionally," "may... in some cases," "cautiously"), staying faithful to the passage.`
          }
        ]
      }
    },
    {
      id: 'cs3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Eliminate before selecting: easier to find wrong than right
- Tag each wrong answer by type: extreme, out of scope, opposite, narrow, distortion
- Distrust "always/never/all/proves" unless the passage earns it
- Best answers are moderate, text-supported, and match the author's tone
- "Closest to the text" usually wins a two-choice tiebreaker`
    }
  ]
};
