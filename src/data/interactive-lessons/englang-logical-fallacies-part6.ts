export const englangLogicalFallaciesPart6Data = {
  topicSlug: 'englang-logical-fallacies',
  sections: [
    {
      id: 'englangl6-intro',
      type: 'text' as const,
      content: `
# ⚠️ Logical Fallacies

**Part 6 of 7 — Exam Practice: Franklin's 1790 Satire, Revising Faulty Sentences, and a Sound Argument Essay**

---

| Section |
|---------|
| 📖 Passage: Franklin, "On the Slave Trade" (1790) |
| Passage Set, Questions 1–4 |
| Section I Writing: Fixing Faulty Reasoning in a Draft |
| Avoiding Flawed Reasoning in Your Own Argument (Question 3) |
| An Annotated Model Mapped to the Rubric |

> 🔑 **Key Concept:** Reasoning is tested in both halves of the exam. Section I reading questions ask you to evaluate a writer's line of reasoning; Section I writing questions ask you to revise a student's flawed sentence; and the argument essay (Question 3) is scored on whether your own reasoning holds. This part practices all three.
`
    },
    {
      id: 'englangl6-passage',
      type: 'text' as const,
      content: `
## 📖 Passage: Franklin, "On the Slave Trade" (1790)

**Situation.** In February 1790, antislavery petitions, including one signed by Benjamin Franklin as president of the Pennsylvania abolition society, reached the new Congress. Congressman James Jackson of Georgia answered them with a speech defending slavery. Less than a month before his death, Franklin replied in a Philadelphia newspaper under the pen name "Historicus." He claimed that Jackson's speech reminded him of one given about a century earlier by "Sidi Mehemet Ibrahim," an official in Algiers, against a petition from a sect called the "erika, or purists," who wanted Algiers to stop enslaving captured Christian sailors. The Algerian speech is Franklin's invention. At the time, American sailors were themselves being held captive in Algiers.

Franklin introduces the speech this way:

> If therefore, some of its reasonings are to be found in his eloquent speech, it may only show, that men's interests operate, and are operated on, with surprising similarity, in all countries and climates, whenever they are under similar circumstances.

Four excerpts from the invented speech follow, in order. The text follows the 1806 London edition of Franklin's works, including its spellings ("burthen," "christians").

> **[1]** Have these erika considered the consequences of granting their petition? If we cease our cruises against the christians, how shall we be furnished with the commodities their countries produce, and which are so necessary for us? If we forbear to make slaves of their people, who, in this hot climate, are to cultivate our lands? Who are to perform the common labours of our city, and of our families? Must we not then be our own slaves?
>
> **[2]** And what is there so pitiable in their present condition? Were they not slaves in their own countries? Are not Spain, Portugal, France, and the Italian states, governed by despots, who hold all their subjects in slavery, without exception? Even England treats her sailors as slaves, for they are, whenever the government pleases, seized and confined in ships of war, condemned not only to work, but to fight for small wages, or a mere subsistence, not better than our slaves are allowed by us. Is their condition then made worse by their falling into our hands? no; they have only exchanged one slavery for another; and I may say a better.
>
> **[3]** If some of the religious mad bigots, who now tease us with their silly petitions, have, in a fit of blind zeal, freed their slaves, it was not generosity, it was not humanity, that moved them to the action; it was from the conscious burthen of a load of sins, and hope, from the supposed merits of so good a work, to be excused from damnation.
>
> **[4]** *The council's resolution, as Franklin reports it:* "That the doctrine, that the plundering and enslaving the christians is unjust, is at best problematical; but that it is the interest of this state to continue the practice is clear; therefore, let the petition be rejected."
>
> — Benjamin Franklin ("Historicus"), "On the Slave Trade," March 1790

### Mapping the Speaker's Reasoning

| Excerpt | The speaker's move | Why it fails as an answer to "Is this unjust?" |
|---|---|---|
| [1] | Consequences for the enslavers: lost goods, lost labor | Shows the practice is **profitable**, which is a different question from whether it is just |
| [2] | Comparison: the captives were already unfree at home, and England treats its sailors no better | Other wrongs, real or not, do not make this one right; the comparison changes the subject |
| [3] | Motives: the petitioners act from guilt and fear of damnation, not humanity | An attack on motives leaves the petitioners' **argument** untouched |
| [4] | The verdict: justice is "problematical," interest is "clear" | States the hidden premise openly: interest outweighs justice |

Franklin never labels a single fallacy. Like Lincoln in Part 3, he lets an argument expose itself by **moving it**. Readers who would reject these reasons in the mouth of an Algerian official holding Christian captives must ask why they accept the same reasons at home. The satire is an argument by analogy, and it is a **sound** analogy because the two cases match in the feature that matters: one group enslaves another and defends the practice by its own profit.
`
    },
    {
      id: 'englangl6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Passage Set, Questions 1–4** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Franklin\'s decision to attribute the speech to an Algerian official primarily serves to',
            options: [
              'let readers judge familiar arguments without their usual loyalty to those who make them',
              'inform American readers about the history and customs of the government of Algiers',
              'warn American readers that the ships of Algiers posed a new threat to their trade',
              'show that the arguments against the petition came from a respected foreign statesman'
            ],
            correctAnswer: 0,
            explanation: 'Moving the arguments into an Algerian context lets American readers see them from outside, without the self-interest that made them seem reasonable at home. The speech is invented, so it is not a history lesson or a news warning, and the satire makes its speaker absurd rather than respected.'
          },
          {
            question: 'In excerpt 2, the claim that the captives "have only exchanged one slavery for another" is weakest because',
            options: [
              'wrongs done elsewhere do not make this practice just',
              'it depends on figures the speaker never cites',
              'it admits that England treats its sailors justly',
              'it grants that the captives were free in their homelands'
            ],
            correctAnswer: 0,
            explanation: 'Pointing to despots and press gangs elsewhere changes the subject; even if those were real wrongs, they would not make the Algerian practice just. The speaker cites no figures here, calls England\'s treatment slavery rather than justice, and claims the captives were not free at home.'
          },
          {
            question: 'In excerpt 3, the speaker responds to those who have freed their slaves by',
            options: [
              'questioning their motives instead of answering their reasons',
              'citing religious law to show that their action was forbidden',
              'predicting that their example will spread throughout Algiers',
              'conceding that their action was generous but unwise in effect'
            ],
            correctAnswer: 0,
            explanation: 'The speaker says it was "not generosity" or "humanity" but guilt that moved them, an attack on motives that ignores whether freeing slaves is right. He cites no law in this excerpt, predicts nothing about the example spreading, and denies rather than grants their generosity.'
          },
          {
            question: 'The council\'s resolution (excerpt 4) is central to Franklin\'s satire chiefly because it',
            options: [
              'admits that interest rather than justice decided the case',
              'proves that the petitioners\' charge of injustice was mistaken',
              'shows that the council was persuaded by a religious argument',
              'reveals that the council feared a revolt among the captives'
            ],
            correctAnswer: 0,
            explanation: 'The resolution calls the injustice "problematical" but the interest "clear," saying aloud the premise the speech hid, and Franklin\'s frame invites readers to see the same premise in Jackson\'s speech. It proves nothing about injustice, rests on interest rather than religion, and mentions no revolt.'
          }
        ]
      }
    },
    {
      id: 'englangl6-revising',
      type: 'text' as const,
      content: `
## Section I Writing: Fixing Faulty Reasoning in a Draft

Section I writing questions often present a student's draft and ask which revision "best" accomplishes a goal. When the goal involves reasoning, look for the revision that **matches the claim to the evidence**: not the one that sounds most confident, and not the one that hedges until it says nothing.

| Draft sentence | Problem | Better revision |
|---|---|---|
| "Ever since the city added a curfew, vandalism has dropped, so the curfew worked." | Sequence taken as cause | "Vandalism dropped after the curfew began, though the city also added street lighting that year, so the curfew's share of the change is unclear." |
| "Scientists agree that homework is pointless." | Overgeneralization and vague authority | "Several studies of elementary students have found little link between homework and achievement." |
| "Either we ban junk food in schools or childhood obesity will keep rising." | Only two options offered | "Limiting junk food in schools is one of several steps, along with more physical activity, that could slow the rise in childhood obesity." |
| "Opponents of the plan are just afraid of change." | Attack on motives | "Opponents of the plan worry about its cost, a concern the budget figures answer." |

### The Over-Hedging Trap

The fix for an overgeneralization is a **precise** claim, not a timid one. "Some people might possibly think homework could perhaps be less useful in some cases" is no longer false, but it no longer argues anything. Qualify to match your evidence, then commit to the claim that remains (skill 4.C).
`
    },
    {
      id: 'englangl6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Section I Writing Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student writes: "Since the school installed new security cameras, test scores have gone up, so the cameras improved learning." Which revision best corrects the faulty reasoning while keeping a claim worth making?',
            options: [
              'Test scores have gone up since the cameras were installed, which proves the cameras improved learning.',
              'Test scores rose after the cameras arrived, but a new tutoring program may explain the rise.',
              'Test scores have gone up sharply since the cameras arrived, so the cameras must have improved learning.',
              'Many people believe the cameras improved learning, since test scores rose after they were installed.'
            ],
            correctAnswer: 1,
            explanation: 'This revision keeps the observed sequence but names a rival explanation for it, so it no longer treats "after" as "because." The other versions intensify the causal claim or rest it on what "many people believe," which adds popularity without adding evidence.'
          },
          {
            question: 'A student\'s draft reads: "Teenagers today never read books because they are always on their phones." Which revision is most appropriate for an argument essay?',
            options: [
              'Some teenagers may read less, but phones are the only reason any of them ever do.',
              'Teenagers today never read books, as any teacher or parent can plainly see.',
              'Many teenagers read fewer books than earlier generations, and phones may be one cause.',
              'Teenagers today rarely read books, so phones have clearly ruined their interest in ideas.'
            ],
            correctAnswer: 2,
            explanation: 'The revision narrows "never" to "fewer" and offers phones as one possible cause, matching the claim to what evidence could support. The other versions keep an absolute, lean on what "any teacher or parent can plainly see," or still claim a single, certain cause.'
          }
        ]
      }
    },
    {
      id: 'englangl6-essay',
      type: 'text' as const,
      content: `
## Avoiding Flawed Reasoning in Your Own Argument (Question 3)

**Practice prompt.** In 1790, Benjamin Franklin suggested that "men's interests operate, and are operated on, with surprising similarity, in all countries and climates." Write an essay that argues your position on the extent to which self-interest shapes people's moral judgments.

### A Pre-Writing Check for Your Own Reasoning

| Before you write a claim, ask... | The flaw it prevents |
|---|---|
| Does my evidence cover the whole group my claim names? | Generalizing from too few cases |
| Have I shown **how** one thing caused another, not just that it came first? | Treating "after" as "because" |
| Am I answering the strongest version of the other side? | Refuting a weaker version of the opposing view |
| Am I criticizing ideas, or the people who hold them? | Attacking people instead of arguments |
| Are there really only two options? | Ignoring options between two extremes |
| Does each body paragraph add support, or restate the thesis? | Circular reasoning that adds no support |

### A Thesis That Leaves Room for Complexity (Row A)

> Self-interest shapes moral judgment most powerfully when people cannot see it operating in themselves, but it does not have the last word: when people are made to see their own reasoning from the outside, principle can prevail.

This thesis takes a **defensible position** with a built-in tension. It does not claim that everyone is always selfish, which no evidence could support, and it does not deny self-interest's force.
`
    },
    {
      id: 'englangl6-model',
      type: 'text' as const,
      content: `
## An Annotated Model Mapped to the Rubric

The argument rubric awards up to 6 points: **Row A** thesis (0–1), **Row B** evidence and commentary (0–4), and **Row C** sophistication (0–1).

### A Weaker Body Paragraph

> Everyone is selfish when money is involved. For example, Franklin wrote about a man from Algiers who wanted to keep his slaves. Slavery lasted in America until 1865, which proves that people always put money first. People who disagree are just naive.

| Problem | Where | Rubric effect |
|---|---|---|
| Overgeneralization | "Everyone," "always" | A claim no evidence can support |
| Evidence summarized, not explained | Sentence 2 | Names the source but says nothing about how it supports the claim |
| A conclusion the evidence cannot carry | "lasted... until 1865, which proves" | Slavery's duration has many causes; the sentence asserts rather than reasons |
| Attack on opponents | "just naive" | Dismisses the other side instead of answering it |

A paragraph like this one would likely keep the essay in the lower Row B range: the evidence is general, and there is little commentary explaining how it supports the claim.

### A Stronger Body Paragraph (Row B: 4)

> **(1)** Self-interest distorts moral judgment most effectively when people cannot see it working in themselves. **(2)** Benjamin Franklin understood this in 1790, when he answered a congressman's defense of slavery not by contradicting it but by placing the same arguments in the mouth of an invented Algerian official who defends enslaving Christian sailors. **(3)** The official's council concludes that the injustice of the practice "is at best problematical; but that it is the interest of this state to continue the practice is clear." **(4)** American readers, whose own sailors were then held captive in Algiers, could see at once that interest had decided the question for the Algerians. **(5)** The satire works because it removes the reader's stake: reasoning that seems sensible when it protects one's own property looks like naked self-interest when someone else profits from it. **(6)** The lesson is not that people cannot judge morally, but that judgment requires the distance self-interest takes away.

| Sentence | Role | Rubric note |
|---|---|---|
| (1) | Claim, limited to a condition ("when people cannot see it") | Precise, not absolute |
| (2) | Specific evidence with context | Accurate and relevant |
| (3) | Quoted evidence | Short, exact, and chosen for its key contrast |
| (4) | Commentary: the audience's position | Explains why the evidence matters |
| (5) | Commentary: the mechanism | Explains **how** removing self-interest changes judgment |
| (6) | Commentary that returns to the thesis | Answers the prompt directly |

Row B at 4 points requires specific evidence that supports **all** claims in a line of reasoning and commentary that **consistently** explains how the evidence supports it. Sentences (4) through (6) earn that credit; the weaker paragraph has no sentence like them.

### Where Row C Comes From

The thesis already holds a tension: self-interest is powerful, **and** it can be overcome. If a later paragraph shows principle winning (for example, Britain's 1807 abolition of its slave trade over the warnings of merchants and planters), the essay explores that tension instead of asserting one side. That is the "complexities or tensions" the sophistication point rewards. Row C is earned across the whole essay, not by one sentence.
`
    },
    {
      id: 'englangl6-quiz3',
      type: 'multiple-choice' as const,
      content: `
**Exam Practice: The Rubric** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the stronger model paragraph, which sentence does the most to explain how the evidence supports the claim?',
            options: [
              'Sentence 5, on how removing the reader\'s stake changes judgment',
              'Sentence 2, which places Franklin\'s satire in its historical setting',
              'Sentence 3, which quotes the resolution of the Algerian council',
              'Sentence 1, which states the claim that the paragraph will defend'
            ],
            correctAnswer: 0,
            explanation: 'Sentence 5 explains the mechanism by which the satire changes judgment, which is the commentary Row B rewards. Sentences 2 and 3 supply evidence, and sentence 1 states the claim without explaining any evidence.'
          },
          {
            question: 'The weaker paragraph\'s final sentence, "People who disagree are just naive," weakens the essay chiefly because it',
            options: [
              'uses informal diction that is out of place in an academic essay',
              'dismisses an opposing view by insulting it instead of answering it',
              'introduces a counterargument without giving evidence to support it',
              'restates the thesis instead of moving the line of reasoning forward'
            ],
            correctAnswer: 1,
            explanation: 'Calling opponents naive attacks the people rather than their reasons, which leaves the opposing view unanswered and costs the writer credibility. The diction is informal, but that is a smaller problem; the sentence presents no counterargument and does not restate a thesis.'
          }
        ]
      }
    }
  ]
};
