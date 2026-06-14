export const mcatCarsPsgPart4Data = {
  topicSlug: 'mcat-cars-passages-mcat',
  sections: [
    {
      id: 'cp4-intro',
      type: 'text' as const,
      content: `# CARS Passage Types

**Part 4 of 7 — Comparative & Multiple-Perspective Passages**

### Tracking Multiple Viewpoints

Many CARS passages present 2-3 different perspectives on an issue.

### Strategy: The Viewpoint Grid

As you read, mentally track:

| Aspect | Viewpoint A | Viewpoint B | Author |
|--------|------------|------------|--------|
| Main claim | ? | ? | ? |
| Key evidence | ? | ? | ? |
| Tone | ? | ? | ? |

### Common Traps in Multi-Perspective Passages

1. **Attribution errors**: Confusing who said what
2. **Assuming agreement**: Just because the author discusses a view doesn't mean they endorse it
3. **False balance**: The author may present both sides but clearly favor one
4. **Missing the synthesis**: The author may combine elements of both views

### Signal Phrases

- "According to theorist X..." → This is X's view, NOT necessarily the author's
- "While X argues... Y contends..." → Two competing views
- "Although X has merit... the evidence suggests..." → Author is about to side with one view`
    },
    {
      id: 'cp4-worked-example',
      type: 'text' as const,
      content: `### Worked Example — Building a Viewpoint Grid

> *"On the question of why traditional crafts vanish, two schools quarrel. The economists, led by Harlan, insist the cause is simple substitution: machine goods are cheaper, so buyers defect and artisans starve. The cultural historians, following Ndiaye, reply that crafts survive or die on the strength of the meanings communities attach to them — a hand-woven cloth worn at a wedding does not compete with a factory bolt on price at all. Harlan's account is bracingly clear, and clarity has its own seductions. Yet it cannot explain why some 'obsolete' crafts flourish in precisely the markets where cheap substitutes are most abundant. Ndiaye's framework, whatever its looseness, at least leaves room for the puzzle."*

**Build the grid:**

| Aspect | Harlan (economist) | Ndiaye (cultural historian) | Author |
|--------|--------------------|-----------------------------|--------|
| Main claim | Crafts die from price-based substitution | Crafts survive on cultural meaning | Leans toward Ndiaye |
| Key evidence | Machine goods are cheaper | Wedding cloth "does not compete on price" | The "obsolete" crafts that flourish amid cheap substitutes |
| Tone toward it | — | — | Harlan = admires clarity but doubts; Ndiaye = grants "looseness" but prefers |

**Reading the author's stance:**
- "**bracingly clear, and clarity has its own seductions**" — a backhanded compliment. The author is warning you not to be won over by Harlan's neatness.
- "**Yet it cannot explain...**" — the pivot. The flourishing of obsolete crafts is the *anomaly* that breaks Harlan's model.
- "**whatever its looseness, at least leaves room for the puzzle**" — the author concedes Ndiaye is imprecise but judges his framework superior *on explanatory grounds*.

**Conclusion:** The author favors Ndiaye — but for a specific reason (it accommodates the anomaly), not because Ndiaye is more rigorous. A CARS trap answer will say the author "rejects economic explanations entirely" or "finds Ndiaye more rigorous." Both overshoot.

> **Takeaway:** When two named thinkers clash, the author almost always tips one way. Find the pivot ("Yet," "However"), then identify the *single piece of evidence* that does the tipping — here, the flourishing "obsolete" crafts.`
    },
    {
      id: 'cp4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Multiple Perspectives** 🎯`,
      exercise: {
        questions: [
          {
            question: `A passage states: "Smith argues that technology enhances creativity. However, this view overlooks the mounting evidence that passive screen time diminishes it." The author most likely:`,
            options: [`Disagrees with Smith — "overlooks" signals criticism of Smith's position`, `Agrees with Smith`, `Has no opinion`, `Is merely summarizing both views neutrally`],
            correctAnswer: 0,
            explanation: `"However" signals a counterpoint, and "overlooks" implies Smith is wrong or incomplete in their reasoning. The author is positioning against Smith.`
          },
          {
            question: `In the worked-example excerpt, the author's view on why traditional crafts vanish is best described as:`,
            options: [`Fully endorsing Harlan's economic substitution account`, `Favoring Ndiaye's cultural-meaning account because it can accommodate crafts that flourish despite cheap substitutes`, `Rejecting both Harlan and Ndiaye`, `Treating the two accounts as equally persuasive`],
            correctAnswer: 1,
            explanation: `The pivot "Yet it cannot explain..." undercuts Harlan, and "at least leaves room for the puzzle" endorses Ndiaye's framework as more explanatory. The author tips toward Ndiaye — but specifically on explanatory grounds, not by declaring Harlan worthless.`
          },
          {
            question: `The author describes Harlan's account as "bracingly clear, and clarity has its own seductions." This phrasing functions to:`,
            options: [`Praise Harlan's account as the correct one`, `Warn the reader not to be persuaded by Harlan's account merely because it is neat and clear`, `Suggest Harlan's account is deliberately deceptive`, `Indicate the author has no view on Harlan`],
            correctAnswer: 1,
            explanation: `Calling clarity "seductive" is a backhanded compliment: the author acknowledges the appeal of Harlan's tidiness while signaling that this appeal can mislead. It primes the reader for the "Yet" that follows. This is tone/attitude analysis.`
          },
          {
            question: `According to the passage, which observation most directly undermines Harlan's economic account?`,
            options: [`Some "obsolete" crafts flourish in the very markets where cheap substitutes are most abundant`, `Machine-made goods are cheaper than handmade goods`, `Hand-woven cloth is sometimes worn at weddings`, `Cultural historians follow Ndiaye`],
            correctAnswer: 0,
            explanation: `If crafts die purely from cheaper substitutes, they should disappear fastest where substitutes are most plentiful. The flourishing of "obsolete" crafts in exactly those markets is the anomaly Harlan's model "cannot explain" — the passage's decisive evidence.`
          },
          {
            question: `A student claims the author finds Ndiaye's framework more rigorous than Harlan's. This claim is:`,
            options: [`Accurate, since the author calls Ndiaye precise`, `Inaccurate — the author concedes Ndiaye's "looseness" but prefers his framework for its explanatory reach`, `Accurate, since rigor is the only basis for the author's preference`, `Irrelevant to the passage`],
            correctAnswer: 1,
            explanation: `The author explicitly grants Ndiaye's "looseness" (lack of rigor) yet still prefers his framework because it "leaves room for the puzzle." Mistaking the basis of the author's preference — explanatory power, not rigor — is a classic attribution/nuance trap.`
          }
        ]
      }
    },
    {
      id: 'cp4-quiz2',
      type: 'multiple-choice' as const,
      content: `### Exit Ticket — Application & Synthesis`,
      exercise: {
        questions: [
          {
            question: `Suppose a new study shows that the "obsolete" crafts which flourish do so only because governments heavily subsidize them, not because of cultural meaning. This finding would most:`,
            options: [`Strengthen Ndiaye's framework`, `Weaken the author's reason for favoring Ndiaye over Harlan`, `Confirm the author's conclusion`, `Have no bearing on either account`],
            correctAnswer: 1,
            explanation: `The author favors Ndiaye because cultural meaning seemed to explain the flourishing anomaly. If subsidies — not meaning — explain that flourishing, the anomaly no longer supports Ndiaye, eroding the author's stated reason for siding with him. This is a reasoning-beyond-the-text application.`
          },
          {
            question: `Which choice best summarizes the relationship the passage establishes among Harlan, Ndiaye, and the author?`,
            options: [`The author presents two rival explanations and tips toward Ndiaye's on the grounds that it accommodates an anomaly Harlan's cannot`, `The author endorses Harlan and treats Ndiaye as a fringe figure`, `The author shows Harlan and Ndiaye actually agree`, `The author refuses to evaluate either thinker`],
            correctAnswer: 0,
            explanation: `The passage stages Harlan vs. Ndiaye, then uses the flourishing of "obsolete" crafts to favor Ndiaye while still respecting Harlan's clarity. Tracking that the author adjudicates — rather than merely reports — the dispute is the central synthesis skill for multi-perspective passages.`
          }
        ]
      }
    },
    {
      id: 'cp4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Track WHO says WHAT — the #1 skill for multi-perspective passages
- "According to X" ≠ the author's view
- Watch for signal phrases that reveal the author's actual position
- Attribution errors are the most common trap in these passages
- When two named thinkers clash, find the pivot word and the **single piece of evidence** that tips the author
- Pin down *why* the author prefers a view (e.g., explanatory reach) — trap answers swap in the wrong reason or overstate the rejection of the other side`
    }
  ]
};
