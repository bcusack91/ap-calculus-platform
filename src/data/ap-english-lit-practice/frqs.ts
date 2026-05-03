import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP English Literature & Composition — 3 FRQs in 120 minutes (40 min each).
 *
 *   Q1 Poetry Analysis    — analyze how poetic elements convey complex meaning
 *   Q2 Prose Fiction Analysis — analyze how literary techniques convey complex meaning
 *   Q3 Literary Argument  — choose a work of literary merit and develop a defensible interpretation
 */

export const FRQS: SAQItem[] = [
  /* ---------- Q1: POETRY ANALYSIS ---------- */
  {
    type: 'saq',
    topic: 'frq-poetry-analysis',
    stimulus: `**FRQ #1 — Poetry Analysis (suggested time: 40 minutes)**

Read the following poem carefully. Then, in a well-constructed essay, analyze how the poet uses literary techniques to convey the speaker\'s complex attitude toward the abandoned house.

> **The House on the County Road** *(original; mid-twentieth century)*
>
> No one has lived there now for seven years.
> The porch has bowed. The screen door is unhinged
> and slaps against the frame in any wind.
> A maple sapling, finer than a wrist,
> has come up through the crack between the steps
> and stands there in the way of anyone
> who might still climb. No one does, of course.
> The deer come down from the woods at dusk
> and graze the apple trees the family planted
> in 1948 — Macintosh, Cortland, one
> wild seedling of unknown variety
> that bears, each year, with a kind of stubborn faith,
> three apples, large and pale and almost sweet.
> A neighbor told me once: a child was born here,
> a child died here, and other ordinary things,
> some of them happy. I do not know the family.
> I drive past, every Tuesday, on my way
> to town for groceries, and I always slow,
> and look, and find I cannot say exactly why.

In your response you should do the following:
- Respond to the prompt with a defensible thesis that presents an interpretation.
- Select and use evidence to support your line of reasoning.
- Explain how the evidence supports your line of reasoning.
- Use appropriate grammar and punctuation in communicating your argument.`,
    parts: [
      {
        prompt: '**Thesis (1 point):** State a defensible interpretation of the speaker\'s complex attitude toward the abandoned house.',
        rubric: '1 pt: thesis identifies a complex attitude (not a single emotion). Acceptable: "The speaker views the house with reverent grief mixed with respect for nature\'s steady reclamation"; "Drawn to the house\'s persistence even in abandonment, the speaker is moved by a sense of inheritance she cannot name." 0 pts: single-emotion claims ("the speaker is sad") OR mere description ("the speaker drives past every week").',
      },
      {
        prompt: '**Evidence & Commentary (4 points):** Provide specific evidence from the poem and explain how literary techniques contribute to the speaker\'s complex attitude.',
        rubric: 'Possible techniques to discuss (any 2–3 well-developed):\n• Diction of slow erosion — "bowed," "unhinged," "slaps" — register decay without melodrama.\n• The maple sapling "finer than a wrist… in the way of anyone / who might still climb" — concrete image of nature politely barring re-entry.\n• Catalog of apple varieties, dated to 1948 — anchors abandonment in a once-deliberate human act of planting; juxtaposes specific human history with ongoing natural process.\n• The "wild seedling" that bears "three apples… with a kind of stubborn faith" — personification suggests endurance and offers an emblem for the speaker\'s own posture.\n• Neighbor\'s catalog ("a child was born here, a child died here, and other ordinary things, some of them happy") — terse syntax flattens grief and joy together; refuses sentimentality.\n• The speaker\'s admitted not-knowing ("I do not know the family… I cannot say exactly why") — the poem ends with epistemological humility rather than emotional release.\n• Free verse with conversational rhythm — appropriate for a meditation that resists conclusion.\n4 pts: specific evidence + commentary that consistently and explicitly explains how techniques create complex attitude. 3 pts: specific evidence + some commentary. 2 pts: mostly summary. 1 pt: oversimplified analysis. 0 pts: no relevant evidence.',
      },
      {
        prompt: '**Sophistication (1 point):** Demonstrate sophistication of thought.',
        rubric: '1 pt awarded for sustained sophistication: (a) engaging tensions or contradictions (the speaker is moved but unable to name why; nature both destroys and continues; the family is unknown yet powerfully present), (b) situating the poem in a broader context (American pastoral tradition; meditations on rural depopulation; elegy without a known subject), (c) consistently vivid and persuasive prose. NOT awarded for a single concessionary sentence or a tacked-on hedge.',
      },
    ],
  },

  /* ---------- Q2: PROSE FICTION ANALYSIS ---------- */
  {
    type: 'saq',
    topic: 'frq-prose-fiction-analysis',
    stimulus: `**FRQ #2 — Prose Fiction Analysis (suggested time: 40 minutes)**

Read the following passage carefully. Then, in a well-constructed essay, analyze how the author uses literary techniques to characterize the relationship between Annie and her sister Ruth.

> *(Original short story, set in the kitchen of an inherited family home, c. 2010.)*
>
> Annie unpacked the box marked KITCHEN — MOM in their mother\'s round, deliberate handwriting, and laid each object on the counter as though laying out evidence. Ruth, who had driven up that morning from Boston with a casserole and a list, watched her from the doorway.
>
> "You don\'t have to do that today," Ruth said.
>
> "I know I don\'t have to."
>
> "I just mean. There\'s no rush."
>
> Annie said nothing. She unwrapped a small enamel saucepan, blue with white speckles, the inside scorched at one spot near the rim from the year their mother had tried to caramelize sugar for a French recipe and had become impatient. The mark was the size of a fingernail. Annie held the pan a moment longer than Ruth thought she would.
>
> "I think we should keep that one," Ruth said gently. She moved closer, into the room, in the slightly tentative way she had developed over the years of not quite knowing whether her presence in their mother\'s house would be welcomed or merely tolerated.
>
> "I was going to keep it," Annie said. She did not look up.
>
> "I know," Ruth said. "I know you were."
>
> A silence settled in the kitchen, the comfortable, listening kind of silence that two people fall into only when they have known each other a long time and know also the shape of what cannot, or will not, be said. Annie set the pan down on the counter, very gently, and reached into the box for the next thing. It was the wooden spoon — the one their mother had used for everything, soup and gravy and the rare batch of cookies and once, memorably, to point at a television set on which a man was saying something she found foolish. The handle was worn smooth.
>
> "Annie," Ruth said.
>
> "Don\'t."
>
> "I wasn\'t going to."
>
> "You were."
>
> Ruth closed her eyes for a moment. When she opened them she said, in a tone that was not quite an apology and not quite anything else, "I made coffee. It\'s in the carafe. There\'s a clean cup on the table." Then she went back into the dining room, and after a moment Annie heard her unzipping a suitcase, and the soft, methodical sound of someone unpacking very slowly so as not to seem to be hovering.

In your response you should do the following:
- Respond to the prompt with a defensible thesis that presents an interpretation.
- Select and use evidence to support your line of reasoning.
- Explain how the evidence supports your line of reasoning.
- Use appropriate grammar and punctuation in communicating your argument.`,
    parts: [
      {
        prompt: '**Thesis (1 point):** State a defensible thesis that interprets the relationship between Annie and Ruth.',
        rubric: '1 pt: defensible thesis interpreting the RELATIONSHIP (not a single character). Examples: "The sisters share a bond of long, patient familiarity that has been bent — but not broken — by Annie\'s solitary claim on their mother and the house"; "Despite small frictions of place and authority, Annie and Ruth communicate through a shared language of restraint that proves more intimate than open speech." 0 pts: single-character analysis or descriptive summary.',
      },
      {
        prompt: '**Evidence & Commentary (4 points):** Provide specific evidence from the passage and explain how literary techniques shape characterization of the relationship.',
        rubric: 'Possible techniques to discuss (any 2–3):\n• Setting/object focus — kitchen objects (saucepan, wooden spoon) carry the story\'s emotional weight; sisters communicate through what they handle, not what they say.\n• Pacing of dialogue — short, clipped exchanges with one-word interruptions ("Don\'t." / "I wasn\'t going to." / "You were.") capture the way the sisters anticipate each other.\n• Detail of Ruth\'s entry "in the slightly tentative way she had developed over the years of not quite knowing whether her presence… would be welcomed" — establishes a long-standing imbalance about who belongs in the house.\n• Ruth\'s anticipatory line "I think we should keep that one" met with Annie\'s "I was going to keep it" — demonstrates love expressed as small territorial corrections.\n• "The comfortable, listening kind of silence that two people fall into only when they have known each other a long time and know also the shape of what cannot, or will not, be said" — narrator names the relationship explicitly while leaving its content unstated.\n• Close-third narration through Annie\'s focalization, but with sympathy for Ruth (the suitcase being unpacked "very slowly so as not to seem to be hovering") — produces a balanced portrait of two sisters under strain.\n• Object as memory — the scorched saucepan and the wooden spoon both carry vivid, specific anecdotes; the inheritance is being handled object by object.\n4 pts: consistent commentary linking specific evidence to relationship characterization. 3 pts: specific evidence + some commentary. 2 pts: mostly summary. 1 pt: oversimplified. 0 pts: no relevant evidence.',
      },
      {
        prompt: '**Sophistication (1 point):** Demonstrate sophistication of thought.',
        rubric: '1 pt for sustained sophistication: (a) tracing tensions (love expressed as friction; intimacy expressed as silence; an inheritance that exposes long-standing imbalances), (b) situating the passage in a broader context (literature of grief, sibling relationships, women and inherited domestic objects), (c) consistently vivid prose. Not awarded for tacked-on hedges.',
      },
    ],
  },

  /* ---------- Q3: LITERARY ARGUMENT ---------- */
  {
    type: 'saq',
    topic: 'frq-literary-argument',
    stimulus: `**FRQ #3 — Literary Argument (suggested time: 40 minutes)**

In many works of literature, a character makes a journey — physical, emotional, or both — that ends not with arrival at a destination but with a transformed understanding of where the character began.

Either from your own reading or from the following list, select a novel or play in which a central character undertakes such a journey. Then, in a well-written essay, analyze how the journey contributes to an interpretation of the work as a whole. **Do not merely summarize the plot.**

You may select a work from the list below or another work of comparable literary merit:

- *Beloved* by Toni Morrison
- *Their Eyes Were Watching God* by Zora Neale Hurston
- *The Great Gatsby* by F. Scott Fitzgerald
- *Heart of Darkness* by Joseph Conrad
- *A Portrait of the Artist as a Young Man* by James Joyce
- *Crime and Punishment* by Fyodor Dostoevsky
- *Hamlet* by William Shakespeare
- *King Lear* by William Shakespeare
- *Wuthering Heights* by Emily Brontë
- *The Brief Wondrous Life of Oscar Wao* by Junot Díaz
- *Native Son* by Richard Wright
- *Their Eyes Were Watching God* by Zora Neale Hurston
- *A Streetcar Named Desire* by Tennessee Williams
- *Death of a Salesman* by Arthur Miller
- *Beloved* by Toni Morrison
- *The Sympathizer* by Viet Thanh Nguyen
- *Pachinko* by Min Jin Lee
- *Things Fall Apart* by Chinua Achebe`,
    parts: [
      {
        prompt: '**Thesis (1 point):** State a defensible interpretation of the work as a whole that connects the character\'s journey to the broader meaning of the work.',
        rubric: '1 pt: defensible thesis ties a specific journey to a defensible interpretation of the work as a whole. Example: "Sethe\'s journey in *Beloved* — from Sweet Home through the slaughter at 124 to her gradual reentry into community — argues that no escape from trauma is possible without the painful work of being witnessed by others." 0 pts: thesis that merely names a work, summarizes plot, or asserts a vague theme without linking it to journey.',
      },
      {
        prompt: '**Evidence & Commentary (4 points):** Provide specific evidence from the chosen work and explain how it supports your interpretation. Do not summarize plot; analyze.',
        rubric: 'Strong responses cite specific scenes, characters, and (where appropriate) language from the text. The journey may be physical (Marlow up the Congo; Janie\'s movements through Eatonville and the Everglades), emotional/spiritual (Hamlet\'s movement from paralysis to action; Raskolnikov\'s movement from theory to confession), or both.\n4 pts: specific textual evidence + commentary that consistently links evidence to interpretation. 3 pts: specific evidence with some commentary. 2 pts: evidence present but mostly summarized. 1 pt: vague evidence. 0 pts: no relevant evidence or a chosen work that does not support a journey reading.\nAvoid: extended plot summary; vague claims ("the character grows a lot"); asserted themes not anchored in textual particulars.',
      },
      {
        prompt: '**Sophistication (1 point):** Demonstrate sophistication of thought.',
        rubric: '1 pt for sustained sophistication: (a) tracing tensions (the journey may transform the character without resolving the conditions that made it necessary), (b) situating the work in a broader context (genre, historical setting, literary tradition), (c) consistently vivid and persuasive prose. NOT awarded for: a single qualifying sentence; oversimplified concession; mere display of vocabulary.',
      },
    ],
  },
]
