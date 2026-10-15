/**
 * AP English Literature and Composition: free-response practice bank.
 *
 * Built to the real exam: Section II is 3 essays in 2 hours, in this order:
 *   Q1 Poetry Analysis · Q2 Prose Fiction Analysis · Q3 Literary Argument.
 * Each essay is ONE question scored on the 6-point analytic rubric:
 *   Row A Thesis (1) · Row B Evidence and Commentary (4, cumulative) · Row C Sophistication (1).
 * Two questions per type, so the bank holds two complete exams.
 *
 * Poems and passages are real public-domain texts, quoted from the editions named
 * in each prompt.
 *
 * Self-grading: the page's keyword matcher lowercases the student's essay. A rubric
 * item is earned when at least `minMatches` of its keywords appear (a keyword may list
 * alternatives separated by "|"), every `requiresAll` group is also met, and, for
 * Row B, the previous Row B point was earned (the rows are cumulative, as on the
 * official rubric).
 */

export interface FRQKeywordGroup {
  keywords: string[]
  minMatches?: number
}

export interface FRQRubricItem {
  points: number
  description: string
  keywords: string[]
  /** Distinct keywords that must appear (default 1). */
  minMatches?: number
  /** Further keyword groups that must ALSO be met. */
  requiresAll?: FRQKeywordGroup[]
  /** Essay rubric row. Row B points are cumulative: each needs the one before it. */
  row?: 'A' | 'B' | 'C'
}

export interface FRQPart {
  label: string
  prompt: string
  maxPoints: number
  rubric: FRQRubricItem[]
  sampleAnswer: string
}

export type EngLitFRQType = 'poetry' | 'prose' | 'literary-argument'

/** Exam order, labels, points, and suggested minutes for the three real essay types. */
export const ENG_LIT_FRQ_TYPES: { type: EngLitFRQType; label: string; short: string; points: number; minutes: number }[] = [
  { type: 'poetry', label: 'Poetry Analysis', short: 'Q1 Poetry', points: 6, minutes: 40 },
  { type: 'prose', label: 'Prose Fiction Analysis', short: 'Q2 Prose Fiction', points: 6, minutes: 40 },
  { type: 'literary-argument', label: 'Literary Argument', short: 'Q3 Literary Argument', points: 6, minutes: 40 },
]

/** Real Section II time: 2 hours for three essays. */
export const ENG_LIT_SECTION_MINUTES = 120

export interface EngLitFRQ {
  id: string
  type: EngLitFRQType
  unit: number
  title: string
  prompt: string
  parts: FRQPart[]
  totalPoints: number
  timeRecommendation: string
  calculatorAllowed: boolean
}

// ---------------------------------------------------------------------------
// Shared rubric vocabulary
// ---------------------------------------------------------------------------

const COMMENTARY = [
  'because', 'this shows', 'which shows', 'shows that', 'suggests', 'demonstrates', 'reveals',
  'emphasizes', 'implies', 'this means', 'means that', 'in other words', 'so that', 'thereby',
  'illustrates', 'highlights', 'underscores', 'proves', 'explains why', 'which means', 'conveys',
  'signals', 'this matters', 'matters because', 'the effect', 'establishes', 'transforms', 'turns the',
  'turns a', 'recasts', 'invites', 'forces', 'frames', 'makes the', 'creates',
]

const REASONING = [
  'therefore', 'thus', 'consequently', 'as a result', 'moreover', 'furthermore', 'in turn',
  'which is why', 'for this reason', 'not only', 'by contrast', 'similarly', 'just as',
  'ultimately', 'in the same way', 'likewise', 'instead',
]

const SOPHISTICATION = [
  'tension', 'paradox', 'complex', 'complicat', 'irony', 'ironic', 'ambigu', 'implication',
  'broader', 'larger', 'at the same time', 'nuance', 'contradict', 'double', 'both',
  'alternative interpretation', 'another reading',
  'qualif', 'distinction', 'distinguish', 'on the other hand', 'underlying', 'deeper',
]

const LITERARY_TECHNIQUES = [
  'imagery', 'image', 'diction', 'syntax', 'metaphor', 'simile', 'personification', 'symbol',
  'tone', 'irony', 'ironic', 'repetition', 'anaphora', 'rhyme', 'meter', 'enjambment', 'caesura',
  'stanza', 'juxtapos', 'contrast', 'point of view', 'narrator', 'characterization', 'structure',
  'shift', 'alliteration', 'oxymoron', 'paradox', 'free indirect', 'dialogue', 'setting',
  'antithesis', 'parallel', 'hyperbole', 'synesthesia', 'figurative', 'dash', 'capitaliz',
]

const WORK_EVIDENCE = [
  'when ', 'scene', 'chapter', 'at the end', 'at the beginning', 'early in', 'later', 'the novel',
  'the play', 'the narrator', 'the final', 'the opening', 'climax', 'act ',
]

const POETRY_PROSE_B = [
  'Row B — Evidence and Commentary, point 1 of 4: provides evidence from the text that is mostly general, and mostly summarizes it rather than explaining how it supports the interpretation.',
  'Row B — Evidence and Commentary, point 2 of 4 (cumulative): provides some specific, relevant evidence and explains how some of it relates to the argument, even if no line of reasoning is established or the reasoning is faulty.',
  'Row B — Evidence and Commentary, point 3 of 4 (cumulative): provides specific evidence to support all claims in a line of reasoning, explains how some of the evidence supports that line of reasoning, AND explains how at least one literary element or technique in the text contributes to its meaning.',
  'Row B — Evidence and Commentary, point 4 of 4 (cumulative): provides specific evidence to support all claims in a line of reasoning, consistently explains how the evidence supports the line of reasoning, AND explains how MULTIPLE literary elements or techniques in the text contribute to its meaning.',
]

const ARGUMENT_B = [
  'Row B — Evidence and Commentary, point 1 of 4: provides evidence from the chosen work that is mostly general (plot summary), without explaining how it supports the interpretation.',
  'Row B — Evidence and Commentary, point 2 of 4 (cumulative): provides some specific, relevant evidence from the work and explains how some of it relates to the argument, even if no line of reasoning is established or the reasoning is faulty.',
  'Row B — Evidence and Commentary, point 3 of 4 (cumulative): provides specific evidence to support all claims in a line of reasoning and explains how some of the evidence supports that line of reasoning.',
  'Row B — Evidence and Commentary, point 4 of 4 (cumulative): provides specific evidence to support all claims in a line of reasoning AND consistently explains how the evidence supports the line of reasoning and an interpretation of the work as a whole.',
]

