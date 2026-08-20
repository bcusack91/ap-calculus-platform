export const lessonData = {
  topicSlug: 'sat-command-evidence-advanced',
  sections: [
    {
      id: 'advce2-intro',
      type: 'text' as const,
      content: `# Command of Evidence: Traps & Speed

**Part 2 of 3 — Why the Wrong Choice Feels Right**

Every hard evidence distractor exploits the same weakness: strong students verify that a choice is **true and on-topic**, then stop. The item is testing a third check — **is it the right shape?**

### The trap logic

**The Half-Supporter.** The conclusion has two clauses; the distractor nails one, usually the first. It *feels* responsive because it echoes the sentence you just read. Defense: before reading choices, write the conclusion as "A **and/but** B." Any choice serving only A or only B is dead, no matter how accurate.

**The Wrong-Team Citation.** On skeptical conclusions ("the data cannot establish...", "gives little reason to credit..."), the table's headline comparison — the biggest gap, the flashiest gain — supports the believer, not the skeptic. Studies of these items show this is the single most-picked wrong answer among high scorers, because the headline number is what your eye extracted first. Defense: identify the student's side, then ask of each choice, "*whose lawyer would cite this?*"

**The One-Word Kill (quotations).** The claim's restrictive phrase — "without confrontation," "never publicly," "through record-keeping" — is a tripwire. The trap quote trips it with a single detail: "to his face," "at the podium," "she rose and said." Defense: underline the restriction; scan each quote *only* for a violation before evaluating anything else. Violations eliminate faster than merits select.

**The Consistent-With-Both Finding (rival hypotheses).** A finding both accounts predict has zero discriminating power, however impressive it sounds. Defense: for each choice ask, "would the rival account also predict this?" If yes, it's out — even if it's the most detailed choice on the page.

### Speed dividend
These checks run in about fifteen seconds and typically eliminate three choices without a second read of the passage. On table items, you often never need to re-read the prose at all — the conclusion's shape plus the numbers decide everything.`
    },
    {
      id: 'advce2-q1',
      type: 'quiz' as const,
      question: `A student's conclusion reads: "Adding the second checkout lane shortened the wait it targeted without reducing how many customers abandoned their carts." A distractor cites only this: "Median checkout wait fell from 11 minutes to 4 after the second lane opened." Why do strong students pick this distractor?`,
      options: [
        'It is accurate and echoes the conclusion\'s first clause, so it feels responsive — but a two-part conclusion needs the wait improvement and the unchanged abandonment rate in a single choice',
        'It uses medians when the conclusion requires means',
        'It is actually correct, because the second clause of the conclusion needs no support',
        'The numbers 11 and 4 are too precise to have come from the table'
      ],
      correctAnswer: 0,
      explanation: `This is the Half-Supporter. The conclusion's shape is "A but not B" — targeted step improved, outcome didn't. A choice supporting only A leaves the conclusion's distinctive claim (the *without*) completely unestablished; a reader shown only the wait drop would reasonably infer abandonment fell too, which is what the conclusion denies. It gets chosen because verification ("is this true? is it on-topic?") passes, and the shape check never runs. Choice C states the exact error as if it were a principle — every clause of a conclusion needs support, and the "without" clause is the half that makes this conclusion worth stating. Choices B and D invent technical objections the item doesn't contain; hard items defeat you with logic, not gotcha arithmetic.`
    },
    {
      id: 'advce2-q2',
      type: 'quiz' as const,
      question: `A table shows a job-training program's graduates earning 22 percent more after the program, while an eligible-but-unenrolled comparison group earned 21 percent more over the same period. The student's conclusion: "the data give little reason to credit the program for graduates' earnings growth." Which distractor is most dangerous on this item, and why?`,
      options: [
        'The choice citing the comparison group\'s 21 percent growth alone, because it omits the graduates',
        'The choice noting that both groups were eligible for the program, because eligibility is irrelevant',
        'The choice reporting that graduates\' earnings rose 22 percent, because it is the table\'s headline result — and it is the number the program\'s defenders, not this student, would cite',
        'The choice comparing the two groups\' baseline earnings, because baselines never matter'
      ],
      correctAnswer: 2,
      explanation: `Wrong-Team Citation. The student is the skeptic; her case *is* the near-identical 21 percent in the unenrolled group, which shows the growth happened with or without the program. The 22 percent figure is what your eye grabbed first and what a believer's press release would quote — citing it in support of a skeptical conclusion argues for the other side. It is dangerous precisely because it is the most prominent true number on the page. Choice A describes a genuine but weaker trap: the comparison figure alone is half of the skeptic's two-number argument, tempting but less magnetic than the headline. Choice B and D are misstatements — eligibility defines the comparison's fairness, and baselines often matter greatly (they're just not what this conclusion turns on).`
    },
    {
      id: 'advce2-q3',
      type: 'quiz' as const,
      question: `A student claims: "the mayor's correspondence shows him yielding ground in private while conceding nothing in public." A distractor quotation reads: "At the podium he told the crowd that the project might, after all, be reconsidered." What single feature defeats this quotation?`,
      options: [
        'The word "might," which is too hedged to count as yielding ground',
        '"At the podium... told the crowd" places the concession in public — the exact half of the claim that forbids concessions',
        'The quotation comes from a speech rather than from the correspondence',
        '"Reconsidered" refers to the project\'s schedule, not its substance'
      ],
      correctAnswer: 1,
      explanation: `The claim's restrictive structure is "yields in private / never in public," so the public setting is the tripwire, and "at the podium... told the crowd" trips it: a concession made to a crowd is a public concession, which the claim says never happens. This is the One-Word Kill — the quote shows the right phenomenon (yielding) through the forbidden channel, like the character who objects "to his face" in a claim about avoiding confrontation. Choice A argues about degree, but hedged yielding in public still violates the claim; degree quibbles are slower and weaker than the setting violation. Choice C is a genuine secondary defect (the claim concerns correspondence), but the decisive, claim-breaking feature is the public setting — an on-source quote with this content would still be wrong. Choice D invents a reading the quote doesn't state.`
    }
  ]
}
