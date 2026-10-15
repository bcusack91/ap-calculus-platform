export const englangSynthesisEssayPart2Data = {
  topicSlug: 'englang-synthesis-essay',
  sections: [
    {
      id: 'englangs2-intro',
      type: 'text' as const,
      content: `
# 📝 The Synthesis Essay

**Part 2 of 7 — From Prompt to Position: Reading the Task and the Sources, Then Taking a Stand**

---

| Section |
|---------|
| What a Q1 Prompt Actually Asks |
| 📖 A Practice Source Set: What Should School Prepare Students For? |
| Reading the Set for Positions |
| From Positions to a Thesis |

> 🔑 **Key Concept:** Part 1 gave you the 40-minute workflow. This part slows down its first ten minutes. A synthesis essay is won or lost before you write a body paragraph: you have to see what the prompt is really asking, read every source for its **position** and its **limits**, and then commit to a position of your own that the sources can help you defend. The separate Synthesis Writing topic teaches source logs and relationship maps in detail; here you use those habits to reach a thesis (skills 1.A, 3.A, 4.B).
`
    },
    {
      id: 'englangs2-prompt',
      type: 'text' as const,
      content: `
## What a Q1 Prompt Actually Asks

Every synthesis prompt has the same three parts.

| Part of the prompt | What it contains | What to do with it |
|---|---|---|
| **The framing paragraph** | A short introduction to the issue, often naming two sides | Note the stakes, but do not borrow its wording as your thesis |
| **The task sentence** | "Write an essay that synthesizes material from at least three of the sources and develops your position on..." | Underline the exact question after "your position on" |
| **The directions** | Thesis, at least three sources, clear citation, explanation, grammar | Treat these as the minimum, not the goal |

### The Words That Set the Task

| Prompt wording | What it requires |
|---|---|
| "develops **your** position" | An argument of your own. The sources are evidence, not the subject |
| "the **extent to which**..." | A position on a **scale**, not a yes or no. "Largely," "only when," and "in these cases but not those" are all positions |
| "**synthesizes** material from at least three of the sources" | Sources combined in service of your claims. Three is the floor for Row B scores of 2 and above |
| "Indicate clearly the sources used" | Every borrowed idea is attributed, whether quoted, paraphrased, or summarized |

### Timing

Section II lasts **2 hours 15 minutes**, and that time includes a **15-minute reading period**. The reading period is intended for reading the synthesis sources and planning. After it, a reasonable split is 40 minutes per essay. If you use the reading period well, you begin the synthesis essay already holding a position and a plan.

### Issue First, Sources Second

The most common planning mistake is to read the sources and ask "what does each one say?" The better question is **"what do I think about the issue, now that I have heard from these people?"** An essay organized around the first question becomes a tour of sources. An essay organized around the second becomes an argument.
`
    },
    {
      id: 'englangs2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A prompt asks students to develop a position on "the extent to which cities should limit cars downtown." Which opening position best answers the task as worded?',
            options: [
              'Cities have debated cars in their downtowns for many decades now.',
              'Whether to limit downtown cars raises several hard questions.',
              'Cities should limit downtown cars where transit works well.',
              'Several of the sources disagree about whether cars belong downtown.'
            ],
            correctAnswer: 2,
            explanation: 'An "extent" prompt asks where on a scale you stand, and this position commits to limiting cars under a stated condition. The other openings describe the debate, the questions, or the sources without taking any position on the issue.'
          },
          {
            question: 'Why do the directions say the sources may be cited "through direct quotation, paraphrase, or summary"?',
            options: [
              'Because every idea taken from a source needs attribution',
              'Because readers award more points to essays that quote',
              'Because paraphrase is the only form allowed after the thesis',
              'Because summaries of whole sources earn the highest scores'
            ],
            correctAnswer: 0,
            explanation: 'The directions require attribution for any borrowed material, in whatever form it appears. Quoting earns no extra credit, paraphrase is allowed anywhere, and summarizing whole sources usually produces the source-by-source essay that scores lower.'
          },
          {
            question: 'A student reads the sources and plans one body paragraph per source, in the order A, B, C. What is the main risk of this plan?',
            options: [
              'The essay will use too few of the sources that the prompt provides.',
              'The essay may describe sources rather than argue a position.',
              'The essay will run too long to finish within the suggested time.',
              'The essay will have no clear way to cite the sources it discusses.'
            ],
            correctAnswer: 1,
            explanation: 'Organizing by source tends to produce a tour of what each writer says rather than a line of reasoning about the issue. Such a plan can still use enough sources, cite them, and fit the time; its weakness is the missing argument.'
          }
        ]
      }
    },
    {
      id: 'englangs2-set',
      type: 'text' as const,
      content: `
## 📖 A Practice Source Set: What Should School Prepare Students For?

*Practice prompt written for this lesson, modeled on the format of AP synthesis prompts. Sources A–D are real published texts, excerpted; Sources E and F are practice sources written for this lesson, and their people, places and figures are invented.*

> Many communities now ask high schools to prepare students for specific careers through technical courses, certifications, and work placements. Others worry that this focus crowds out the broad study of writing, science, history, and the arts.
>
> Write an essay that synthesizes material from at least three of the sources and develops your position on **the extent to which high schools should prioritize preparing students for specific careers**.

**Source A.** From *The Idea of a University*, lectures delivered in Dublin in 1852 by John Henry Newman, the English clergyman chosen to lead a new Catholic university there.

> Knowledge is capable of being its own end. Such is the constitution of the human mind, that any kind of knowledge, if it be really such, is its own reward.
>
> ...If then a practical end must be assigned to a University course, I say it is that of training good members of society. Its art is the art of social life, and its end is fitness for the world. ...It prepares him to fill any post with credit, and to master any subject with facility.

**Source B.** From "What Knowledge Is of Most Worth?", an essay by the English philosopher Herbert Spencer, first published in the *Westminster Review* in 1859 and collected in his book *Education* (1861).

> How to live?—that is the essential question for us. Not how to live in the mere material sense only, but in the widest sense. ...To prepare us for complete living is the function which education has to discharge; and the only rational mode of judging of an educational course is, to judge in what degree it discharges such function.
>
> ...Thus to the question we set out with—What knowledge is of most worth?—the uniform reply is—Science. ...For that indirect self-preservation which we call gaining a livelihood, the knowledge of greatest value is—Science.

**Source C.** From "A Liberal Education; and Where to Find It," an address given in 1868 at the South London Working Men's College by the English biologist Thomas Henry Huxley.

> The manufacturers and the capitalists swell the chorus lustily. They declare that ignorance makes bad workmen; that England will soon be unable to turn out cotton goods, or steam engines, cheaper than other people...
>
> ...Suppose it were perfectly certain that the life and fortune of every one of us would, one day or other, depend upon his winning or losing a game at chess. Don't you think that we should all consider it to be a primary duty to learn at least the names and the moves of the pieces...?
>
> ...The chess-board is the world, the pieces are the phenomena of the universe, the rules of the game are what we call the laws of Nature. ...education is the instruction of the intellect in the laws of Nature, under which name I include not merely things and their forces, but men and their ways...

**Source D.** From *The School and Society* (1899), lectures given to parents by the American philosopher John Dewey, who ran an experimental elementary school at the University of Chicago.

> What the best and wisest parent wants for his own child, that must the community want for all of its children. Any other ideal for our schools is narrow and unlovely; acted upon, it destroys our democracy.
>
> ...From the standpoint of the child, the great waste in the school comes from his inability to utilize the experiences he gets outside the school in any complete and free way within the school itself; while, on the other hand, he is unable to apply in daily life what he is learning at school. That is the isolation of the school—its isolation from life.
>
> ...To do this means to make each one of our schools an embryonic community life, active with types of occupations that reflect the life of the larger society, and permeated throughout with the spirit of art, history, and science.

**Source E (practice source written for this lesson).** A table from an invented survey of graduates of the fictional Riverside school district, five years after graduation. 1,200 of the 4,000 graduates contacted responded (30 percent). Each respondent chose up to three answers to the question "Which parts of high school have proved most useful in your life and work?"

| Part of high school | Share of respondents choosing it |
|---|---|
| Writing and speaking courses | 61% |
| Career and technical courses | 38% |
| History and literature courses | 34% |
| Laboratory science courses | 27% |
| Mathematics beyond Algebra II | 22% |
| Work placement or internship (asked only of the 216 who took one) | 72% |

**Source F (practice source written for this lesson).** From an invented letter to the fictional Riverside school board by the owner of a heating and cooling company.

> I have eleven technician jobs I cannot fill, and I would gladly see the high school train more young people for this trade. But I should be honest about why I turn applicants away. It is rarely because they cannot learn the equipment; we teach that on the job in a few months. It is because they cannot write a clear note to a customer, explain a problem to a homeowner, or work out why a system failed instead of guessing.
`
    },
    {
      id: 'englangs2-positions',
      type: 'text' as const,
      content: `
## Reading the Set for Positions

Positions on an "extent" question sit on a spectrum, not on two sides. Place each source by what it **argues**, then note what it **does not address**. That second column is where your own thinking enters.

| Source | Position on the issue | What it does not address |
|---|---|---|
| **A** Newman | Broad cultivation of the mind is valuable in itself **and**, as a by-product, prepares a person "to fill any post" | High schools; any one trade; students who cannot afford long study |
| **B** Spencer | Education should be judged by how well it prepares for "complete living," and science serves every part of life, including "gaining a livelihood" | Whether science should be taught as job training or as general knowledge |
| **C** Huxley | Education means learning the "rules" of the world's "game," including "men and their ways"; it is a necessity, like learning chess if your life depended on it. He reports, without joining, the manufacturers' claim "that ignorance makes bad workmen" | Particular careers; his "laws of Nature" are general, not job-specific |
| **D** Dewey | School fails when it is cut off from life; it should be "an embryonic community life" with real "occupations," but the goal is what the "wisest parent" wants, not a job | How much time occupations should take from other study |
| **E** Survey (practice) | Graduates value writing and speaking most; those who had work placements rated them highly | Why respondents chose as they did; the 70 percent who did not respond |
| **F** Employer (practice) | Wants more trade training, yet says applicants fail on writing, explaining, and reasoning | Whether the school or the employer should teach the trade itself |

### Three Things the Table Reveals

**1. No source is simply "for" or "against" career preparation.** Newman, often cast as the champion of knowledge for its own sake, claims general education is the best preparation for "any post." Dewey wants occupations in school but rejects a "narrow" ideal. Read past the label you expect.

**2. The most useful sources complicate themselves.** Source F begins by asking for trade training and ends by describing a shortage of general skills. A source that pulls in two directions is a gift: it lets you show a tension, which is the raw material of a nuanced thesis.

**3. Some sources need a step before they apply.** Newman writes about universities and Dewey about an elementary school. Both can still inform an argument about high schools, but your commentary has to make the step explicit rather than pretend the source is about your issue.
`
    },
    {
      id: 'englangs2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student writes, "Newman (Source A) believes schools should ignore practical needs." Why is this a misreading of the excerpt?',
            options: [
              'Newman writes about universities, so he has no views on what schools should teach.',
              'Newman says broad training of the mind prepares a person to fill any post well.',
              'Newman argues that practical needs matter more than any knowledge pursued for itself.',
              'Newman admits in the excerpt that his own university offered courses in trades.'
            ],
            correctAnswer: 1,
            explanation: 'Newman values knowledge for its own sake but also claims that such training produces "fitness for the world" and prepares a person "to fill any post with credit." He does not rank practical needs above knowledge, the excerpt mentions no trade courses, and writing about universities does not erase his view.'
          },
          {
            question: 'Which statement about Source E stays within what the table can support?',
            options: [
              'Most graduates of Riverside regret taking career and technical courses.',
              'Work placements are the most valuable experience the district offers.',
              'Among those who responded, writing courses were the most often chosen.',
              'Riverside graduates use writing more often than math on the job.'
            ],
            correctAnswer: 2,
            explanation: 'The table reports what respondents chose, and writing and speaking courses lead at 61 percent. The data say nothing about regret or how often skills are used, and the 72 percent placement figure comes from a different and much smaller group.'
          },
          {
            question: 'The employer in Source F would most likely agree with which other source about what applicants lack?',
            options: [
              'Source E, because its respondents ranked writing and speaking first',
              'Source B, because it ranks science above every other subject',
              'Source D, because it describes a school for young children',
              'Source C, because it compares all of education to learning the rules of chess'
            ],
            correctAnswer: 0,
            explanation: 'The employer says applicants fail because they cannot write or explain clearly, which matches the graduates in Source E who rated writing and speaking courses most useful. The other sources do not single out communication skills.'
          }
        ]
      }
    },
    {
      id: 'englangs2-thesis',
      type: 'text' as const,
      content: `
## From Positions to a Thesis

A thesis earns **Row A** when it responds to the prompt with a **defensible position**. The ladder below shows where students fall short and where a thesis becomes a plan for the whole essay.

| Rung | Example | Row A? |
|---|---|---|
| Restates the prompt | "High schools must decide how much to focus on careers." | No: no position |
| Describes the sources | "The sources show different views about career preparation." | No: about the sources, not the issue |
| Bare position | "High schools should not prioritize career preparation." | Yes, but it gives the essay nothing to develop |
| Position with reasons | "High schools should treat career training as one part of a broad education rather than its center, because the skills employers say they cannot find, such as clear writing and careful reasoning, are the ones broad study builds." | Yes, and it previews a line of reasoning |

### Worked Example: Building the Thesis From the Table

1. **Find the tension.** Sources D and F want school connected to work, yet Sources A, E, and F all point to **general** abilities as what actually serves people in work.
2. **Take a side on the scale.** Career preparation matters, but **specific** job training should not be the priority.
3. **State the reasons that will become paragraphs.** (a) Specific skills are learned quickly on the job, and general skills are not (F, A). (b) Graduates themselves value general skills most (E, B). (c) Connection to real work still matters, so career experiences belong in school as a means, not the end (D, E).
4. **Write it as one or two sentences.**

> High schools should prepare students for work, but mainly by teaching the abilities every career demands, such as writing, explaining, and reasoning about how the world works, rather than by training them for one job; specific skills are learned quickly on the job, while the general powers that employers and graduates value most are not.

Notice that the thesis names no sources. Sources support the reasons; the thesis is about the issue.

> 🔑 **AP Connection:** The thesis may take more than one sentence, provided the sentences are close together. What it cannot do is merely restate the prompt, summarize sources, or take a position no one could reasonably dispute.
`
    },
    {
      id: 'englangs2-check',
      type: 'dropdown-select' as const,
      content: `
**Row A or Not?** 🔍 For each sentence written in response to the Riverside prompt, choose the best description.
      `,
      exercise: {
        dropdowns: [
          {
            label: '"Sources A, C, and E all discuss what education is for."',
            options: ['Describes the sources, so no Row A', 'Takes a defensible position on the issue', 'Restates the prompt, so no Row A', 'Takes a position no one could dispute']
          },
          {
            label: '"Because trades change faster than minds do, high schools should teach broad skills first and job skills second."',
            options: ['Restates the prompt, so no Row A', 'Describes the sources, so no Row A', 'Takes a position no one could dispute', 'Takes a defensible position on the issue']
          },
          {
            label: '"Education is important for young people\'s futures."',
            options: ['Takes a defensible position on the issue', 'Takes a position no one could dispute', 'Describes the sources, so no Row A', 'Restates the prompt, so no Row A']
          }
        ],
        correctAnswers: ['Describes the sources, so no Row A', 'Takes a defensible position on the issue', 'Takes a position no one could dispute'],
        hint1: 'Is the sentence about the issue or about what the sources contain?',
        hint2: 'Could a reasonable reader disagree with it?',
        hint3: 'Would anyone argue the opposite?',
        explanation: 'The first sentence reports on the sources, the second takes a debatable stand with a reason, and the third states something no reader would dispute, so it cannot serve as a defensible thesis.'
      }
    }
  ]
};