const SOPHISTICATION_DESC =
  'Row C — Sophistication (0–1): demonstrates sophistication of thought and/or develops a complex literary argument, sustained across the essay rather than in a single phrase. Ways to earn it: identifying and exploring complexities or tensions within the text; illuminating the student\'s interpretation by situating it within a broader context; accounting for alternative interpretations of the text; or a style that is consistently vivid and persuasive.'

function analysisRubric(kind: 'poem' | 'passage', spec: { thesis: string[]; specifics: string[]; sophistication: string }): FRQRubricItem[] {
  return [
    {
      row: 'A',
      points: 1,
      description: `Row A — Thesis (0–1): responds to the prompt with a thesis that presents a defensible interpretation of the ${kind}. A thesis that only restates the prompt, paraphrases the ${kind}, or names a single simple emotion without an interpretation earns 0.`,
      keywords: spec.thesis,
      requiresAll: [{ keywords: LITERARY_TECHNIQUES }],
    },
    { row: 'B', points: 1, description: POETRY_PROSE_B[0], keywords: spec.specifics },
    { row: 'B', points: 1, description: POETRY_PROSE_B[1], keywords: spec.specifics, minMatches: 2, requiresAll: [{ keywords: COMMENTARY }] },
    { row: 'B', points: 1, description: POETRY_PROSE_B[2], keywords: spec.specifics, minMatches: 4, requiresAll: [{ keywords: COMMENTARY, minMatches: 3 }, { keywords: LITERARY_TECHNIQUES }, { keywords: REASONING }] },
    { row: 'B', points: 1, description: POETRY_PROSE_B[3], keywords: LITERARY_TECHNIQUES, minMatches: 3, requiresAll: [{ keywords: COMMENTARY, minMatches: 5 }, { keywords: REASONING, minMatches: 2 }, { keywords: spec.specifics, minMatches: 6 }] },
    { row: 'C', points: 1, description: `${SOPHISTICATION_DESC} For this ${kind}: ${spec.sophistication}`, keywords: SOPHISTICATION, minMatches: 2 },
  ]
}

function literaryArgumentRubric(spec: { thesis: string[]; topic: string[]; sophistication: string }): FRQRubricItem[] {
  return [
    {
      row: 'A',
      points: 1,
      description: 'Row A — Thesis (0–1): responds to the prompt with a thesis that presents a defensible interpretation of the chosen work as it relates to the prompt. A thesis that only names a work, restates the prompt, or summarizes the plot earns 0.',
      keywords: spec.thesis,
      requiresAll: [{ keywords: spec.topic }],
    },
    { row: 'B', points: 1, description: ARGUMENT_B[0], keywords: WORK_EVIDENCE },
    { row: 'B', points: 1, description: ARGUMENT_B[1], keywords: WORK_EVIDENCE, requiresAll: [{ keywords: COMMENTARY }] },
    { row: 'B', points: 1, description: ARGUMENT_B[2], keywords: WORK_EVIDENCE, minMatches: 2, requiresAll: [{ keywords: COMMENTARY, minMatches: 3 }, { keywords: spec.topic, minMatches: 2 }, { keywords: REASONING }] },
    { row: 'B', points: 1, description: ARGUMENT_B[3], keywords: COMMENTARY, minMatches: 5, requiresAll: [{ keywords: REASONING, minMatches: 2 }, { keywords: ['as a whole', 'the work', 'the novel', 'the play', 'theme', 'meaning'] }] },
    { row: 'C', points: 1, description: `${SOPHISTICATION_DESC} For this prompt: ${spec.sophistication}`, keywords: SOPHISTICATION, minMatches: 2 },
  ]
}

const ESSAY_PART_PROMPT = 'Write your essay in response to the prompt above. When you grade it, check it against each row of the 6-point rubric: Row A (thesis, 1 point), Row B (evidence and commentary, 4 cumulative points), Row C (sophistication, 1 point).'

const ANALYSIS_BULLETS = `In your response you should do the following:

- Respond to the prompt with a thesis that presents a defensible interpretation.
- Select and use evidence to support your line of reasoning.
- Explain how the evidence supports your line of reasoning.
- Use appropriate grammar and punctuation in communicating your argument.`

const ARGUMENT_BULLETS = `In your response you should do the following:

- Respond to the prompt with a thesis that presents a defensible interpretation.
- Provide evidence to support your line of reasoning.
- Explain how the evidence supports your line of reasoning.
- Use appropriate grammar and punctuation in communicating your argument.`

// ---------------------------------------------------------------------------
// Q1 — POETRY ANALYSIS
// ---------------------------------------------------------------------------

