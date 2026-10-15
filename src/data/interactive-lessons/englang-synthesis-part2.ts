export const englangSynthesisPart2Data = {
  topicSlug: 'englang-synthesis',
  sections: [
    {
      id: 'englangs2-intro',
      type: 'text' as const,
      content: `
# 🧷 Synthesis Writing

**Part 2 of 7 — Reading a Source Set: What to Annotate**

---

| Section |
|---------|
| Start With the Question at Issue |
| The Source-Introduction Line |
| Position, Evidence, and Purpose |
| The Five-Column Source Log |
| Reading Traps |

> 🔑 **Key Concept:** Synthesis begins as a reading task. On the synthesis question (Q1), you receive **six or seven sources, including at least one visual**, and you must use at least three. Before you can make sources work together, you need to know what each one claims, what kind of evidence it offers, why it was written, and what it **cannot** show. Skill 1.A (the rhetorical situation of each source) and Skill 3.A (claims and evidence) do most of the work here.

### The Exam Setting

| Feature | 2026–27 AP English Language exam |
|---|---|
| Delivery | Fully digital |
| Free-response section | Three essays (synthesis, rhetorical analysis, argument) in 2 hours 15 minutes, including a 15-minute reading period |
| Synthesis sources | Six or seven, at least one of them visual (a chart, table, graph, map, photograph, or cartoon) |
| Minimum use | Evidence from at least three of the provided sources |
`
    },
    {
      id: 'englangs2-question',
      type: 'text' as const,
      content: `
## Start With the Question at Issue

Every synthesis prompt opens with a short paragraph that frames a debate, then asks for your position on it. Before reading any source, rewrite the task as a **single question** you can hold each source against.

| Prompt wording (typical shape) | Question at issue |
|---|---|
| "...develop your position on the extent to which cities should prioritize parks and green space in their most crowded neighborhoods" | **How far** should crowded neighborhoods come first when a city spends on green space? |
| "...develop your position on whether schools should ban phones during the school day" | **Should** schools ban phones, and under what conditions? |

Notice the phrase **"the extent to which."** It invites a position on a scale ("mostly," "only when," "first, but not only"), not a yes or no. Sources in a set rarely line up as pure "for" and "against." Most of them address **one part** of the question:

- **Benefits:** what green space does for health, safety, or community
- **Who benefits:** whether the people in crowded neighborhoods can actually reach and use it
- **Costs:** money, maintenance, land, and the people a project displaces
- **Alternatives:** smaller parks, playgrounds, street trees, or none

Sorting sources by **which part of the question they speak to** is the first step toward grouping them by idea instead of by letter.
`
    },
    {
      id: 'englangs2-intro-line',
      type: 'text' as const,
      content: `
## The Source-Introduction Line

Each source in a set begins with an identifying note: author, title, publication, date, and often a sentence describing the source. Strong readers spend twenty seconds on this note before reading a word of the excerpt, because it predicts the source's angle.

| Field | What it reveals | Question to ask |
|---|---|---|
| **Author** | Expertise, role, and stake in the issue | Does this writer gain or lose anything if readers agree? |
| **Title** | Topic and angle | What part of the question does the title promise to address? |
| **Publication or venue** | Intended audience | Who was meant to read or hear this, and what did they already believe? |
| **Date** | Context and currency | What did people know, and what was happening, when this appeared? |
| **Genre** | Purpose and evidence type | Is this a lecture, a memoir, journalism, a report, a data table? |

### Predicting From Introduction Lines

Here are the introduction lines for the six-source set this topic uses in Parts 3–6. Four are real historical texts; two are **practice sources written for this lesson**.

| Source | Introduction line | What it predicts |
|---|---|---|
| **A** | Frederick Law Olmsted, "Public Parks and the Enlargement of Towns," a lecture read before the American Social Science Association in Boston, 1870. Olmsted co-designed Central Park in New York. | A designer arguing for parks to an audience of reformers; expect strong support, and expect him to praise work he helped create |
| **B** | Jacob A. Riis, *How the Other Half Lives: Studies Among the Tenements of New York*, 1890. Riis was a newspaper police reporter. | Journalism meant to expose slum conditions to comfortable readers; parks appear as one remedy among many |
| **C** | Jane Addams, *Twenty Years at Hull-House*, 1910. Addams co-founded Hull-House, a settlement house in a crowded Chicago immigrant neighborhood. | A memoir by a reformer who worked in the neighborhood; expect firsthand episodes rather than a single thesis |
| **D** | Henry David Thoreau, "Walking," *The Atlantic Monthly*, 1862 | An essay on walking and wild land, not on city parks; expect a principle that must be applied with care |
| **E** | Practice Source E, written for this lesson: a data table on park access, tree cover, and summer heat in four neighborhoods of a fictional city | A visual source; expect patterns, not arguments, and check what the numbers measure |
| **F** | Practice Source F, written for this lesson: a memo from a city budget office to a city council, 2025 | An official weighing costs for decision-makers; expect caution about spending |

The prediction is a hypothesis, not a conclusion. You still read the excerpt, but you read it already asking the right questions.
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
            question: 'A source is introduced as "a memo from a city budget office to the city council, 2025." Before reading the excerpt, a student can most reasonably expect the memo to',
            options: [
              'report a controlled study of how green space affects the health of residents',
              'recount the writer\'s childhood memories of playing in a neighborhood park',
              'move general readers to act through vivid stories of hardship and neglect',
              'weigh costs and spending priorities for the leaders who must decide what to fund'
            ],
            correctAnswer: 3,
            explanation: 'The writer (a budget office), the audience (a council that votes on spending), and the genre (a memo) all point to a source concerned with costs and priorities. A controlled study, a personal memoir, and a public appeal would carry different introduction lines.'
          },
          {
            question: 'Olmsted\'s 1870 lecture claims that foliage helps purify city air. Which question about the source\'s date matters most for how a student should use that claim today?',
            options: [
              'Whether the lecture drew a large audience on the night it was given',
              'Whether later research has confirmed or revised the science behind it',
              'Whether Olmsted went on to design parks in cities other than New York',
              'Whether the lecture was reprinted in later collections of his writing'
            ],
            correctAnswer: 1,
            explanation: 'A scientific claim from 1870 reflects what was known then, so its currency is the issue. The size of the audience, Olmsted\'s later career, and reprints say nothing about whether the claim still holds.'
          }
        ]
      }
    },
    {
      id: 'englangs2-pep',
      type: 'text' as const,
      content: `
## Position, Evidence, and Purpose

Three things are easy to blur when you read quickly. Keep them separate.

| Term | Definition | Example from the parks set |
|---|---|---|
| **Position** | What the source holds on the question at issue, or on the part of it the source addresses | Riis supports small parks in tenement districts |
| **Evidence** | The kind of support the source offers | Riis offers eyewitness description, an anecdote about a school class, and a claim about a park ending riots |
| **Purpose** | Why the source was written and for whom | Riis wrote to expose tenement life to readers who had never seen it and to push for housing reform |

### Common Evidence Types in Source Sets

| Evidence type | Strength | Typical limit |
|---|---|---|
| **Eyewitness observation** | Vivid and specific | One observer, who may see what he hopes to see |
| **Anecdote** | Shows a human consequence | May not be typical |
| **Statistic or data table** | Shows scale and patterns | Depends on who measured what, where, and when |
| **Expert judgment** | Draws on experience | The expert may have a stake in the answer |
| **Historical example** | Shows what happened once | Conditions may differ now |
| **Principle or value** | States what ought to matter | Does not show what will actually happen |

### Why Purpose Matters for Synthesis

A source's purpose sets the boundaries of what you can fairly use it for. Riis's book is about housing, so his remarks on parks are one remedy inside a larger argument. Addams's memoir records the life of a settlement house, so her playground story is an episode, not a policy study. Thoreau's essay is about walking in open country, so it never mentions city parks at all. All three can still serve an argument about parks, but only if you use them for what they actually show.
`
    },
    {
      id: 'englangs2-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) What a source holds on the question at issue is its _______.

2) Why a source was written, and for whom, is its _______.

3) Judging whether a source's information is still up to date means judging its _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['position', 'purpose', 'currency'],
        hint1: 'Its stance on the question, not its evidence.',
        hint2: 'The reason behind the writing.',
        hint3: 'A word that also means money in circulation.',
        explanation: 'Position is the stance, purpose is the reason for writing and the intended audience, and currency is how up to date the information is.'
      }
    },
    {
      id: 'englangs2-log',
      type: 'text' as const,
      content: `
## The Five-Column Source Log

During the reading period, keep a short log for each source. Five columns are enough.

| Source | Position on the question | Key evidence (with a quotable phrase) | Purpose and audience | Limits |
|---|---|---|---|---|
| **A** (Olmsted, 1870) | Strong support for large parks as a contrast to the city | A park as a place where people "find the city put far away from them" | Persuade reformers and civic leaders to plan parks as towns grow | Designer praising his own kind of work; 1870 conditions; large parks may be far from the poorest residents |

### What Belongs in "Limits"

The limits column is what separates a synthesis writer from a summarizer. A limit is not a flaw that disqualifies a source. It is the edge of what the source can support.

- **Scope:** one city, one neighborhood, one class of students
- **Stake:** the author designed, funded, or runs the thing being praised
- **Date:** conditions, science, or costs that have changed
- **Evidence type:** an anecdote standing in for a pattern
- **Silence:** a part of the question the source never addresses

## Positions Are a Spectrum

| Position | Signal words in the source | Example |
|---|---|---|
| **Strong support** | "We want," "the most valuable," "must" | Olmsted calls the large park "the most valuable of all possible forms of public places" |
| **Conditional support** | "if," "only where," "provided that" | Support for parks only if they are small and close to tenements |
| **Concern** | "but," "possibly," "the day will come" | A warning about who may be shut out of green land |
| **Opposition or priority shift** | "before," "instead," "first" | A budget memo urging repairs to existing parks before building new ones |
| **Data without a position** | Tables, charts, surveys | Practice Source E reports patterns but argues nothing |

## Reading Traps

| Trap | What it looks like | The fix |
|---|---|---|
| **Reading only the introduction line** | Guessing the source's view from its title | Read the excerpt; the prediction is a hypothesis |
| **Taking a quoted view for the author's own** | Olmsted opens by quoting the *Overland Monthly*, which claimed "only an inferior class of people can be induced to live out of towns." That is the magazine's view, which Olmsted reports, not his own. | Ask who is speaking in each sentence |
| **Ignoring the source's own concessions** | Missing that Olmsted admits a large park "will seriously interrupt cross-town communication" | Mark every "but," "although," and "if" |
| **Flattening a source to pro or con** | Calling Addams simply "pro-park" | Record what she supports **and** what she admits it cost |

> 🔑 **AP Connection:** Sources become evidence only when you use them accurately. A misread source is worse than an unused one, because the reader sees the misreading and stops trusting your other evidence.
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
            question: 'A student writes, "Olmsted believes that only an inferior class of people can be induced to live out of towns." What is the main problem with this sentence?',
            options: [
              'It paraphrases a passage that should have been quoted exactly',
              'It assigns to the lecturer a view he quotes from a magazine',
              'It cites a source too old to bear on a modern question',
              'It uses a source whose excerpt never discusses towns at all'
            ],
            correctAnswer: 1,
            explanation: 'The words come from the Overland Monthly, which Olmsted quotes at the start of his lecture, so the student has mistaken a reported view for the author\'s own. The sentence does quote the words, the date does not disqualify the source, and the lecture is centrally about towns.'
          },
          {
            question: 'A source argues that parks help tenement families but only when they are small and within a few blocks of crowded housing. In a source log, its position is best recorded as',
            options: [
              'opposition to large parks in every setting',
              'support that depends on size and location',
              'strong support for any new park in the city',
              'neutral data that takes no position at all'
            ],
            correctAnswer: 1,
            explanation: 'The source supports parks under stated conditions, which makes its support conditional. It does not oppose large parks everywhere, does not endorse every park, and plainly takes a position.'
          },
          {
            question: 'Which entry belongs in the "Limits" column for Olmsted\'s lecture?',
            options: [
              'He argues that a park should feel completely apart from the streets.',
              'He helped design the kind of park he is praising to his audience.',
              'He speaks to reformers who are planning for growing American towns.',
              'He describes large crowds of different classes meeting in one park.'
            ],
            correctAnswer: 1,
            explanation: 'Olmsted\'s role as a park designer gives him a stake in the answer, which is a limit on how far a reader can trust his praise without corroboration. The other entries record his position, his audience, and his evidence.'
          }
        ]
      }
    }
  ]
};
