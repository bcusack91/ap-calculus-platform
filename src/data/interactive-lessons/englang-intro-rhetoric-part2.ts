export const englangIntroRhetoricPart2Data = {
  topicSlug: 'englang-intro-rhetoric',
  sections: [
    {
      id: 'englangi2-intro',
      type: 'text' as const,
      content: `
# 🗣️ Introduction to Rhetoric

**Part 2 of 7 — Rhetoric as a System of Strategic Choices**

---

| Section |
|---------|
| 📖 The Four Big Ideas of AP Lang |
| What Counts as a Rhetorical Choice |
| Describing a Choice: What, How, Why |
| AP Connection: Analysis vs. Identification |

> 🔑 **Key Concept:** Every text is the result of **choices** a writer made in a particular situation: what to claim, which evidence to use, how to order it, and which words and sentences to put it in. AP English Language asks you to notice those choices and explain **how** they help the writer achieve a **purpose** with an **audience**.
`
    },
    {
      id: 'englangi2-bigideas',
      type: 'text' as const,
      content: `
## 📖 The Four Big Ideas of AP Lang

The College Board's Course and Exam Description (CED) organizes the whole course around four **big ideas**. Part 1 introduced the rhetorical situation; the other three describe the kinds of choices writers make inside that situation.

| Big Idea | The question it asks | Examples of choices |
|---|---|---|
| **Rhetorical Situation** (RHS) | Who is writing, to whom, why, and prompted by what? | Choosing a persona, addressing a hostile audience politely, responding to a specific event |
| **Claims and Evidence** (CLE) | What is the writer arguing, and what supports it? | Choosing a statistic over an anecdote, conceding a point, qualifying a claim with "most" |
| **Reasoning and Organization** (REO) | How do the ideas connect and in what order? | Opening with a story, moving from problem to solution, saving the strongest example for last |
| **Style** (STL) | How do word choice, comparisons and syntax create an effect? | A short sentence after long ones, a metaphor, repetition, formal versus casual diction |

These four ideas are **not separate boxes**. A single sentence can involve all of them. When a speaker opens with "I was there," that is a stylistic choice (a short, plain sentence), an evidence choice (personal testimony) and a situational choice (building credibility with listeners who were not there).

### The Skills Behind the Big Ideas

The CED pairs each big idea with a **reading** skill and a **writing** skill:

| Big Idea | Reading skill (Section I and the rhetorical analysis essay) | Writing skill (all three essays) |
|---|---|---|
| Rhetorical Situation | Explain how a writer's choices contribute to the situation | Demonstrate an understanding of an audience's beliefs, values or needs |
| Claims and Evidence | Identify and explain claims and evidence | Develop a paragraph with a claim, evidence and explanation |
| Reasoning and Organization | Describe the line of reasoning | Develop a line of reasoning and commentary |
| Style | Explain how word choice, comparisons and syntax create tone or style | Use words, comparisons and syntax strategically |

> 💡 The reading and writing skills are mirror images. When you analyze how Lincoln builds a line of reasoning, you are learning how to build your own.
`
    },
    {
      id: 'englangi2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A writer opens an op-ed about a factory closing with the story of one worker\'s last shift, then turns to employment data for the whole county. Which big idea best describes the decision to place the story BEFORE the data?',
            options: [
              'Reasoning and organization, because it concerns sequence',
              'Style, because a story is a kind of figurative language',
              'Claims and evidence, because data is stronger than a story',
              'Rhetorical situation, because op-eds have a known audience'
            ],
            correctAnswer: 0,
            explanation: 'The question is about the order of the material, which is reasoning and organization. The story and the data are both evidence, but the choice being asked about is their sequence, not which one is stronger.'
          },
          {
            question: 'Which statement best describes how the four big ideas relate to one another?',
            options: [
              'Each big idea applies to a different essay on the exam',
              'One sentence can draw on all four at once',
              'Style matters only after the claims have been settled',
              'The rhetorical situation matters only in speeches'
            ],
            correctAnswer: 1,
            explanation: 'The big ideas are overlapping lenses on the same text. One sentence can be at once a stylistic choice, a piece of evidence and a response to the audience, and all three essays draw on all four ideas.'
          }
        ]
      }
    },
    {
      id: 'englangi2-describing',
      type: 'text' as const,
      content: `
## Describing a Choice: What, How, Why

Identifying a device is only the first step. A full analytical sentence answers three questions.

| Question | What you write | Example |
|---|---|---|
| **What** did the writer do? | Name the choice precisely, with a short quotation | The writer repeats "we can not" three times |
| **How** does it work? | Explain the effect on the reader or the meaning | The repetition builds toward a reversal, so each phrase denies the speaker's power more strongly |
| **Why** does it matter? | Connect the effect to purpose and audience | Lincoln shifts the honor from the living audience to the dead soldiers, preparing listeners to accept a new duty |

### Worked Example: Weak to Strong

Situation: a city council member writes to residents asking them to support a new library tax.

> *Adapted model sentence from the letter:* "I have walked past the shuttered Elm Street branch every morning for three years."

| Level | Student analysis |
|---|---|
| **Identification only** | The writer uses ethos. |
| **Effect, no purpose** | The writer uses personal experience, which makes the letter more interesting. |
| **Full analysis** | By describing her daily walk past the closed branch, the council member presents herself as a neighbor who has felt the loss firsthand, which invites residents who share that street to see the tax as repairing their own neighborhood rather than as a demand from city hall. |

The full analysis **quotes or names the specific detail**, explains **how** it shapes the reader's response, and ties it to the **purpose** (winning votes for the tax) and **audience** (residents wary of taxes).

### Verbs That Describe Choices

Strong analysis uses verbs that say what the writer is doing, not just "uses" or "shows."

| Instead of | Try |
|---|---|
| uses | invokes, juxtaposes, concedes, foregrounds, understates |
| shows | reveals, exposes, dramatizes, underscores |
| talks about | characterizes, frames, recasts, dismisses |

> ⚠️ A precise verb is not decoration. "The writer **concedes** that the plan is costly" makes a different claim about the text than "the writer **mentions** the cost."
`
    },
    {
      id: 'englangi2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Choice** 🔍

A student op-ed argues that the school day should start later. Choose the big idea each choice belongs to most directly.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The student cites a sleep study from a pediatrics journal: ___',
            options: ['claims and evidence', 'reasoning and organization', 'style', 'rhetorical situation']
          },
          {
            label: 'She ends with a single four-word sentence: "We are simply tired." ___',
            options: ['claims and evidence', 'reasoning and organization', 'style', 'rhetorical situation']
          },
          {
            label: 'She writes in a respectful tone because the school board will read it: ___',
            options: ['claims and evidence', 'reasoning and organization', 'style', 'rhetorical situation']
          },
          {
            label: 'She answers the bus-schedule objection only after presenting her strongest evidence: ___',
            options: ['claims and evidence', 'reasoning and organization', 'style', 'rhetorical situation']
          }
        ],
        correctAnswers: ['claims and evidence', 'style', 'rhetorical situation', 'reasoning and organization'],
        hint1: 'A study is support for a claim.',
        hint2: 'Sentence length and word choice belong to one big idea.',
        hint3: 'Adjusting to who will read the piece is a response to the situation; deciding where an objection goes is about order.',
        explanation: 'The study is evidence. The short final sentence is a syntactic, stylistic choice. A tone chosen for the board responds to the audience in the rhetorical situation. Placing the objection after the strongest evidence is a decision about sequence, which is reasoning and organization.'
      }
    },
    {
      id: 'englangi2-ap',
      type: 'text' as const,
      content: `
## AP Connection: Analysis vs. Identification

The rhetorical analysis essay (Question 2 on the exam) gives you a nonfiction passage and asks you to analyze the rhetorical choices the writer makes to achieve a purpose. The scoring guidelines reward **commentary that explains how evidence from the passage supports your line of reasoning**. They do not award points for naming devices.

| Low-scoring habit | Higher-scoring habit |
|---|---|
| Listing devices in the order they appear ("First he uses a metaphor, then an anecdote") | Organizing around what the writer is **doing** ("First he establishes common ground, then he reframes the issue") |
| Labeling every sentence as ethos, logos or pathos | Describing the specific choice and its effect on this audience |
| Summarizing what the passage says | Explaining why the writer says it **this way** |

The same habits help in Section I. Multiple-choice reading questions ask about the **function** of a sentence or paragraph, the writer's **purpose**, or the **effect** of a word choice. Each is a "why this choice?" question.

> 🔑 A useful template for any analytical sentence: **By [specific choice], the writer [effect on audience], in order to [purpose].**
`
    },
    {
      id: 'englangi2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which sentence from a student essay offers the most complete rhetorical analysis?',
            options: [
              'The writer uses a lot of pathos throughout the opening to make the audience feel sad and angry about the closed factory and its workers.',
              'By opening with one worker\'s final shift, the writer gives the closing a human face so readers feel its loss before weighing the numbers.',
              'The writer tells a story about one worker and then gives statistics about the whole county, which is a very effective combination of appeals.',
              'The writer includes an anecdote, county statistics and a quotation from the mayor in the first three paragraphs to cover every appeal.'
            ],
            correctAnswer: 1,
            explanation: 'The analysis of the final shift names the specific choice, explains its effect on readers and connects it to the writer\'s larger aim. The others label an appeal, call a choice "effective" without saying why, or list devices without analysis.'
          },
          {
            question: 'A writer describes a proposed highway as "a concrete wall through the heart of the neighborhood." What is the most precise description of this choice?',
            options: [
              'The writer cites expert evidence about the highway\'s route',
              'The writer frames the highway as a barrier that divides residents',
              'The writer concedes that the highway has some benefits',
              'The writer establishes credibility as an engineer who studied it'
            ],
            correctAnswer: 1,
            explanation: 'The metaphor of a wall through the heart casts the highway as something that splits the community. It is a figurative framing, not expert evidence, a concession or a claim of professional credibility.'
          },
          {
            question: 'In the template "By [choice], the writer [effect], in order to [purpose]," what does the purpose slot most often require?',
            options: [
              'The name of the device being used',
              'A summary of the paragraph\'s main topic',
              'What the audience should think or do',
              'A quotation from the passage'
            ],
            correctAnswer: 2,
            explanation: 'The purpose slot links the choice to what the writer wants this audience to think, feel or do. The device name and the quotation belong in the choice slot, and a summary is not analysis.'
          }
        ]
      }
    }
  ]
}