const poetryFRQs: EngLitFRQ[] = [
  {
    id: 'englit-poetry-1',
    type: 'poetry',
    unit: 9,
    title: 'Poetry Analysis: Blake, "London"',
    prompt: `**Suggested time: 40 minutes.**

In the following poem, published in William Blake's *Songs of Experience* (1794), the speaker describes what he sees and hears as he walks through London. Read the poem carefully. Then, in a well-written essay, analyze how Blake uses literary elements and techniques to convey the speaker's complex attitude toward the city and its institutions.

${ANALYSIS_BULLETS}

---

> **London**
>
> I wander thro' each charter'd street,\\
> Near where the charter'd Thames does flow,\\
> And mark in every face I meet,\\
> Marks of weakness, marks of woe.
>
> In every cry of every Man,\\
> In every Infant's cry of fear,\\
> In every voice, in every ban,\\
> The mind-forg'd manacles I hear.
>
> How the Chimney-sweeper's cry\\
> Every black'ning Church appalls;\\
> And the hapless Soldier's sigh\\
> Runs in blood down Palace walls.
>
> But most, thro' midnight streets I hear\\
> How the youthful Harlot's curse\\
> Blasts the new born Infant's tear,\\
> And blights with plagues the Marriage hearse.

*Text from* Songs of Experience *(1794), as transcribed in Wikisource, with lightly modernized spelling and punctuation.*`,
    parts: [
      {
        label: 'Essay',
        prompt: ESSAY_PART_PROMPT,
        maxPoints: 6,
        rubric: analysisRubric('poem', {
          thesis: ['attitude', 'indict', 'condemn', 'outrage', 'anger', 'despair', 'accus', 'grief', 'compassion', 'helpless', 'convey'],
          specifics: ['charter', 'thames', 'mark in every face', 'marks of weakness', 'marks of woe', 'every cry', 'every man', 'every ban', 'manacles', 'mind-forg', 'chimney-sweeper', 'church', 'appalls', 'soldier', 'sigh', 'palace', 'blood', 'midnight', 'harlot', 'curse', 'infant', 'marriage hearse', 'blights', 'plagues'],
          sophistication: 'the paradox of "mind-forg\'d manacles" (oppression that the oppressed have internalized, and that may implicate the speaker who "marks"); the oxymoron "Marriage hearse," which fuses the institution of new life with death and links respectable society to the exploitation it condemns; the double meaning of "mark" (to notice and to scar) and of "charter\'d" (granted rights and owned property); situating the poem in the 1790s, when "chartered rights" was a political slogan.',
        }),
        sampleAnswer: `*Annotated sample (scores 6/6). Rubric rows are marked in brackets.*

Blake's speaker claims only to "wander," but nothing in "London" is aimless. **Through repetition that makes suffering universal, images that splash the cries of the powerless onto the walls of Church and Palace, and the paradox of "mind-forg'd manacles," Blake conveys a speaker whose attitude toward London is both compassionate and accusing: he grieves for its victims while indicting the institutions, and the habits of mind, that keep them in chains.** **[Row A: a defensible interpretation of a complex attitude, with the techniques that convey it.]**

The first stanza establishes that the city's misery is not accidental but owned. The speaker calls both the street and the Thames "charter'd," a word that should suggest the chartered rights of free Englishmen but here suggests property mapped and licensed by authorities. Because even the flowing river is "charter'd," Blake implies that commerce and law have claimed what should be most free. The speaker's response is to "mark in every face I meet / Marks of weakness, marks of woe." The repetition of "mark" turns noticing into scarring: the faces are marked, and the speaker's own act of marking records the damage. **[Row B: specific evidence with commentary explaining how diction and repetition convey the attitude.]**

The second stanza widens this observation through anaphora. "In every cry of every Man, / In every Infant's cry of fear, / In every voice, in every ban" piles up "every" until no one is exempt, from adult to infant. The stanza then lands on its most striking phrase: "The mind-forg'd manacles I hear." This shows that the chains are not only external laws but habits of thought, forged in minds, which explains why the suffering is so total. Moreover, the speaker *hears* the manacles, a synesthetic touch that suggests the chains rattle in every sound the city makes. **[Row B: a second technique (anaphora, metaphor, synesthesia) explained in relation to the attitude.]**

In the third stanza, the speaker's compassion becomes accusation. "How the Chimney-sweeper's cry / Every black'ning Church appalls" lets the child's cry darken the church, both with soot and with shame, because the church that should protect children instead tolerates their labor. Similarly, "the hapless Soldier's sigh / Runs in blood down Palace walls": a sigh, which is nearly silent, becomes blood visibly running down the palace. The image assigns guilt to the institution that sends soldiers to die. Therefore, the structure of these lines places each victim next to the power responsible for him. **[Row B: commentary consistently explains how imagery and juxtaposition advance the line of reasoning.]**

The final stanza moves to "midnight streets," the darkest point of the speaker's walk, and to the poem's most compressed image. "The youthful Harlot's curse / Blasts the new born Infant's tear, / And blights with plagues the Marriage hearse." Her curse is both her oath and the disease she carries, which travels from the street into respectable marriages and onto newborn children. The oxymoron "Marriage hearse" fuses the institution meant to create life with the vehicle that carries the dead. As a result, the poem ends by showing that respectable society and the exploitation it condemns are one system: the curse that society creates by tolerating prostitution returns to infect society itself. **[Row B: multiple techniques (structure, oxymoron, double meaning) explained in relation to meaning.]**

The complexity of the speaker's attitude lies in the phrase "mind-forg'd manacles." If minds forge the chains, then the oppressed are partly complicit in their own oppression, and perhaps the speaker, who can only "mark" and "hear," is complicit as well. His anger at Church and Palace is therefore accompanied by a darker recognition: no single institution can be blamed for a city that has learned to chain itself. That tension is what keeps the poem from being only a protest; it is also a diagnosis. **[Row C: the essay explores a central paradox and its implication for the speaker, sustained across the analysis.]**

**How this essay scores:**
- **Row A (1/1):** a thesis that interprets a complex attitude (compassion and accusation) rather than naming a single emotion.
- **Row B (4/4):** specific quotations from every stanza support each claim, and the commentary consistently explains how multiple techniques (diction, repetition, anaphora, metaphor, imagery, oxymoron) create meaning.
- **Row C (1/1):** a sustained exploration of the poem's central tension, including the speaker's own implication.`,
      },
    ],
    totalPoints: 6,
    timeRecommendation: '~40 minutes',
    calculatorAllowed: false,
  },
  {
    id: 'englit-poetry-2',
    type: 'poetry',
    unit: 9,
    title: 'Poetry Analysis: Dickinson, "There\'s a certain slant of light"',
    prompt: `**Suggested time: 40 minutes.**

The following poem by Emily Dickinson was first published after her death in *Poems* (1890), edited by Mabel Loomis Todd and T. W. Higginson. In it, the speaker reflects on a particular kind of light on winter afternoons. Read the poem carefully. Then, in a well-written essay, analyze how Dickinson uses literary elements and techniques to convey the speaker's complex response to this light.

${ANALYSIS_BULLETS}

---

> There's a certain slant of light,\\
> On winter afternoons,\\
> That oppresses, like the weight\\
> Of cathedral tunes.
>
> Heavenly hurt it gives us;\\
> We can find no scar,\\
> But internal difference\\
> Where the meanings are.
>
> None may teach it anything,\\
> 'T is the seal, despair,—\\
> An imperial affliction\\
> Sent us of the air.
>
> When it comes, the landscape listens,\\
> Shadows hold their breath;\\
> When it goes, 't is like the distance\\
> On the look of death.

*Text as published in* Poems *(1890). Dickinson's manuscript version differs in some words and punctuation.*`,
    parts: [
      {
        label: 'Essay',
        prompt: ESSAY_PART_PROMPT,
        maxPoints: 6,
        rubric: analysisRubric('poem', {
          thesis: ['response', 'attitude', 'dread', 'awe', 'despair', 'reverence', 'oppress', 'conveys', 'sacred', 'fear'],
          specifics: ['slant of light', 'winter afternoons', 'oppresses', 'weight', 'cathedral tunes', 'heavenly hurt', 'no scar', 'internal difference', 'where the meanings are', 'none may teach', 'seal', 'despair', 'imperial affliction', 'of the air', 'landscape listens', 'hold their breath', 'distance', 'look of death'],
          sophistication: 'the oxymoron "Heavenly hurt": the light wounds and blesses at once, so the speaker\'s response is neither simple sorrow nor simple awe; the paradox that the light leaves "no scar" yet changes "where the meanings are"; the ambiguity of the final stanza, where the light\'s departure is no relief but "the distance / On the look of death"; the tension between the poem\'s small hymn-like stanzas and its vast subject.',
        }),
        sampleAnswer: `*Annotated sample (scores 6/6). Rubric rows are marked in brackets.*

Dickinson's speaker begins with something as ordinary as afternoon light, yet by the poem's end she has arrived at "the look of death." **By describing the winter light through images of weight, wounding, and royal decree, and by personifying the landscape that waits for it, Dickinson conveys a response that mixes reverence with dread: the light is a sacred visitation that cannot be resisted or explained, and its blessing and its injury are the same thing.** **[Row A: a defensible interpretation of a complex response, linked to techniques.]**

The first stanza gives the light a physical burden. It "oppresses, like the weight / Of cathedral tunes." The simile is surprising, because music, like light, has no weight, and cathedral music is meant to lift the soul. Dickinson reverses that expectation so that the sacred becomes heavy. This suggests that the speaker experiences the light the way one might experience a solemn hymn in a vast church: as beautiful, but pressing down. The phrase "a certain slant" also matters, because "certain" means both "particular" and "unmistakable," which tells us the speaker recognizes this light from long experience. **[Row B: specific evidence with commentary on simile and diction.]**

The second stanza names the effect directly with an oxymoron: "Heavenly hurt it gives us." The alliteration of "heavenly hurt" binds the two words so that the blessing and the injury cannot be separated. Moreover, the hurt leaves "no scar, / But internal difference / Where the meanings are." Because the wound is invisible, it cannot be shown, treated, or explained to someone else; it changes the inner place where people make sense of the world. This explains why the speaker's response is so complex: she cannot dismiss the light as mere melancholy, because it has altered what things mean. **[Row B: a second technique (oxymoron, alliteration) connected to the line of reasoning.]**

The third stanza adds the language of authority. "None may teach it anything," the speaker says, and the light is "the seal, despair,— / An imperial affliction / Sent us of the air." A seal marks an official document or a royal command; an "imperial" affliction comes from an emperor. Therefore, the speaker presents despair not as a mood she chooses but as a decree she must accept. The dash after "despair" creates a pause, as if the speaker must gather herself before naming the affliction. **[Row B: commentary consistently explains how diction and punctuation advance the interpretation.]**

The final stanza shifts from the speaker's inner experience to the whole landscape. "When it comes, the landscape listens, / Shadows hold their breath." The personification makes the entire world behave like an audience before a king or a congregation before a priest, so the speaker's dread becomes universal. Yet the light's departure brings no relief: "When it goes, 't is like the distance / On the look of death." The image suggests the vacant gaze of a dying face, and the parallel structure of "When it comes" and "When it goes" shows that both arrival and departure are frightening. **[Row B: multiple techniques (personification, parallel structure, imagery) explain the poem's meaning.]**

The poem's deepest complexity is that the speaker never wishes the light away. The hurt is "heavenly," the music is from a "cathedral," and the affliction is "imperial." These words grant the light dignity even as they record its pain. The light therefore does not simply cause despair; it reveals a despair that was already present in human life, and the speaker reveres it for its honesty. A reader might take the poem as a description of seasonal depression, but that reading misses the religious language that makes the experience feel like a revelation as well as a wound. **[Row C: the essay explores a tension and accounts for an alternative interpretation.]**

**How this essay scores:**
- **Row A (1/1):** a thesis that interprets a complex response (reverence and dread), not a single emotion.
- **Row B (4/4):** specific evidence from every stanza, with consistent commentary on multiple techniques (simile, oxymoron, alliteration, diction of authority, personification, parallel structure).
- **Row C (1/1):** a sustained treatment of the poem's central paradox, including an alternative reading that the essay answers.`,
      },
    ],
    totalPoints: 6,
    timeRecommendation: '~40 minutes',
    calculatorAllowed: false,
  },
]

