export const englangSynthesisPart6Data = {
  topicSlug: 'englang-synthesis',
  sections: [
    {
      id: 'englangs6-intro',
      type: 'text' as const,
      content: `
# 🧷 Synthesis Writing

**Part 6 of 7 — Exam Practice: Sources in a Q1 Response**

---

| Section |
|---------|
| A Q1-Style Prompt |
| How the Rubric Rewards Source Use |
| Two Paragraphs, Annotated |
| Section I Practice: Revising a Synthesis Draft |

> 🔑 **Key Concept:** This part applies Parts 2–5 to exam conditions. You will see a synthesis prompt built on the six-source parks set, the rubric rows that judge source use, a body paragraph at the Row B 2 level beside one at the Row B 4 level, and Section I writing questions of the kind that ask you to revise a student's synthesis sentences. Planning and timing the full essay are covered in the separate Synthesis Essay topic.

## A Q1-Style Prompt

*Practice prompt written for this lesson, modeled on the format of AP synthesis prompts. Sources A–D are real published texts; Sources E and F are practice sources written for this lesson.*

> Since the nineteenth century, American cities have debated how much land and money to devote to public parks, and where to put them. Supporters point to health, recreation, and the mixing of social classes; critics point to cost and to the residents a new park can displace.
>
> Carefully read the following six sources, including the introductory information for each source. Write an essay that synthesizes material from at least three of the sources and develops your position on the extent to which cities should prioritize parks and green space in their most crowded neighborhoods.
>
> In your response you should do the following:
> - Respond to the prompt with a thesis that presents a defensible position.
> - Select and use evidence from at least three of the provided sources to support your line of reasoning. Indicate clearly the sources used through direct quotation, paraphrase, or summary. Sources may be cited as Source A, Source B, etc., or by using the description in parentheses.
> - Explain how the evidence supports your line of reasoning.
> - Use appropriate grammar and punctuation in communicating your argument.
>
> Source A (Olmsted) · Source B (Riis) · Source C (Addams) · Source D (Thoreau) · Source E (table) · Source F (budget memo)

The full texts of all six sources appear in Parts 3 and 4.
`
    },
    {
      id: 'englangs6-rubric',
      type: 'text' as const,
      content: `
## How the Rubric Rewards Source Use

Q1 is scored out of **6 points** in three rows. Each row is judged across the **whole essay**, so a single paragraph cannot earn a score; the labels below describe the level a paragraph's source use **shows**.

| Row | Points | What earns it |
|---|---|---|
| **A: Thesis** | 0–1 | A thesis that responds to the prompt with a **defensible position** |
| **B: Evidence and commentary** | 0–4 | Specific evidence from the sources and commentary explaining how it supports a line of reasoning |
| **C: Sophistication** | 0–1 | Sophistication of thought or a complex understanding of the rhetorical situation |

### Row B, Level by Level (summarized)

| Score | Source use | Commentary |
|---|---|---|
| **0** | Restates the thesis, repeats provided information, or references **fewer than two** sources | None that counts |
| **1** | Evidence from or references to **at least two** sources | Summarizes the evidence without explaining how it supports the argument |
| **2** | Evidence from or references to **at least three** sources | Explains how **some** of the evidence relates to the argument, but no line of reasoning is established, or the reasoning is faulty |
| **3** | **Specific** evidence from at least three sources supporting **all claims** in a line of reasoning | Explains how **some** of the evidence supports the line of reasoning |
| **4** | **Specific** evidence from at least three sources supporting **all claims** in a line of reasoning | **Consistently** explains how the evidence supports the line of reasoning |

The jump from 2 to 4 is rarely about adding sources. It is about **specific** evidence aimed at **every** claim, and commentary that never stops explaining.

### Row C and the Sources

Two of the ways synthesis essays earn sophistication depend directly on source work: crafting a nuanced argument by **consistently identifying and exploring complexities or tensions across the sources**, and **articulating the implications or limitations** of an argument (yours or a source's) by situating it in a broader context. Mapping relationships among sources, as in Part 3, is preparation for both.
`
    },
    {
      id: 'englangs6-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️ (numbers only)

1) The highest score in Row B of the synthesis rubric is _______.

2) Row B scores of 2 and above require evidence from at least _______ of the provided sources.

3) The synthesis essay is scored out of a total of _______ points.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '3', '6'],
        hint1: 'Row B is the largest row.',
        hint2: 'The same as the prompt\'s minimum.',
        hint3: 'Add Rows A, B, and C.',
        explanation: 'Row B runs from 0 to 4, scores of 2 and above require at least three sources, and Rows A (1), B (4), and C (1) total 6 points.'
      }
    },
    {
      id: 'englangs6-models',
      type: 'text' as const,
      content: `
## Two Paragraphs, Annotated

Both paragraphs come from essays with this thesis, which earns Row A:

> Cities should put their most crowded neighborhoods first when they spend on green space, because a park helps only the people who can reach it; but every new park should come with protections for current tenants, because the history of park-building shows how easily the people a park is meant to serve can be displaced.

### Paragraph 1: Row B 2 Level

> Parks are very important for people in cities. Olmsted says that "We want a ground to which people may easily go after their day's work is done" (Source A). This shows that parks help people relax. Riis talks about forty-eight boys and how three had been to Central Park (Source B). Source E has a table showing that some neighborhoods have more parks than others. All of these sources show that parks are important and cities should build them.

| Feature | Verdict |
|---|---|
| Sources | Three are referenced, which meets the minimum |
| Claim | "Parks are very important" is not the thesis's claim about **priority** or **access** |
| Evidence | The Olmsted quotation is accurate but dropped in; the Riis and Source E details are vague |
| Commentary | "This shows that parks help people relax" restates the quotation; the Riis and E details get no explanation |
| Relationships | The sources sit side by side; none corroborates or complicates another |

### Paragraph 2: Row B 4 Level

> (1) A park's benefits reach only the people who can get to it, which is why the crowded neighborhoods with the least green space should come first. (2) Olmsted, who helped design Central Park, imagined a ground to which people "may easily go after their day's work is done" (Source A), and he praised the park for gathering "poor and rich" together. (3) Yet for the poorest New Yorkers that ease was more promise than fact: in one downtown school class, Riis reports, "three only" of forty-eight boys "had been in Central Park" (Source B). (4) Because the park charged no admission, the gap points to something other than price, most plausibly distance. (5) The same pattern appears in the fictional city of Source E, where only 52 percent of Mill District residents live within a ten-minute walk of a park, compared with 94 percent in wealthy Northgate. (6) Read together, these sources suggest that a single great park can widen the very divide Olmsted hoped to close, because the residents with the least room at home are the ones least able to reach open space. (7) Thoreau's warning that land enjoyed by "a few" yields only "a narrow and exclusive pleasure" (Source D) describes, in effect, a park the poor cannot reach even when no fence keeps them out. (8) Placing new green space where people are most crowded is therefore not a favor to one neighborhood; it is what makes a public park public.

| Sentence | What it does | Rubric link |
|---|---|---|
| 1 | States the paragraph's claim, tied to the thesis | Line of reasoning |
| 2 | Embeds Source A, with the author's role as context | Specific evidence |
| 3 | Uses Source B to **complicate** Source A | Sources interact |
| 4 | Draws a calibrated inference ("most plausibly") | Commentary that stays within the evidence |
| 5 | Uses Source E's exact figures to **corroborate** Source B | Specific evidence from a visual source |
| 6 | Explains what the sources show together | Commentary on the line of reasoning |
| 7 | Applies Source D's principle as an **extension**, without misrepresenting Thoreau | Accurate use of a difficult source |
| 8 | Returns to the claim, now strengthened | Line of reasoning completed |

Paragraph 2 quotes **less** of each source than Paragraph 1 does of Olmsted and spends most of its words on explanation. It uses four sources, but its strength lies in how each one is aimed at a single claim. The tension it explores, between Olmsted's ideal and Riis's evidence, is also the kind of move that contributes to Row C across a full essay.
`
    },
    {
      id: 'englangs6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which difference best explains why Paragraph 2 reaches the Row B 4 level and Paragraph 1 does not?',
            options: [
              'Paragraph 2 refers to more sources, and Paragraph 1 uses only two of them.',
              'Paragraph 2 shows how each piece of evidence supports one claim about access.',
              'Paragraph 2 quotes at greater length, giving the reader more of each source.',
              'Paragraph 2 relies on historical texts and leaves out the practice sources.'
            ],
            correctAnswer: 1,
            explanation: 'Row B 4 requires specific evidence for every claim and consistent commentary, and Paragraph 2 aims every source at its claim about access. Paragraph 1 already refers to three sources, Paragraph 2 actually quotes less, and it uses Practice Source E.'
          },
          {
            question: 'In Paragraph 2, sentence 3 ("Yet for the poorest New Yorkers...") chiefly serves to',
            options: [
              'concede that the evidence in Riis is too limited to trust',
              'summarize Riis\'s book before moving on to the next source',
              'test Olmsted\'s ideal against evidence of who reached the park',
              'restate the claim of sentence 1 in different, plainer words'
            ],
            correctAnswer: 2,
            explanation: 'The "Yet" sets Riis\'s numbers against Olmsted\'s "may easily go," which complicates the ideal with evidence. The sentence relies on Riis rather than doubting him, uses one precise detail rather than a summary, and adds evidence rather than restating the claim.'
          },
          {
            question: 'Why does sentence 4 say "most plausibly distance" rather than "distance kept them out"?',
            options: [
              'Riis\'s numbers show who had visited, not why the others had not.',
              'Riis states directly that the boys could not afford the fare.',
              'Source E proves that distance is the only barrier to park use.',
              'Olmsted admits in Source A that Central Park was far from slums.'
            ],
            correctAnswer: 0,
            explanation: 'The anecdote counts visits but gives no reasons, so a careful writer marks the inference as an inference. Riis says nothing about fares, Source E measures access rather than barriers, and the Olmsted excerpt makes no such admission.'
          }
        ]
      }
    },
    {
      id: 'englangs6-draft',
      type: 'text' as const,
      content: `
## Section I Practice: Revising a Synthesis Draft

Section I writing questions present a student's draft and ask how to revise it. The draft below is a body paragraph a student wrote for the parks prompt.

> (1) Parks can also hurt the people they are supposed to help. (2) When Hull-House built a playground, things changed for the people on the block. (3) Addams writes that the tenants "have never ceased to mourn their former estates" (Source C). (4) Today, Mill District tenants have told the city council they fear a new park will raise rents and push long-time residents out (Source F). (5) Some people think parks cost too much. (6) Therefore cities should not build new parks.

Before answering, note what the draft does well and what it lacks: sentences 3 and 4 hold good evidence from two sources a century apart, but sentence 2 is vague, nothing links the two sources, sentence 5 floats without a source, and sentence 6 claims far more than the evidence supports.
`
    },
    {
      id: 'englangs6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The writer wants to revise sentence 2 to state plainly what happened to the tenants. Which version best accomplishes this goal?',
            options: [
              'When Hull-House built its playground, the neighborhood around it changed.',
              'When Hull-House built a playground, it became popular with local children.',
              'When Hull-House cleared a block for a playground, residents were evicted.',
              'When Hull-House built a playground, the old houses there were in bad shape.'
            ],
            correctAnswer: 2,
            explanation: 'Addams reports that tenants "had to be evicted by legal process" before the houses came down, and this version states that harm plainly. The other versions stay vague or shift to children and the condition of the houses.'
          },
          {
            question: 'The writer wants to add a sentence between sentences 3 and 4 that shows the relationship between Sources C and F. Which choice best accomplishes this goal?',
            options: [
              'The fear Addams recorded a century ago is with us still.',
              'Addams was a well-known reformer who received many honors.',
              'Source F is a memo that a city budget office wrote for its council.',
              'Many cities today have parks of many different shapes and sizes.'
            ],
            correctAnswer: 0,
            explanation: 'This sentence links the evicted tenants of 1910 to the tenants of Source F, turning two separate citations into corroboration across time. The other choices add background about one source or about parks in general without relating the sources.'
          },
          {
            question: 'Sentence 6 overstates what the evidence supports. Which revision best fits the evidence in sentences 2–4?',
            options: [
              'Therefore no city should build a park where people now live.',
              'Therefore parks do the poor more harm than good in the end.',
              'Therefore a park in a crowded area must come with tenant protections.',
              'Therefore the budget office is right that parks simply cost too much.'
            ],
            correctAnswer: 2,
            explanation: 'Evidence of displacement supports protecting tenants, not abandoning parks, so this revision keeps the claim within what the sources show. The other versions turn a cost into a ban, a sweeping judgment, or a point about money the paragraph never develops.'
          }
        ]
      }
    }
  ]
};
