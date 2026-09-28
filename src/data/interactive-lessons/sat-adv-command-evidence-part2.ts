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
        'It is accurate and echoes the first clause, so it feels complete even though abandonment is left unsupported',
        'It reports medians, and a conclusion about how long customers waited can only be supported by mean wait times',
        'It is actually correct, since the claim about abandonment describes no change and so needs no support',
        'Its figures of 11 and 4 minutes are too precise to have been drawn from the kind of table the student compiled'
      ],
      correctAnswer: 0,
      explanation: `This is the Half-Supporter. The conclusion's shape is "A but not B" — targeted step improved, outcome didn't. A choice supporting only A leaves the conclusion's distinctive claim (the *without*) completely unestablished; a reader shown only the wait drop would reasonably infer abandonment fell too, which is what the conclusion denies. It gets chosen because verification ("is this true? is it on-topic?") passes, and the shape check never runs. The "actually correct" choice states the exact error as if it were a principle — every clause of a conclusion needs support, and the "without" clause is the half that makes this conclusion worth stating. The medians-versus-means and too-precise choices invent technical objections the item doesn't contain; hard items defeat you with logic, not gotcha arithmetic.`
    },
    {
      id: 'advce2-q2',
      type: 'quiz' as const,
      question: `A table shows a job-training program's graduates earning 22 percent more after the program, while an eligible-but-unenrolled comparison group earned 21 percent more over the same period. The student's conclusion: "the data give little reason to credit the program for graduates' earnings growth." Which distractor is most dangerous on this item, and why?`,
      options: [
        'The choice citing the comparison group\'s 21 percent growth alone, because it leaves out the graduates\' own gain',
        'The choice noting that both groups were eligible for the program, because eligibility has no bearing on the conclusion',
        'The choice reporting the graduates\' 22 percent gain, because it is the headline figure the program\'s backers would cite',
        'The choice comparing the two groups\' baseline earnings, because baseline earnings never matter in a comparison like this'
      ],
      correctAnswer: 2,
      explanation: `Wrong-Team Citation. The student is the skeptic; her case *is* the near-identical 21 percent in the unenrolled group, which shows the growth happened with or without the program. The 22 percent figure is what your eye grabbed first and what a believer's press release would quote — citing it in support of a skeptical conclusion argues for the other side. It is dangerous precisely because it is the most prominent true number on the page. The comparison-group-alone choice describes a genuine but weaker trap: the comparison figure alone is half of the skeptic's two-number argument, tempting but less magnetic than the headline. The eligibility and baseline choices are misstatements — eligibility defines the comparison's fairness, and baselines often matter greatly (they're just not what this conclusion turns on).`
    },
    {
      id: 'advce2-q3',
      type: 'quiz' as const,
      question: `A student claims: "the mayor's correspondence shows him yielding ground in private while conceding nothing in public." A distractor quotation reads: "At the podium he told the crowd that the project might, after all, be reconsidered." What single feature defeats this quotation?`,
      options: [
        'The word "might," which is too hedged to count as a real concession, whether public or private',
        'The phrase "at the podium... told the crowd," which puts the concession in public, where the claim forbids it',
        'The phrase "after all," which shows the mayor had settled the question in private, as the claim predicts',
        'The phrase "be reconsidered," which concerns the project\'s schedule, not the substance of the plan'
      ],
      correctAnswer: 1,
      explanation: `The claim's restrictive structure is "yields in private / never in public," so the public setting is the tripwire, and "at the podium... told the crowd" trips it: a concession made to a crowd is a public concession, which the claim says never happens. This is the One-Word Kill — the quote shows the right phenomenon (yielding) through the forbidden channel, like the character who objects "to his face" in a claim about avoiding confrontation. The "might" choice argues about degree, but hedged yielding in public still violates the claim; degree quibbles are slower and weaker than the setting violation. The "after all" choice invents a private backstory the quotation never mentions; the phrase marks a change of position, and a private settlement would not defeat the quote in any case. The schedule choice invents a reading the quote doesn't state.`
    }
  ]
}