// ---------------------------------------------------------------------------
// Q2 — PROSE FICTION ANALYSIS
// ---------------------------------------------------------------------------

const proseFRQs: EngLitFRQ[] = [
  {
    id: 'englit-prose-1',
    type: 'prose',
    unit: 9,
    title: 'Prose Fiction Analysis: Austen\'s Mr. Collins',
    prompt: `**Suggested time: 40 minutes.**

The following excerpt is from Jane Austen's novel *Pride and Prejudice* (1813). Mr. Collins, a clergyman, is a distant cousin of the Bennet family and will inherit their estate. In this passage the narrator describes his character and his plan to marry one of the five Bennet daughters. Read the passage carefully. Then, in a well-written essay, analyze how Austen uses literary elements and techniques to portray Mr. Collins and to convey the narrator's complex attitude toward him.

${ANALYSIS_BULLETS}

---

> Mr. Collins was not a sensible man, and the deficiency of nature had been but little assisted by education or society; the greatest part of his life having been spent under the guidance of an illiterate and miserly father; and though he belonged to one of the universities, he had merely kept the necessary terms without forming at it any useful acquaintance. The subjection in which his father had brought him up had given him originally great humility of manner; but it was now a good deal counteracted by the self-conceit of a weak head, living in retirement, and the consequential feelings of early and unexpected prosperity. A fortunate chance had recommended him to Lady Catherine de Bourgh when the living of Hunsford was vacant; and the respect which he felt for her high rank, and his veneration for her as his patroness, mingling with a very good opinion of himself, of his authority as a clergyman, and his right as a rector, made him altogether a mixture of pride and obsequiousness, self-importance and humility.
>
> Having now a good house and a very sufficient income, he intended to marry; and in seeking a reconciliation with the Longbourn family he had a wife in view, as he meant to choose one of the daughters, if he found them as handsome and amiable as they were represented by common report. This was his plan of amends—of atonement—for inheriting their father's estate; and he thought it an excellent one, full of eligibility and suitableness, and excessively generous and disinterested on his own part.
>
> His plan did not vary on seeing them. Miss Bennet's lovely face confirmed his views, and established all his strictest notions of what was due to seniority; and for the first evening *she* was his settled choice. The next morning, however, made an alteration; for in a quarter of an hour's *tête-à-tête* with Mrs. Bennet before breakfast, a conversation beginning with his parsonage-house, and leading naturally to the avowal of his hopes, that a mistress for it might be found at Longbourn, produced from her, amid very complaisant smiles and general encouragement, a caution against the very Jane he had fixed on. "As to her *younger* daughters, she could not take upon her to say—she could not positively answer—but she did not *know* of any prepossession;—her *eldest* daughter she must just mention—she felt it incumbent on her to hint, was likely to be very soon engaged."
>
> Mr. Collins had only to change from Jane to Elizabeth—and it was soon done—done while Mrs. Bennet was stirring the fire. Elizabeth, equally next to Jane in birth and beauty, succeeded her of course.

*Text from the Project Gutenberg edition of* Pride and Prejudice*, Chapter 15.*`,
    parts: [
      {
        label: 'Essay',
        prompt: ESSAY_PART_PROMPT,
        maxPoints: 6,
        rubric: analysisRubric('passage', {
          thesis: ['portray', 'characteriz', 'mock', 'ridicul', 'satir', 'contempt', 'amus', 'attitude', 'pity', 'conveys'],
          specifics: ['not a sensible man', 'deficiency of nature', 'illiterate and miserly', 'necessary terms', 'useful acquaintance', 'humility of manner', 'self-conceit', 'weak head', 'fortunate chance', 'veneration', 'patroness', 'pride and obsequiousness', 'self-importance and humility', 'very sufficient income', 'amends', 'atonement', 'eligibility and suitableness', 'generous and disinterested', 'seniority', 'settled choice', 'stirring the fire', 'succeeded her of course', 'equally next to jane'],
          sophistication: 'the narrator\'s attitude is not simple contempt: the opening explains Collins\'s folly through his upbringing ("the subjection in which his father had brought him up"), so the satire also contains a diagnosis; the comedy of Collins\'s "plan of amends" exposes a marriage market in which daughters are interchangeable, so the satire widens from one fool to a social system (entail, patronage, the need for daughters to marry); free indirect style lets Collins\'s own vocabulary ("excellent," "excessively generous") condemn him.',
        }),
        sampleAnswer: `*Annotated sample (scores 6/6). Rubric rows are marked in brackets.*

Austen introduces Mr. Collins with a verdict before a description: he "was not a sensible man." **Through the narrator's judicial diction, balanced antitheses that pair each of Collins's vanities with a matching servility, and a free indirect style that lets his own self-satisfied vocabulary condemn him, Austen portrays Collins as a comic fool while conveying an attitude that mixes amused contempt with a sharper critique of the social system that rewards him.** **[Row A: a defensible interpretation of character and of the narrator's complex attitude.]**

The first sentence reads like a report from a court that has already reached its decision. The narrator states that "the deficiency of nature had been but little assisted by education or society," a phrasing that sounds almost scientific. The calm, formal syntax makes the insult more devastating, because it presents Collins's foolishness as a measured fact rather than an opinion. Yet the narrator also explains it: his father was "illiterate and miserly," and at university Collins "merely kept the necessary terms without forming at it any useful acquaintance." This suggests that Collins is the product of neglect as well as of nature, which complicates the mockery. **[Row B: specific evidence with commentary on diction and syntax.]**

The paragraph's final sentence explains why Collins is both humble and proud, through careful balance. His "respect" for Lady Catherine's "high rank," "mingling with a very good opinion of himself," makes him "altogether a mixture of pride and obsequiousness, self-importance and humility." The antitheses are paired so neatly that each quality seems to cause its opposite: he is servile toward those above him and self-important toward those below. Moreover, the word "veneration," a religious term, is directed at a wealthy patroness rather than at God. This irony shows that the clergyman worships rank, which is why Austen's attitude toward him becomes satire rather than mere amusement. **[Row B: a second technique (antithesis, ironic diction) explained in relation to characterization.]**

In the second paragraph, the narrator slips into Collins's own perspective. He considers his marriage scheme "an excellent one, full of eligibility and suitableness, and excessively generous and disinterested on his own part." These are Collins's words, not the narrator's, and the free indirect style lets the reader hear how pompous they sound. The phrase "plan of amends—of atonement" is especially ironic: the religious language of atonement is applied to a plan that costs Collins nothing and gains him a wife. Therefore, the narrator does not need to criticize Collins here; his own vocabulary does it for her. **[Row B: commentary consistently explains how point of view and diction advance the line of reasoning.]**

The final paragraphs turn this vanity into plot. Jane is Collins's "settled choice" for exactly one evening, until Mrs. Bennet's hint, delivered in breathless dashes, redirects him. The narrator reports that the change was "soon done—done while Mrs. Bennet was stirring the fire," and that Elizabeth "succeeded her of course." The repeated "done" and the domestic detail of the fire show how little feeling is involved: Collins changes his future wife in the time it takes to tend a fireplace. "Of course" mimics Collins's logic, in which daughters are interchangeable as long as they rank "equally next to Jane in birth and beauty." **[Row B: multiple techniques (structure, repetition, detail, tone) explained; the line of reasoning moves from character to consequence.]**

The comedy of this passage therefore has a serious edge. Collins is ridiculous, but the system he represents is not. He will inherit the Bennets' estate because of an entail, he holds his church position because of a "fortunate chance" of aristocratic patronage, and he can choose among five daughters because women in his society depend on marriage for security. The narrator's amusement at Collins thus becomes a broader critique of a world in which a foolish man holds every advantage, and the daughters, including clever Elizabeth, are treated as replaceable. **[Row C: the essay situates the characterization in a broader social context and explores the tension between comedy and critique, sustained across the essay.]**

**How this essay scores:**
- **Row A (1/1):** a thesis with a defensible interpretation of both character and narrative attitude.
- **Row B (4/4):** specific evidence from each paragraph, with consistent commentary on multiple techniques (diction, syntax, antithesis, irony, free indirect style, structure).
- **Row C (1/1):** a sustained argument that the satire widens from one man to a social system, with attention to the narrator's partial sympathy.`,
      },
    ],
    totalPoints: 6,
    timeRecommendation: '~40 minutes',
    calculatorAllowed: false,
  },
  {
    id: 'englit-prose-2',
    type: 'prose',
    unit: 9,
    title: 'Prose Fiction Analysis: Dickens\'s Miss Havisham',
    prompt: `**Suggested time: 40 minutes.**

The following excerpt is from Charles Dickens's novel *Great Expectations* (1861). The narrator, Pip, now an adult, recalls the day when, as a poor village boy, he was sent to "play" at the house of the wealthy and reclusive Miss Havisham. Read the passage carefully. Then, in a well-written essay, analyze how Dickens uses literary elements and techniques to convey the complex impression Miss Havisham makes on Pip.

${ANALYSIS_BULLETS}

---

> I entered, therefore, and found myself in a pretty large room, well lighted with wax candles. No glimpse of daylight was to be seen in it. It was a dressing-room, as I supposed from the furniture, though much of it was of forms and uses then quite unknown to me. But prominent in it was a draped table with a gilded looking-glass, and that I made out at first sight to be a fine lady's dressing-table.
>
> Whether I should have made out this object so soon if there had been no fine lady sitting at it, I cannot say. In an arm-chair, with an elbow resting on the table and her head leaning on that hand, sat the strangest lady I have ever seen, or shall ever see.
>
> She was dressed in rich materials,—satins, and lace, and silks,—all of white. Her shoes were white. And she had a long white veil dependent from her hair, and she had bridal flowers in her hair, but her hair was white. Some bright jewels sparkled on her neck and on her hands, and some other jewels lay sparkling on the table. Dresses, less splendid than the dress she wore, and half-packed trunks, were scattered about. She had not quite finished dressing, for she had but one shoe on,—the other was on the table near her hand,—her veil was but half arranged, her watch and chain were not put on, and some lace for her bosom lay with those trinkets, and with her handkerchief, and gloves, and some flowers, and a Prayer-Book all confusedly heaped about the looking-glass.
>
> It was not in the first few moments that I saw all these things, though I saw more of them in the first moments than might be supposed. But I saw that everything within my view which ought to be white, had been white long ago, and had lost its lustre and was faded and yellow. I saw that the bride within the bridal dress had withered like the dress, and like the flowers, and had no brightness left but the brightness of her sunken eyes. I saw that the dress had been put upon the rounded figure of a young woman, and that the figure upon which it now hung loose had shrunk to skin and bone. Once, I had been taken to see some ghastly waxwork at the Fair, representing I know not what impossible personage lying in state. Once, I had been taken to one of our old marsh churches to see a skeleton in the ashes of a rich dress that had been dug out of a vault under the church pavement. Now, waxwork and skeleton seemed to have dark eyes that moved and looked at me. I should have cried out, if I could.
>
> "Who is it?" said the lady at the table.
>
> "Pip, ma'am."
>
> "Pip?"
>
> "Mr. Pumblechook's boy, ma'am. Come—to play."
>
> "Come nearer; let me look at you. Come close."
>
> It was when I stood before her, avoiding her eyes, that I took note of the surrounding objects in detail, and saw that her watch had stopped at twenty minutes to nine, and that a clock in the room had stopped at twenty minutes to nine.
>
> "Look at me," said Miss Havisham. "You are not afraid of a woman who has never seen the sun since you were born?"
>
> I regret to state that I was not afraid of telling the enormous lie comprehended in the answer "No."

*Text from the Project Gutenberg edition of* Great Expectations*, Chapter 8.*`,
    parts: [
      {
        label: 'Essay',
        prompt: ESSAY_PART_PROMPT,
        maxPoints: 6,
        rubric: analysisRubric('passage', {
          thesis: ['impression', 'fascinat', 'horror', 'fear', 'awe', 'dread', 'attract', 'repel', 'wonder', 'conveys', 'pity'],
          specifics: ['wax candles', 'no glimpse of daylight', 'strangest lady', 'all of white', 'her hair was white', 'bridal flowers', 'one shoe', 'half arranged', 'half-packed', 'confusedly heaped', 'prayer-book', 'faded and yellow', 'withered', 'sunken eyes', 'skin and bone', 'waxwork', 'skeleton', 'cried out', 'come to play', 'twenty minutes to nine', 'stopped', 'never seen the sun', 'enormous lie'],
          sophistication: 'the double perspective of the adult narrator recalling the child (the comic understatement of "I regret to state" and the "enormous lie" shows the older Pip judging the frightened boy); the tension between splendor and decay, which makes Miss Havisham both glamorous and ghastly and foreshadows how wealth will both attract and corrupt Pip; the stopped clocks as an image of a life frozen by a single wound, which suggests pity as well as fear.',
        }),
        sampleAnswer: `*Annotated sample (scores 6/6). Rubric rows are marked in brackets.*

Pip enters Miss Havisham's room expecting to "play," and he leaves the scene having told "the enormous lie" that he is not afraid. **Through a catalog of white, splendid objects that turn out to be yellowed and withered, comparisons to a waxwork and a skeleton, and the double perspective of an adult narrator remembering a frightened child, Dickens conveys an impression of Miss Havisham that is at once dazzling and horrifying: she embodies the glamour of wealth and the decay of a life that has stopped.** **[Row A: a defensible interpretation of a complex impression, with the techniques that convey it.]**

Dickens first establishes the room as a place cut off from the natural world. It is "well lighted with wax candles," but "No glimpse of daylight was to be seen in it." The short, flat sentence makes the absence of daylight feel like a rule of the house. Because the light is artificial, the room suggests a stage or a shrine rather than a home, which prepares the reader for a woman who has, as she later says, "never seen the sun since you were born." **[Row B: specific evidence with commentary on setting and syntax.]**

The description of Miss Havisham herself begins with splendor. She wears "rich materials,—satins, and lace, and silks,—all of white," and "bright jewels sparkled on her neck and on her hands." The catalog dazzles a poor village boy who has never seen such wealth. Yet the same catalog is full of interruptions: she has "but one shoe on," her veil is "but half arranged," and the objects lie "confusedly heaped about the looking-glass." The repeated "but" and the long, cluttered sentence suggest a moment of dressing that was never completed. This shows that the splendor is frozen in time, which is the first sign that the dazzling impression is also a disturbing one. **[Row B: a second technique (catalog, syntax) explained in relation to the impression.]**

The fourth paragraph then turns the white into decay. Its anaphora of "I saw that" marks the stages of Pip's understanding: he sees that everything white "had lost its lustre and was faded and yellow," that "the bride within the bridal dress had withered," and that the figure had "shrunk to skin and bone." Moreover, the parallel phrasing "withered like the dress, and like the flowers" makes the woman one more object in the room, fading along with her possessions. The only brightness left is "the brightness of her sunken eyes," so her eyes become the most frightening detail. **[Row B: commentary consistently explains how repetition, simile, and imagery develop the line of reasoning.]**

Pip's two memories intensify the horror by comparison. He recalls "some ghastly waxwork at the Fair" and "a skeleton in the ashes of a rich dress," and then joins them: "Now, waxwork and skeleton seemed to have dark eyes that moved and looked at me." The child's mind can make sense of Miss Havisham only by comparing her to the dead and the artificial, and the moving eyes make those images suddenly alive. As a result, the impression shifts from wonder to terror; he "should have cried out, if I could." The stopped watch and clock, both at "twenty minutes to nine," then give the terror a cause: time itself has stopped in this room. **[Row B: multiple techniques (simile, allusion to memory, symbolism of the stopped clocks) explained.]**

The passage's complexity lies in its two voices. The child is terrified, but the adult narrator tells the story with a wry, controlled humor: "I regret to state that I was not afraid of telling the enormous lie comprehended in the answer 'No.'" The formal phrasing gently mocks the boy's fear, yet it also suggests the older Pip's regret about a life that this house would shape. Read with the stopped clocks in mind, Miss Havisham is not only a monster; she is a woman frozen by a wound, which invites pity as well as fear. The scene thus foreshadows the novel's larger tension, in which Pip will be drawn to wealth and refinement even as they distort him. **[Row C: the essay explores the narrator's double perspective and situates the scene in the novel's broader concerns, sustained across the essay.]**

**How this essay scores:**
- **Row A (1/1):** a thesis that interprets a complex impression (dazzling and horrifying) and names the techniques that create it.
- **Row B (4/4):** specific evidence from each part of the passage, with consistent commentary on multiple techniques (setting, catalog, syntax, anaphora, simile, symbol, point of view).
- **Row C (1/1):** a sustained treatment of the tension between the child's terror and the adult narrator's perspective, with a broader context.`,
      },
    ],
    totalPoints: 6,
    timeRecommendation: '~40 minutes',
    calculatorAllowed: false,
  },
]

