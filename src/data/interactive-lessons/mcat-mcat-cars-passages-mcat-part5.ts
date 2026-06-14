export const mcatCarsPsgPart5Data = {
  topicSlug: 'mcat-cars-passages-mcat',
  sections: [
    {
      id: 'cp5-intro',
      type: 'text' as const,
      content: `# CARS Passage Types

**Part 5 of 7 — Ethics & Morality Passages**

### Common Ethics Topics on CARS

- Medical ethics (autonomy, beneficence, justice)
- Environmental ethics
- Technology and privacy
- Social justice and equality
- Cultural relativism vs. universal morals

### Key Ethical Frameworks

| Framework | Core Idea | Key Thinker(s) |
|-----------|-----------|----------------|
| **Utilitarianism** | Greatest good for greatest number | Mill, Bentham |
| **Deontology** | Duty-based; some actions are inherently right/wrong | Kant |
| **Virtue Ethics** | Character matters; be a good person | Aristotle |
| **Rights-Based** | Individual rights are paramount | Locke |
| **Social Contract** | Society is based on implicit agreements | Hobbes, Rousseau |

### Strategy for Ethics Passages

- Identify WHICH ethical framework the author uses (or critiques)
- Note when the author appeals to consequences vs. principles vs. character
- Ethics passages often have a "but" — the author concedes one side before arguing the other
- **Do NOT import your own ethical views** — answer based on the passage only!`
    },
    {
      id: 'cp5-worked-example',
      type: 'text' as const,
      content: `### Worked Example — Identifying Ethical Frameworks in Play

> *"When a triage physician allocates a single ventilator, the utilitarian counsel is plain: save the patient with the greater expected years of life, for that produces the most good. Critics recoil, and rightly so, but their recoil is often misdescribed. They are not, in the main, denying that consequences matter. They are insisting that a person is not merely a vessel of future well-being to be totted up and compared. To treat the older patient as automatically expendable is to deny her a standing that does not fluctuate with her actuarial prospects. The deepest objection to bedside utilitarianism, then, is not that it miscalculates, but that calculation was never the whole of the moral question."*

**Sorting the ethics:**

- **Framework 1 — Utilitarianism:** "save the patient with the greater expected years of life... produces the most good." Consequence-maximizing; people compared by expected well-being.
- **Framework 2 — Deontology / rights-based:** the critics' view that a person has "a standing that does not fluctuate with her actuarial prospects." This is the Kantian intuition that persons have inherent worth, not merely instrumental value.
- **The author's framing:** Crucially, the author *re-describes* the critics. They are "not... denying that consequences matter" — so this is not a crude consequences-vs.-nothing fight. The real dispute is whether calculation is "the whole of the moral question."

**The trap to avoid:** A weak reader hears "critics recoil" and concludes the author thinks utilitarianism is simply wrong, or that consequences don't matter. The author says the opposite — consequences matter, *but they are not the whole story*. The author is **sympathetic to the deontological objection** while refusing to caricature utilitarianism.

**How CARS tests this:**
- *Application:* "Which scenario reflects the critics' principle?" → one where a person's worth is held fixed regardless of their usefulness.
- *Tone:* The author sides with the critics' deeper point ("rightly so") yet treats utilitarianism fairly.

> **Takeaway:** Ethics passages reward you for naming the framework *and* the precise point of disagreement. Often the clash is not "consequences vs. duty" but a subtler question: *is consequence the whole of morality, or only part of it?*`
    },
    {
      id: 'cp5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Ethics Passages** 🎯`,
      exercise: {
        questions: [
          {
            question: `An author argues that a policy should be evaluated solely on whether it maximizes overall well-being. This aligns with:`,
            options: [`Utilitarianism`, `Deontology`, `Virtue ethics`, `Social contract theory`],
            correctAnswer: 0,
            explanation: `Utilitarianism judges actions by their consequences — specifically whether they maximize total well-being/happiness. Key phrase: "greatest good for the greatest number."`
          },
          {
            question: `In the worked-example excerpt, the critics' core objection to bedside utilitarianism is that:`,
            options: [`Consequences are completely irrelevant to medical ethics`, `A person has an inherent standing that should not depend on her expected future well-being`, `Older patients always deserve priority over younger patients`, `Triage decisions should be made randomly`],
            correctAnswer: 1,
            explanation: `The passage states the critics insist "a person is not merely a vessel of future well-being" and has "a standing that does not fluctuate with her actuarial prospects." This is the deontological idea of inherent worth — not a denial that consequences matter at all (the author explicitly rules that reading out).`
          },
          {
            question: `Which ethical framework best describes the critics' position as the author characterizes it?`,
            options: [`Utilitarianism`, `A deontological / rights-based view emphasizing the inherent worth of persons`, `Virtue ethics centered on the physician's character`, `Social contract theory`],
            correctAnswer: 1,
            explanation: `Holding that a person possesses a "standing" independent of her usefulness or expected outcomes is the hallmark of Kantian deontology and rights-based ethics — persons have intrinsic, not merely instrumental, value.`
          },
          {
            question: `The author writes that the critics' "recoil is often misdescribed." This statement primarily functions to:`,
            options: [`Dismiss the critics as confused`, `Clarify that the critics accept that consequences matter, narrowing the true point of disagreement`, `Prove that utilitarianism is correct`, `Argue that the critics secretly favor utilitarianism`],
            correctAnswer: 1,
            explanation: `The author corrects a common misreading: the critics are "not... denying that consequences matter." This refinement sharpens the real dispute — whether calculation is "the whole of the moral question" — rather than dismissing or converting the critics.`
          }
        ]
      }
    },
    {
      id: 'cp5-quiz2',
      type: 'multiple-choice' as const,
      content: `### Exit Ticket — Application & Synthesis`,
      exercise: {
        questions: [
          {
            question: `Which scenario best illustrates the principle the critics defend?`,
            options: [`A hospital ranks transplant candidates strictly by projected years of life gained`, `A clinician refuses to treat a patient as less worthy of care simply because she is elderly and statistically has fewer years left`, `A policy distributes vaccines to maximize total lives saved`, `An ethics board calculates the net well-being of each possible allocation`],
            correctAnswer: 1,
            explanation: `The critics hold that a person's moral standing "does not fluctuate with her actuarial prospects." Refusing to downgrade the elderly patient's worth on the basis of her statistics directly enacts that principle. Options A, C, and D are all consequence-maximizing (utilitarian) approaches.`
          },
          {
            question: `Which statement, if added to the passage, would most directly CHALLENGE the author's framing of the debate?`,
            options: [`Evidence that the critics, in practice, do reject any role for consequences and would never weigh expected outcomes at all`, `A reminder that ventilators are sometimes scarce`, `A note that utilitarianism was developed by Mill and Bentham`, `An observation that triage occurs in emergencies`],
            correctAnswer: 0,
            explanation: `The author's framing rests on the claim that the critics "are not... denying that consequences matter." If the critics in fact reject consequences entirely, the author has mischaracterized the dispute, and the "calculation is not the whole story" framing collapses. The other options are background detail.`
          },
          {
            question: `The passage's closing line — the deepest objection is "not that it miscalculates, but that calculation was never the whole of the moral question" — most strongly implies that the author believes:`,
            options: [`Moral reasoning should ignore consequences altogether`, `Weighing consequences is a legitimate part of ethics, but it cannot be the entirety of moral evaluation`, `Triage decisions are impossible to make ethically`, `Utilitarianism and deontology are identical in practice`],
            correctAnswer: 1,
            explanation: `By rejecting "miscalculates" and instead faulting the idea that calculation is "the whole," the author preserves a role for consequences while denying that they exhaust morality. Option A overshoots into rejecting consequences; the closing line specifically resists that extreme.`
          }
        ]
      }
    },
    {
      id: 'cp5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Know the basic ethical frameworks — they provide context for understanding arguments
- Don't inject your own moral views — answer from the author's perspective
- Ethics passages often present a dilemma with competing values
- Watch for consequences-based (utilitarian) vs. principle-based (deontological) reasoning
- Name both the framework AND the precise point of disagreement — the clash is often subtler than "duty vs. consequences"
- Application questions reward matching a scenario to the underlying principle, not to surface keywords`
    }
  ]
};
