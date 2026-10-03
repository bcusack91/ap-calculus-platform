export const actReadingStratPart1Data = {
  topicSlug: 'act-reading-strategy-act',
  sections: [
    {
      id: 'act-rs1-intro',
      type: 'text' as const,
      content: `
# 🗺️ Passage Mapping: Structure and Function

**Part 1 of 7 — Paragraph Jobs, Passage Shapes, Voices & Finding Evidence Fast**

## The Section at a Glance

The Enhanced ACT Reading section gives you **36 questions in 40 minutes**, and every question has **4 answer choices**. Passages come from four areas: **literary narrative** (fiction or memoir), **social science**, **humanities**, and **natural science**. One passage set may pair two shorter passages on the same topic (Part 7 covers those). ACT groups the questions into three reporting categories:

| ACT category | What it asks | Typical stem |
|---|---|---|
| Key Ideas and Details | What the text says and what it implies | "According to the passage…", "It can reasonably be inferred…" |
| Craft and Structure | How the text is built and why | "The third paragraph mainly serves to…", "As it is used in…" |
| Integration of Knowledge and Ideas | How claims, evidence and passages relate | "Both authors would agree…", "Which detail best supports…" |

Every one of those questions is easier if you know **where things are** and **what each part of the passage is doing**. That is what a passage map gives you.

## What a Passage Map Is

A map is a short note, **three to six words per paragraph**, that names the paragraph's **job**, not its every detail. Write it (or say it in your head) as you finish each paragraph.

- Weak note: "drought 2009, reservoir third, rationing" (a list of facts you will reread anyway)
- Strong note: "¶2: crisis that forces change" (the paragraph's role in the passage)

Start each note with a **job verb**. The same handful of jobs appears in almost every ACT passage:

| Job verb | What the paragraph does | Signal words that often announce it |
|---|---|---|
| introduces | sets up the topic, person, or old view | "For decades…", "Many people believe…" |
| gives an example | supports a claim with a case | "For instance…", "Consider…", "In one study…" |
| complicates / contrasts | brings in a problem or opposing evidence | "However…", "Yet…", "But…" |
| concedes | admits a point for the other side | "It is true that…", "Admittedly…" |
| responds / revises | answers the complication or updates the view | "Still…", "Later studies…", "Today…" |
| concludes / evaluates | gives the author's judgment | "In other words…", "Both are partly right…" |

## Whole-Passage Shapes

Once you have a note for each paragraph, read your notes top to bottom. Most ACT passages follow one of a few shapes, and "The passage as a whole is best described as moving from…" questions are simply asking you to name the shape.

| Shape | Typical passage type |
|---|---|
| old view → complication → revised view | natural science, social science |
| problem → proposed solution → reactions | social science |
| claim → concession → response | humanities, opinion essays |
| early event → turning point → present reflection | literary narrative, memoir |
| person's background → achievement → lasting influence | humanities biographies |

## Function Questions: Answer With the Job, Not the Content

Stems such as **"mainly serves to," "the function of the third paragraph," or "the author includes this sentence in order to"** ask what a piece of text **does**. The right answer is almost always a job verb plus a short summary of what it is doing it to.

**The deletion test:** imagine the paragraph or sentence is gone. What would the reader lose? A setup for the next paragraph? An example of the claim? The opposing view the author answers? That loss *is* the function.

Two traps show up in nearly every function question:
1. **Wrong location.** The choice describes something that really happens in the passage, but in a different paragraph.
2. **Right topic, wrong job.** The choice mentions the correct content but says the paragraph *explains* it when the paragraph only *mentions* it, or *rejects* it when the paragraph only *questions* it.

## Track the Voices

Many passages contain more than one point of view. Mark **who** holds each view as you map.

- In an argument, quoted experts and "critics" are not the author. The author's own judgment usually appears in the **concluding** paragraph, often weighing the earlier views.
- In a narrative, a character's opinion early on is often a view the narrator **later revises**. A sentence such as "My father called it laziness" may exist precisely so that the narrator can show how that view changed.

## The Map Is Also an Index

When a question asks *where* the passage discusses something ("A reader looking for the reason attendance rose should look in…"), or gives no line reference at all, your map tells you which paragraph to reread. You should never have to search the whole passage from the top.
      `
    },
    {
      id: 'act-rs1-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Map a science passage, then answer a function question and a shape question</b></summary>

**Passage:**

¶1 For most of the twentieth century, doctors told patients with back pain to stay in bed until the pain passed.

¶2 The advice seemed sensible: rest, after all, lets most injuries heal.

¶3 In the 1990s, however, several large trials found that patients who kept moving recovered faster than patients who rested.

¶4 Today most guidelines recommend gentle activity, with bed rest reserved for rare cases.

**Map:** ¶1 introduces the old advice · ¶2 explains why it seemed right · ¶3 "however": evidence against it · ¶4 the current revised view.

**Question 1:** The third paragraph mainly serves to:
- present evidence that challenged the earlier advice ✓
- explain why doctors first recommended bed rest (that is the job of the second paragraph)
- describe the guidelines doctors follow today (that is the fourth paragraph)
- argue that bed rest never helps anyone (too strong: the fourth paragraph keeps it for rare cases)

**Question 2:** The passage as a whole moves from an **old view, to a complication, to a revised current view**. Notice that you can answer this from your four notes without rereading a word of the passage.
</details>

<details>
<summary><b>Example 2: The function of a sentence inside a narrative</b></summary>

**Passage:** My aunt's garden was, by any ordinary measure, a failure. The tomatoes split, the beans wandered off their poles, and weeds crowded the lettuce. My cousins laughed at it every summer. I was nearly grown before I noticed that she never seemed to care about the vegetables at all; what she watched, every morning, were the bees.

**Question:** The sentence "My cousins laughed at it every summer" mainly serves to:

**Step 1 — Deletion test.** Without it, we lose the family's dismissive view of the garden.

**Step 2 — Look for the turn.** The last sentence begins "I was nearly grown before I noticed…", which signals that the narrator came to see the garden differently from the cousins.

**Answer:** It presents a view of the garden that the narrator does not end up sharing. A choice such as "shows that the narrator agreed the garden was a failure" gets the job backward, and "describes what grew in the garden" belongs to the sentence before it.
</details>
      `
    },
    {
      id: 'act-rs1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Map This Passage** 🎯

Read the passage, write a three-to-six-word job note for each paragraph, then answer the questions.

¶1 When the town of Alder Falls closed its main street to cars in 1972, the mayor promised that shoppers would flood the new pedestrian mall.

¶2 For a few years, they did. Cafés set out tables, and a weekend craft market drew visitors from three counties.

¶3 By the late 1980s, however, half the storefronts stood empty. Shoppers had drifted to a highway mall with free parking, and the quiet street felt deserted after dark.

¶4 In 2015 the town reopened the street to slow, one-way traffic while keeping the wide sidewalks. Store owner Nita Grace credits the change with bringing customers back; planner Sam Ortiz argues that a new apartment building nearby did more.

¶5 Both are probably partly right. Traffic made the street feel alive again, but a shopping street also needs people who live close enough to walk to it.
      `,
      exercise: {
        questions: [
          {
            question: `Which choice best describes the function of the third paragraph?`,
            options: [
              `It explains why the mayor first closed the street to cars`,
              `It presents the planner's view of the street's recovery`,
              `It describes the decline after the early success`,
              `It describes the craft market that drew weekend visitors`,
            ],
            correctAnswer: 2,
            explanation: `The word "however" turns from the early boom in the second paragraph to empty storefronts and departing shoppers, so the third paragraph's job is to show the decline. The mayor's reason for closing the street is in the first paragraph, the planner's view appears in the fourth, and the craft market is a detail of the early success described in the second.`,
          },
          {
            question: `The passage as a whole is best described as moving from:`,
            options: [
              `an initial success, to a decline, to a change and an assessment of it`,
              `a problem, to three competing solutions, to a final recommendation`,
              `a personal memory, to a scientific study, to a call for public action`,
              `a current debate, to its origins long ago, to a prediction about it`,
            ],
            correctAnswer: 0,
            explanation: `Reading the five job notes in order gives the shape: early success, decline, the 2015 change, and the author's judgment of the two explanations. The passage offers one change rather than three solutions, contains no personal memory or study, and moves forward in time rather than tracing a debate back to its origins.`,
          },
          {
            question: `A reader looking for the reason shoppers stopped coming to the pedestrian mall should look in which paragraph?`,
            options: [`The second paragraph`, `The fourth paragraph`, `The fifth paragraph`, `The third paragraph`],
            correctAnswer: 3,
            explanation: `The third paragraph gives the cause directly: shoppers drifted to a highway mall with free parking. The second paragraph describes the years when shoppers did come, while the fourth and fifth paragraphs discuss why customers later returned, not why they left.`,
          },
          {
            question: `Which choice best describes the function of the fifth paragraph?`,
            options: [
              `It introduces a new cause for the mall's decline`,
              `It weighs the two views and grants each some credit`,
              `It sides fully with the store owner's explanation`,
              `It restates the planner's claim without judging its merit`,
            ],
            correctAnswer: 1,
            explanation: `"Both are probably partly right" is the author's own voice evaluating the two people quoted in the fourth paragraph: traffic (Grace's point) helped, and nearby residents (Ortiz's point) matter too. The paragraph is about the recovery, not the decline, it credits Ortiz as well as Grace, and it does judge the planner's claim by calling it partly right.`,
          },
        ],
      },
    },
    {
      id: 'act-rs1-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Name the Paragraph's Job** 🔍

Each line below is the opening of a paragraph. Choose the job the paragraph most likely performs.
      `,
      exercise: {
        dropdowns: [
          {
            label: '"Critics, however, point out that the program has never been tested outside one city."',
            options: ['gives an example of the claim', 'introduces an opposing view', 'concludes with the author\'s judgment', 'concedes a point to critics'],
          },
          {
            label: '"Consider the case of Fern Hollow, a village that tried the plan in 2004."',
            options: ['gives an example of the claim', 'introduces an opposing view', 'concludes with the author\'s judgment', 'concedes a point to critics'],
          },
          {
            label: '"It is true that the plan costs more at first. Over ten years, though, it pays for itself."',
            options: ['gives an example of the claim', 'introduces an opposing view', 'concludes with the author\'s judgment', 'concedes a point to critics'],
          },
        ],
        correctAnswers: ['introduces an opposing view', 'gives an example of the claim', 'concedes a point to critics'],
        hint1: '"However" and "critics" signal a view that pushes against the passage so far.',
        hint2: '"Consider the case of…" announces a specific instance.',
        hint3: '"It is true that… though…" admits a point and then answers it.',
        explanation: 'Signal words reveal jobs quickly: "Critics, however" brings in opposition, "Consider the case of" introduces an example, and "It is true that… though" concedes a point before responding to it.',
      },
    },
    {
      id: 'act-rs1-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

Use this short passage for both "Try it" questions. Map it first.

¶1 The Pelham Bridge was built in 1931 to carry trains, not cars.

¶2 When the railroad closed in 1979, the county planned to tear it down, and for years the rusting span was fenced off.

¶3 In 2006 a group of neighbors raised money to deck it with wooden planks and open it to walkers and cyclists.

¶4 Today it carries more people on a summer weekend than its trains ever did in a week.

<details>
<summary><b>Try it: What is the function of the second paragraph?</b></summary>

It describes the period of neglect and the threat of demolition that came before the bridge's revival. It sets up the contrast with the neighbors' rescue in the third paragraph. A choice saying it "explains why the bridge was built" belongs to the first paragraph.
</details>

<details>
<summary><b>Try it: Which choice best describes the structure of the passage: (1) original purpose, abandonment, rescue, current success; or (2) a problem, two solutions, and a debate?</b></summary>

Structure (1). The notes read: built for trains · abandoned and fenced · neighbors convert it · busier than ever. There is only one solution and no debate.
</details>

**ACT Tip:** Map with job verbs, not facts. "¶3: neighbors rescue it" takes three seconds and answers every function, structure, and location question on the paragraph.
      `
    },
    {
      id: 'act-rs1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋

Literary narrative: this passage is adapted from a story about a summer job.

¶1 The summer I turned fifteen, my uncle hired me to help him repaint the lighthouse on Gull Point. I expected to be bored, and I was. The work was slow: scraping, priming, then two coats of white that had to dry between gusts of salt wind.

¶2 My uncle talked very little. When he did, it was about the weather or the paint, and I decided early on that he simply had nothing else to say.

¶3 In August a storm forced us into the lamp room for an afternoon. With nothing to paint, he began, haltingly, to tell me about the keepers who had lived there before the light was automated: a widow who kept the lamp lit for eleven years, a boy who rowed out in a gale to reach two stranded fishermen.

¶4 I understood then that his silence had never been emptiness. He had been listening to the place all along, and he had been waiting to see whether I would.
      `,
      exercise: {
        questions: [
          {
            question: `Over the course of the passage, the narrator's view of the uncle shifts from:`,
            options: [
              `admiring his stories to doubting that they were true`,
              `resenting his strictness to forgiving him after the storm`,
              `fearing his temper to trusting his great skill as a painter`,
              `thinking he had nothing to say to seeing him as attentive`,
            ],
            correctAnswer: 3,
            explanation: `The second paragraph records the first impression ("he simply had nothing else to say"), and the fourth revises it: his silence was listening, not emptiness. The narrator never doubts the keepers' stories, and the uncle is described as quiet, not strict or bad-tempered.`,
          },
          {
            question: `The second paragraph mainly serves to:`,
            options: [
              `establish a first impression that the narrator later revises`,
              `explain why the lighthouse was eventually automated`,
              `describe the steps involved in repainting the lighthouse`,
              `show that the uncle disliked having the narrator's help`,
            ],
            correctAnswer: 0,
            explanation: `The narrator's early conclusion that the uncle "had nothing else to say" is exactly the view the last paragraph overturns, so the second paragraph sets it up. Automation is mentioned only in passing in the third paragraph, the painting steps are in the first, and nothing suggests the uncle resented the narrator's help.`,
          },
          {
            question: `A reader looking for the event that led to the narrator's new understanding should look in which paragraph?`,
            options: [`The first paragraph`, `The second paragraph`, `The third paragraph`, `The fourth paragraph`],
            correctAnswer: 2,
            explanation: `The storm and the uncle's stories, the event that changes the narrator's view, happen in the third paragraph. The fourth paragraph states the new understanding itself rather than the event that caused it, and the first two paragraphs come before any change.`,
          },
          {
            question: `The details about the widow and the boy in the third paragraph primarily serve to:`,
            options: [
              `prove that most keepers were widows and children`,
              `show the history the uncle quietly knew`,
              `explain why the lighthouse needed a new coat of paint`,
              `suggest the narrator wanted to become a keeper`,
            ],
            correctAnswer: 1,
            explanation: `The two stories reveal how much the uncle knew about the place, which is what lets the narrator see his silence as listening. Two examples cannot show what "most" keepers were like, the stories have nothing to do with the paint, and the narrator never expresses a wish for the job.`,
          },
          {
            question: `The first paragraph primarily:`,
            options: [
              `introduces the uncle's stories about earlier keepers`,
              `explains why the uncle chose to hire the narrator`,
              `describes the storm that trapped them in the lamp room`,
              `sets the scene and the narrator's expectation of boredom`,
            ],
            correctAnswer: 3,
            explanation: `The opening paragraph establishes the place, the job, and the narrator's expectation of boredom, the setup the rest of the story works against. The keepers' stories and the storm both come in the third paragraph, and the passage never explains why the uncle hired the narrator.`,
          },
        ],
      },
    },
    {
      id: 'act-rs1-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Enhanced ACT Reading:** 36 questions, 40 minutes, 4 choices each; literary narrative, social science, humanities, and natural science passages, with one possible paired set.
- **Map every paragraph in three to six words,** starting with a job verb: introduces, gives an example, complicates, concedes, responds, concludes.
- **Read your notes in order to name the passage's shape:** old view → complication → revised view, problem → solution → reactions, early event → turning point → reflection.
- **Function questions want the job.** Use the deletion test, then reject choices that describe a different paragraph or the right topic with the wrong job.
- **Track voices.** Quoted views are not the author's; the author's judgment often comes last. In narratives, an early opinion is often one the narrator later revises.
- **Your map is an index.** When a question has no line reference, the map tells you which paragraph to reread.
      `
    }
  ]
};