// ---------------------------------------------------------------------------
// Q3 — LITERARY ARGUMENT
// ---------------------------------------------------------------------------

const literaryArgumentFRQs: EngLitFRQ[] = [
  {
    id: 'englit-argument-1',
    type: 'literary-argument',
    unit: 9,
    title: 'Literary Argument: The Burden of a Secret',
    prompt: `**Suggested time: 40 minutes.**

Many works of literature feature a character who keeps a significant secret, whether from other characters, from society, or even from himself or herself. The effort to conceal or reveal that secret often shapes the central conflict of the work.

Either from your own reading or from the following list, choose a work of fiction in which a character keeps a significant secret. Then, in a well-written essay, analyze how the secret, and the character's concealment or revelation of it, contributes to an interpretation of the work as a whole. Do not merely summarize the plot.

${ARGUMENT_BULLETS}

You may select a work from the list below or another work of comparable literary merit.

*Atonement* · *Beloved* · *Bleak House* · *Crime and Punishment* · *A Doll's House* · *Fences* · *Frankenstein* · *The Great Gatsby* · *Great Expectations* · *Hamlet* · *Jane Eyre* · *The Kite Runner* · *Never Let Me Go* · *Oedipus Rex* · *Passing* · *The Remains of the Day* · *The Scarlet Letter* · *The Strange Case of Dr. Jekyll and Mr. Hyde*`,
    parts: [
      {
        label: 'Essay',
        prompt: ESSAY_PART_PROMPT,
        maxPoints: 6,
        rubric: literaryArgumentRubric({
          thesis: ['reveals', 'suggests', 'argues', 'shows', 'illustrates', 'conveys', 'exposes', 'critique'],
          topic: ['secret', 'conceal', 'hidden', 'hide', 'reveal', 'confess', 'guilt'],
          sophistication: 'arguing that the secret matters less for what it hides than for what concealment does to the character or community (Dimmesdale\'s hidden guilt destroys him while Hester\'s public shame transforms her); accounting for an alternative reading (the ambiguous "A" on Dimmesdale\'s chest); situating the work in a broader context, such as the Puritan culture of public punishment or Hawthorne\'s own nineteenth-century view of it.',
        }),
        sampleAnswer: `*Annotated sample (scores 6/6). Rubric rows are marked in brackets. This sample uses Nathaniel Hawthorne's* The Scarlet Letter *(1850).*

In *The Scarlet Letter*, two people commit the same sin, but only one of them is punished in public. **Through the contrast between Hester Prynne, who wears her shame on her breast, and Arthur Dimmesdale, who hides his share of it for seven years, Hawthorne argues that concealed guilt is more destructive than public shame, and that a community which makes confession unbearable drives its most respected members into self-destruction.** **[Row A: a defensible interpretation of the work as a whole, tied to the secret.]**

Dimmesdale's secret first shows its effects on his body and mind. Hawthorne reveals that the minister keeps "a bloody scourge" locked away and uses it on himself, and that he keeps long "vigils" in the dark. These details show that the secret does not stay hidden inside him; it turns into self-punishment. This matters because Dimmesdale's congregation reveres him more as he suffers, mistaking his anguish for holiness. Therefore, the secret produces a cruel irony: the more he hides, the more he is admired, and the more he is admired, the less able he is to confess. **[Row B: specific evidence with commentary that explains how it supports the interpretation.]**

The midnight scaffold scene in "The Minister's Vigil" dramatizes this trap. Dimmesdale climbs the same scaffold where Hester was publicly shamed, but he does so at night, when no one can see him. He even calls Hester and Pearl to stand beside him, yet he refuses Pearl's request to stand with them "to-morrow noontide." The scene shows that he wants the relief of confession without its cost. Consequently, the scaffold, a symbol of public justice, becomes for him a stage for a private performance of guilt that changes nothing. **[Row B: a second specific scene, with commentary connecting it to the line of reasoning.]**

Hester's path shows the opposite outcome. Forced to wear the letter in public, she builds a life of quiet service, nursing the sick and helping the poor. Over time, Hawthorne writes, "many people refused to interpret the scarlet A by its original signification. They said that it meant Able." The meaning of the letter changes because Hester's sin is known; she cannot hide it, so she must live through it. Similarly, Dimmesdale finds peace only when he confesses on the scaffold in daylight, and he dies in the act. In other words, the revelation that frees him also kills him, because he waited until the secret had consumed him. **[Row B: commentary consistently explains how the contrast develops the interpretation of the work as a whole.]**

The novel's conclusion makes the moral explicit: "Be true! Be true! Be true! Show freely to the world, if not your worst, yet some trait whereby the worst may be inferred!" Yet Hawthorne complicates even this lesson. After Dimmesdale's death, witnesses disagree about whether a scarlet letter appeared on his chest, and some deny that he confessed anything at all. This ambiguity suggests that a community committed to public punishment cannot even agree on what it saw, and that the Puritan obsession with the outward sign was always less important than inward truth. **[Row C: the essay accounts for the novel's ambiguity and an alternative reading.]**

Ultimately, the secret in *The Scarlet Letter* is less important than the culture that makes keeping it seem necessary. Hawthorne, writing two centuries after the events of his novel, presents the Puritans' public punishments as a system that destroys the people it claims to purify. The broader implication is that a society which offers no path between concealment and disgrace will produce both hypocrites and martyrs, and that Dimmesdale was both. **[Row C: the essay situates its interpretation in a broader historical context, sustaining a complex argument.]**

**How this essay scores:**
- **Row A (1/1):** a defensible interpretation of the whole novel, not a plot summary.
- **Row B (4/4):** specific, accurate evidence (the scourge and vigils, the midnight scaffold, "Able," the final confession, the closing moral), each explained in relation to the line of reasoning.
- **Row C (1/1):** a sustained complex argument that addresses the novel's ambiguity and situates it in a broader context.`,
      },
    ],
    totalPoints: 6,
    timeRecommendation: '~40 minutes',
    calculatorAllowed: false,
  },
  {
    id: 'englit-argument-2',
    type: 'literary-argument',
    unit: 9,
    title: 'Literary Argument: Resisting an Expected Role',
    prompt: `**Suggested time: 40 minutes.**

In many works of literature, a character is expected to fill a role defined by family, gender, class, or community: the dutiful child, the devoted wife, the loyal servant, the successful son. Some characters accept such a role, some resist it, and some do both at once.

Either from your own reading or from the following list, choose a work of fiction in which a character struggles with a role that others expect him or her to play. Then, in a well-written essay, analyze how the character's response to that role contributes to an interpretation of the work as a whole. Do not merely summarize the plot.

${ARGUMENT_BULLETS}

You may select a work from the list below or another work of comparable literary merit.

*The Age of Innocence* · *Antigone* · *The Awakening* · *Death of a Salesman* · *A Doll's House* · *Ethan Frome* · *Fences* · *Hamlet* · *The House of Mirth* · *Invisible Man* · *Jane Eyre* · *The Joy Luck Club* · *Middlemarch* · *Pride and Prejudice* · *A Raisin in the Sun* · *The Remains of the Day* · *Their Eyes Were Watching God* · *Things Fall Apart*`,
    parts: [
      {
        label: 'Essay',
        prompt: ESSAY_PART_PROMPT,
        maxPoints: 6,
        rubric: literaryArgumentRubric({
          thesis: ['reveals', 'suggests', 'argues', 'shows', 'illustrates', 'conveys', 'exposes', 'critique'],
          topic: ['role', 'expect', 'duty', 'resist', 'conform', 'society', 'identity', 'freedom'],
          sophistication: 'treating the character\'s response as mixed rather than heroic or tragic (Edna\'s awakening frees her but also leaves her without any role she can live in); accounting for an alternative interpretation of the ending (the final swim as defeat or as liberation); situating the work in a broader context, such as the 1899 reception of The Awakening or the period\'s ideal of the self-sacrificing mother.',
        }),
        sampleAnswer: `*Annotated sample (scores 6/6). Rubric rows are marked in brackets. This sample uses Kate Chopin's* The Awakening *(1899).*

Edna Pontellier's society offers her one admired role, and Chopin names it with a single hyphenated word: the "mother-woman." **In *The Awakening*, Edna's growing refusal to play that role shows that the self-effacing ideal of nineteenth-century womanhood leaves no space for an independent self; yet Chopin also suggests that discovering such a self is not enough to survive in a world that offers no other role in which to live it.** **[Row A: a defensible interpretation of the work as a whole that is already complex.]**

Chopin defines the role early and precisely. The mother-women at Grand Isle "idolized their children, worshiped their husbands, and esteemed it a holy privilege to efface themselves as individuals and grow wings as ministering angels." The religious diction ("idolized," "worshiped," "holy," "angels") shows that the role is treated as sacred, which is why resisting it seems almost sinful. Moreover, the key verb is "efface": the ideal woman erases herself. When the narrator states that "Mrs. Pontellier was not a mother-woman," the novel immediately places Edna outside the only form of female virtue her world recognizes. **[Row B: specific evidence with commentary explaining how it supports the interpretation.]**

The novel also shows that the role is reinforced by the men who benefit from it. In the opening chapter, Léonce looks at his sunburned wife "as one looks at a valuable piece of personal property which has suffered some damage." This simile reveals that Edna's role is not only an ideal but an ownership arrangement: her body and appearance are assets of her husband's household. Therefore, when Edna later moves out of his house into her own small home, the act is not merely a change of address; it is a refusal to be property, which means her rebellion is economic as well as emotional. **[Row B: a second specific detail, with commentary connecting it to the line of reasoning.]**

Edna's clearest statement of resistance comes in her argument with Adèle Ratignolle, the perfect mother-woman. Edna says she "would give up the unessential; I would give my money, I would give my life for my children; but I wouldn't give myself." The distinction is striking because it accepts the most extreme sacrifice, life itself, while refusing the everyday sacrifice that the role demands: the surrender of the self. Adèle cannot understand it, which suggests that the culture has no language for what Edna wants. As a result, Edna's resistance isolates her even from the women who love her. **[Row B: commentary consistently explains how each piece of evidence advances the interpretation of the novel as a whole.]**

The ending brings the conflict to its crisis. Before she swims out, Edna thinks that her children "appeared before her like antagonists who had overcome her; who had overpowered and sought to drag her into the soul's slavery." As she walks to the water, she sees "a bird with a broken wing" circling "disabled down, down to the water." The image recalls Mademoiselle Reisz's warning that the artist "must possess the courageous soul that dares and defies," and the broken wing suggests that Edna has dared without the strength, or the support, to fly. **[Row B: specific evidence and commentary on symbolism, completing a line of reasoning across the novel.]**

Readers have long disagreed about whether Edna's final swim is a defeat or a liberation, and the novel supports both readings. She dies, but she also stands "naked in the open air" for "the first time in her life" and feels "like some new-born creature." The ambiguity is the point: Chopin refuses to reward Edna's awakening with a happy ending, because in 1899 there was no social role for a woman who would not "give herself." The novel was attacked by many reviewers when it appeared, which suggests that its critique of the mother-woman ideal touched a nerve. Ultimately, Edna's response to her role is both heroic and tragic, and the novel's meaning lies in that tension. **[Row C: the essay accounts for alternative interpretations and situates the work in a broader historical context, sustained across the essay.]**

**How this essay scores:**
- **Row A (1/1):** a defensible interpretation of the work as a whole, connected to the prompt's idea of an expected role.
- **Row B (4/4):** specific, accurate evidence from the beginning, middle, and end of the novel, with consistent commentary that ties each detail to the line of reasoning.
- **Row C (1/1):** a sustained, complex argument that treats Edna's response as both liberating and tragic and places it in historical context.`,
      },
    ],
    totalPoints: 6,
    timeRecommendation: '~40 minutes',
    calculatorAllowed: false,
  },
]

