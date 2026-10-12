export const satTextStructurePurposePart4Data = {
  topicSlug: 'sat-text-structure-purpose',
  sections: [
    {
      id: 'tsp4-intro',
      type: 'text' as const,
      content: `# The Function of a Sentence

**Part 4 of 7 — What Job Does This Sentence Do?**

Function questions point at one sentence (or a phrase, or the last two sentences) and ask: *"Which choice best describes the function of [this part] in the text as a whole?"*

A sentence's function is always **relative to the sentences around it**. The same sentence can be evidence in one text and a counterargument in another.

### The Common Jobs

| Function | Typical cues | What it does for its neighbors |
|---|---|---|
| Background / context | dates, "for decades," setting | Sets up what follows |
| Claim | "argues," "the best explanation is" | States a position the text supports |
| Evidence | data, a study, "researchers found" | Backs up a claim |
| Example / illustration | "for instance," "one case," a named instance | Makes a general point concrete |
| Concession | "admittedly," "to be sure," "may be true," "while deserved" | Grants a point before turning away from it |
| Counterclaim | "some argue," "critics say" | Presents a view the author will answer |
| Qualification | "only," "at least in," "however, this applies to" | Limits the scope of a claim |
| Pivot / challenge | "but," "yet," "however," "in fact" | Turns the text toward its real point |
| Explanation | "because," "the reason," "this happens when" | Gives a cause or mechanism |
| Implication / conclusion | "thus," "in other words," "this suggests" | Draws out what the earlier sentences mean |

### Two Tests That Find the Function

1. **The deletion test.** Imagine the sentence gone. What would the text lose? A missing example leaves a claim unsupported; a missing concession makes the author sound one-sided.
2. **The receipt test.** Look at the **next** sentence. It usually shows what the target sentence was for: a concession is followed by "But..."; a counterclaim is followed by a rebuttal; a claim is followed by evidence.`,
    },
    {
      id: 'tsp4-quiz',
      type: 'multiple-choice' as const,
      content: '**Practice: Naming the Job** 🎯',
      exercise: {
        questions: [
          {
            question: `Some people assume that plants need soil to grow. Hydroponic farms prove otherwise. At one farm outside Denver, lettuce grows with its roots dangling in trays of flowing water enriched with nutrients, and the farm harvests a new crop every four weeks.

Which choice best describes the function of the third sentence in the text as a whole?`,
            options: [
              `It presents the assumption that the second sentence goes on to challenge.`,
              `It gives a specific example that supports the claim made in the second sentence.`,
              `It explains why the farm near Denver decided to stop growing its lettuce in soil.`,
              `It describes a problem with lettuce harvests that hydroponic farms have not yet solved.`,
            ],
            correctAnswer: 1,
            explanation: `The second sentence claims hydroponic farms prove plants don't need soil, and the third sentence backs that claim with a concrete case (lettuce growing in nutrient water). The assumption is stated in the first sentence, not the third. The text never says the farm once used soil, and a harvest every four weeks is a success, not a problem.`,
          },
          {
            question: `Electric scooters have been blamed for cluttering sidewalks in many cities. That complaint is not without merit. But a two-year study in one midsize city found that most scooter trips replaced car trips rather than walks, cutting traffic in the busiest parts of downtown.

Which choice best describes the function of the second sentence in the text as a whole?`,
            options: [
              `It rejects the complaint described in the first sentence as having no basis in fact.`,
              `It introduces the two-year study whose findings are reported in the third sentence.`,
              `It concedes that a criticism has some basis before the text turns to a benefit.`,
              `It states the main conclusion that the study described later then confirms.`,
            ],
            correctAnswer: 2,
            explanation: `"Not without merit" grants that the clutter complaint is partly fair, and the "But" that follows turns to a benefit of scooters, which is the classic concession move. The sentence agrees with the complaint rather than rejecting it, the study is introduced only in the third sentence, and the study does not confirm the clutter complaint.`,
          },
          {
            question: `Studies of twins have found that height is strongly influenced by genes: identical twins usually end up within a few centimeters of each other. Such findings apply, however, only to people who grew up with adequate food. In populations where childhood nutrition varied widely, differences in diet explain far more of the variation in adult height.

Which choice best describes the function of the second sentence in the text as a whole?`,
            options: [
              `It offers additional evidence that genes are the main influence on height.`,
              `It explains how researchers measured the heights of the identical twins.`,
              `It presents a conclusion that the third sentence goes on to reject.`,
              `It limits the scope of the finding described in the first sentence.`,
            ],
            correctAnswer: 3,
            explanation: `"Apply, however, only to" restricts the twin findings to well-fed populations, so the sentence qualifies, or limits, the first sentence's finding. It does not add evidence for genes (it narrows where that evidence holds), it says nothing about measurement, and the third sentence supports it rather than rejecting it.`,
          },
        ],
      },
    },
    {
      id: 'tsp4-text2',
      type: 'text' as const,
      content: `## Worked Example: Functions in a Five-Move Text

> (1) The violin maker Antonio Stradivari is often said to have used a secret varnish. (2) Chemists who have analyzed flakes of it have found mostly ordinary ingredients: oils, resins, and pigments that any workshop of his time could buy. (3) What sets his instruments apart, these chemists suggest, may lie beneath the varnish. (4) The wood itself appears to have been treated with minerals, possibly to protect it from worms, which would have changed how it vibrates.

| Sentence | Function | Receipt (what the next sentence does with it) |
|---|---|---|
| 1 | Presents a popular belief | Sentence 2 tests the belief |
| 2 | Evidence **against** the belief | Sentence 3 redirects the search |
| 3 | Pivot to a new possibility | Sentence 4 supports it |
| 4 | Evidence **for** the new possibility | (end of text) |

**Q: What is the function of sentence 2?**
- ✅ *It presents findings that cast doubt on a popular explanation.*
- ❌ *It explains why Stradivari chose ordinary ingredients.* (content the text never gives)
- ❌ *It provides evidence that the varnish was secret.* (reverses the relationship)
- ❌ *It introduces the wood treatment described later.* (that is sentence 3's and 4's job)

### Three Function Traps

| Trap | What it looks like |
|---|---|
| Content, not function | The choice restates what the sentence says ("It states that chemists found oils") instead of naming its job |
| Right job, wrong target | "Supports the claim in sentence 1" when the sentence actually supports sentence 3 |
| Concession read as retraction | Treating "That praise, while deserved" as the author giving up the argument |`,
    },
    {
      id: 'tsp4-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Practice: Function in Context** 🎯',
      exercise: {
        questions: [
          {
            question: `For two centuries, scholars treated the diaries of ship's surgeon Thomas Avery as a reliable record of life at sea. They are vivid, detailed, and full of dates. They are also, a new study argues, partly copied. Linguist Mira Okafor found that long passages match, nearly word for word, a popular travel book published a decade before Avery sailed.

Which choice best describes the function of the sentence "They are vivid, detailed, and full of dates" in the text as a whole?`,
            options: [
              `It suggests why the diaries were trusted, setting up the challenge that follows.`,
              `It provides the evidence that Okafor used to show that the diaries were copied.`,
              `It summarizes the main findings of the new study described later in the text.`,
              `It describes the travel book that Avery's diaries were found to closely match.`,
            ],
            correctAnswer: 0,
            explanation: `Coming right after "treated... as a reliable record," the sentence lists qualities that explain the trust, and the next sentence ("They are also... partly copied") challenges that trust. Okafor's evidence is the matching passages, not the diaries' vividness; the study's finding is the copying; and the sentence describes the diaries, not the travel book.`,
          },
          {
            question: `Animals that live in caves often lose traits they no longer need. The Mexican tetra is a striking case. Populations of this fish that live in dark caves have lost their eyes entirely, while members of the same species living in nearby rivers still have working eyes.

Which choice best describes the function of the third sentence in the text as a whole?`,
            options: [
              `It presents an exception to the general pattern described in the first sentence.`,
              `It explains why fish that live in rivers need working eyes more than cave fish do.`,
              `It introduces a second species for comparison with the Mexican tetra.`,
              `It provides details showing how the tetra illustrates the pattern stated earlier.`,
            ],
            correctAnswer: 3,
            explanation: `Sentence 1 states a pattern (cave animals lose unneeded traits), sentence 2 names the tetra as a case, and sentence 3 supplies the details that make it a case: cave populations lost their eyes. That fits the pattern rather than breaking it. The river fish belong to the same species, and no reason for their need for eyes is given.`,
          },
          {
            question: `Ancient Roman concrete has survived two thousand years of seawater that would crumble most modern concrete within decades. Researchers studying samples from Roman harbor walls found that seawater seeping into the concrete reacted with volcanic ash in the mix, growing new mineral crystals that filled cracks as they formed. The material, in other words, grew stronger the longer it was exposed to the sea.

Which choice best describes the function of the last sentence in the text as a whole?`,
            options: [
              `It raises a doubt about the researchers' explanation of the concrete's durability.`,
              `It restates the significance of the finding described in the previous sentence.`,
              `It introduces a contrast between Roman concrete and modern concrete.`,
              `It provides new evidence that seawater weakens most modern concrete.`,
            ],
            correctAnswer: 1,
            explanation: `"In other words" signals a restatement: the crystal growth described in the second sentence means the concrete strengthened over time, which is the finding's significance. The sentence agrees with the researchers rather than doubting them, the contrast with modern concrete appears in the first sentence, and no new evidence about modern concrete is offered.`,
          },
        ],
      },
    },
    {
      id: 'tsp4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Function Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          '"Admittedly" or "To be sure" usually signals a [concession|conclusion|definition|new topic]',
          'A sentence saying a finding holds "only" for some group [qualifies a claim|proves a claim|introduces a counterexample|summarizes the text]',
          'To find a sentence\'s function, ask what the text would [lose if the sentence were deleted|gain from a longer sentence|look like with no title|say about the author]',
          'A choice that restates what a sentence says rather than what it does is usually [a trap|correct|the best summary|partly right]',
        ],
        correctAnswers: ['concession', 'qualifies a claim', 'lose if the sentence were deleted', 'a trap'],
        hint1: 'Granting a point before turning = concession.',
        hint2: '"Only" narrows a claim.',
        hint3: 'Function = the job the sentence does for the others.',
        explanation: '"Admittedly" signals a concession, "only" qualifies, the deletion test reveals a sentence\'s job, and a choice that merely restates content misses the function.',
      },
    },
    {
      id: 'tsp4-summary',
      type: 'text' as const,
      content: `## Part 4 Summary

| Concept | Rule |
|---|---|
| Function is relative | Judge a sentence by what it does for its neighbors |
| Deletion test | What would the text lose without it? |
| Receipt test | The next sentence shows what the target sentence was for |
| Common jobs | Background, claim, evidence, example, concession, counterclaim, qualification, pivot, explanation, implication |
| Traps | Content not function; right job, wrong target; concession read as retraction |

*Next: Purpose and Structure in Literary Texts →*`,
    },
  ],
}