export const apEngLitFRQs: EngLitFRQ[] = [...poetryFRQs, ...proseFRQs, ...literaryArgumentFRQs]

export function getApEngLitFRQs(): EngLitFRQ[] {
  return apEngLitFRQs
}

export function getEngLitFRQsByType(type: EngLitFRQType, pool: EngLitFRQ[] = apEngLitFRQs): EngLitFRQ[] {
  return pool.filter((f) => f.type === type)
}

/**
 * Timed simulation: one essay of each type in exam order (Poetry, Prose Fiction,
 * Literary Argument), 18 points, 120 minutes.
 */
export function generateFullExamFRQs(pool: EngLitFRQ[] = apEngLitFRQs): {
  questions: EngLitFRQ[]
  totalPoints: number
  totalMinutes: number
} {
  const pick = <T>(arr: T[]): T | undefined => arr[Math.floor(Math.random() * arr.length)]
  const questions = ENG_LIT_FRQ_TYPES.map(({ type }) => pick(getEngLitFRQsByType(type, pool)) ?? pick(getEngLitFRQsByType(type))).filter(
    (q): q is EngLitFRQ => Boolean(q),
  )
  return {
    questions,
    totalPoints: questions.reduce((sum, q) => sum + q.totalPoints, 0),
    totalMinutes: ENG_LIT_SECTION_MINUTES,
  }
}
