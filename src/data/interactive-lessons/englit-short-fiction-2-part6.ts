export const englitShortFiction2Part6Data = {
  topicSlug: 'englit-short-fiction-2',
  sections: [
    {
      id: 'englitsh6-intro',
      type: 'text' as const,
      content: `
# 🕯️ Short Fiction II

**Part 6 of 7 — The Prose Fiction Analysis Essay (Q2)**

---

| Section |
|---------|
| 📖 The Task and the Rubric |
| The Practice Prompt and Passage |
| Building a Thesis with a Line of Reasoning |
| A Model Introduction and Body Paragraph |
| Commentary and Evidence |

> 🔑 **Key Concept:** The prose fiction essay asks you to **analyze how an author uses literary elements and techniques to convey something complex** in a passage you have never seen. Everything in this unit (perspective, character, setting, conflict, symbol, imagery) is a tool for that task. The essay is scored on what you argue and how well you explain your evidence, not on how many terms you name.
`
    },
    {
      id: 'englitsh6-task',
      type: 'text' as const,
      content: `
## 📖 The Task and the Rubric

| Exam fact | Detail |
|---|---|
| Section II | 3 essays in 2 hours, 55% of the exam score |
| The three essays | Q1 poetry analysis, Q2 prose fiction analysis, Q3 literary argument |
| Suggested pacing | About 40 minutes per essay: roughly 10 to read and plan, 30 to write |
| Section I, for reference | 55 multiple-choice questions, 60 minutes, 45% of the score |

Every Q2 prompt ends with the same four instructions:

> Respond to the prompt with a thesis that presents a defensible interpretation. Select and use evidence to support your line of reasoning. Explain how the evidence supports your line of reasoning. Use appropriate grammar and punctuation in communicating your argument.

### The 6-Point Rubric

| Row | Points | What earns them |
|---|---|---|
| **A: Thesis** | 0–1 | A defensible interpretation that responds to the prompt. Restating the prompt or summarizing does not count. |
| **B: Evidence and Commentary** | 0–4 | 1 = mostly general evidence, summary instead of explanation. 2 = some specific evidence, some explanation, but no clear line of reasoning. 3 = specific evidence for every claim, with explanation of some of it. 4 = specific evidence for every claim and **consistent** explanation of how it supports the line of reasoning, showing how several elements work together. |
| **C: Sophistication** | 0–1 | Earned by exploring complexities or tensions, situating the interpretation in a broader context, accounting for alternative interpretations, or writing in a consistently vivid and persuasive style |

Row B carries most of the score. Its two halves are **evidence** (Skill 7.D: specific, well-chosen textual details) and **commentary** (Skill 7.C: explaining how those details support your reasoning).
`
    },
    {
      id: 'englitsh6-passage',
      type: 'text' as const,
      content: `
## The Practice Prompt and Passage

**Practice prompt (modeled on the Q2 format):** The following excerpt is from Katherine Mansfield's short story "The Garden Party," published in 1922. In this passage, Laura Sheridan, whose family has just held a lavish party, carries a basket of leftover food to the home of a poor carter who was killed that morning. Read the passage carefully. Then, in a well-written essay, analyze how Mansfield uses literary elements and techniques to convey the complexity of Laura's response to the world beyond her family's garden.

> It was just growing dusky as Laura shut their garden gates. A big dog ran by like a shadow. The road gleamed white, and down below in the hollow the little cottages were in deep shade. How quiet it seemed after the afternoon. Here she was going down the hill to somewhere where a man lay dead, and she couldn't realize it. Why couldn't she? She stopped a minute. And it seemed to her that kisses, voices, tinkling spoons, laughter, the smell of crushed grass were somehow inside her. She had no room for anything else. How strange! She looked up at the pale sky, and all she thought was, "Yes, it was the most successful party."
>
> Now the broad road was crossed. The lane began, smoky and dark. Women in shawls and men's tweed caps hurried by. Men hung over the palings; the children played in the doorways. A low hum came from the mean little cottages. In some of them there was a flicker of light, and a shadow, crab-like, moved across the window. Laura bent her head and hurried on. She wished now she had put on a coat. How her frock shone! And the big hat with the velvet streamer—if only it was another hat! Were the people looking at her? They must be. It was a mistake to have come; she knew all along it was a mistake. Should she go back even now?

In the cottage, Laura is shown the body:

> There lay a young man, fast asleep—sleeping so soundly, so deeply, that he was far, far away from them both. Oh, so remote, so peaceful. He was dreaming. Never wake him up again. His head was sunk in the pillow, his eyes were closed; they were blind under the closed eyelids. He was given up to his dream. What did garden-parties and baskets and lace frocks matter to him? He was far from all those things. He was wonderful, beautiful.
>
> — Katherine Mansfield, "The Garden Party," 1922

### Reading the Prompt

The key word is **complexity**. The prompt is telling you that Laura's response is not one thing. Before writing, find the tension: she is moved, and she is also self-absorbed; she sees the dead man, and she also turns him into something beautiful.

### Annotating for Shifts

| Where | What shifts |
|---|---|
| The garden gates | From light to "dusky"; the party's sensations are still "inside her" |
| The lane | From inner pleasure to outer exposure: "How her frock shone!" |
| The bedside | From fear to wonder: the dead man is "wonderful, beautiful" |
`
    },
    {
      id: 'englitsh6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which thesis would earn the Row A point for the practice prompt?',
            options: [
              'Mansfield shows that Laura\'s pity for the poor is real but still filtered through her privilege.',
              'Mansfield uses many literary elements and techniques to convey the complexity of Laura\'s response.',
              'In this passage, Laura walks down the hill with a basket of food and then sees the dead carter.',
              'Mansfield proves that Laura secretly despises her mother and has decided to leave home forever.'
            ],
            correctAnswer: 0,
            explanation: 'The key makes a specific, arguable claim about the passage. One option restates the prompt, one summarizes the plot, and one asserts something the passage does not support.'
          },
          {
            question: 'A line of reasoning in a Q2 essay is best described as',
            options: [
              'a list of devices in the order they appear in the passage',
              'a sequence of linked claims that develops the thesis',
              'a summary of the passage from its opening to its end',
              'a set of quotations arranged without any commentary'
            ],
            correctAnswer: 1,
            explanation: 'A line of reasoning is the chain of claims that carries the argument from paragraph to paragraph. Organizing by device or by plot often produces a list or a summary instead of an argument.'
          },
          {
            question: 'The sentence "She had no room for anything else" suggests that',
            options: [
              'her basket is too full to hold any more food',
              'the party\'s pleasures crowd out the fact of the death',
              'she has decided not to go into the Scotts\' cottage',
              'she is too tired to walk the rest of the way down'
            ],
            correctAnswer: 1,
            explanation: 'The sentence follows the list of "kisses, voices, tinkling spoons, laughter" that seem "inside her," so the party fills the space where the death should register. It is not about the basket, a decision or fatigue.'
          }
        ]
      }
    },
    {
      id: 'englitsh6-thesis',
      type: 'text' as const,
      content: `
## Building a Thesis with a Line of Reasoning

A thesis (Skill 7.B) does two jobs: it states a **defensible interpretation**, and it signals the **line of reasoning** your paragraphs will follow.

| Thesis | Row A | Why |
|---|---|---|
| "Mansfield uses literary elements and techniques to convey the complexity of Laura's response." | 0 | Restates the prompt |
| "Laura walks to the cottage and sees the dead man." | 0 | Summary, not interpretation |
| "Mansfield uses imagery to show that Laura feels guilty about being rich." | 1 | Defensible, but simple; it gives little direction for a line of reasoning |
| "As Laura walks from the bright garden into the dark lane, Mansfield shows a girl whose sympathy is real but still shaped by her privilege: the party crowds her mind, the lane makes her feel exposed rather than responsible, and even her vision of the dead man turns death into one more beautiful thing." | 1 | Defensible, complex and organized. Each clause names a paragraph. |

The strongest thesis does not just name a feeling. It describes a **movement** (garden to lane to bedside) and a **tension** (sympathy shaped by privilege), and it sets up three body paragraphs.

### The Plan That Follows

| Paragraph | Claim | Key evidence |
|---|---|---|
| 1 | The party fills Laura's mind and pushes the death away | "kisses, voices, tinkling spoons, laughter"; "She had no room for anything else." |
| 2 | In the lane, Laura's conscience first appears as self-consciousness | "a shadow, crab-like"; "How her frock shone!"; "if only it was another hat!" |
| 3 | At the bedside, her wonder is real, but it turns death into beauty | "wonderful, beautiful"; "What did garden-parties and baskets and lace frocks matter to him?" |
`
    },
    {
      id: 'englitsh6-model',
      type: 'text' as const,
      content: `
## A Model Introduction and Body Paragraph

### Introduction

> In "The Garden Party," Katherine Mansfield sends Laura Sheridan down the hill from her family's party carrying their leftovers to a dead man's home. As Laura walks from the bright garden into the dark lane, Mansfield shows a girl whose sympathy is real but still shaped by her privilege: the party crowds her mind, the lane makes her feel exposed rather than responsible, and even her vision of the dead man turns death into one more beautiful thing.

### Body Paragraph 2

> As Laura enters the lane, Mansfield shifts the imagery from light to shadow so that Laura sees herself, for the first time, through the eyes of the people below the hill. The lane is "smoky and dark," and the only movement inside the cottages is "a shadow, crab-like," crossing a window, an image that makes the poor seem strange and almost inhuman to her. Yet the same darkness makes Laura visible: "How her frock shone!" An exclamation that earlier in the day would have expressed delight now expresses alarm, as her clothing becomes a light she cannot put out. The hat her family praised now shames her: "if only it was another hat!" Mansfield then lets the questions pile up ("Were the people looking at her? They must be.") so that Laura's conscience arrives first as self-consciousness. She is learning how she looks to others before she has learned what she owes them, which is why, at this point in the walk, her sympathy is still more about her own exposure than about the grieving family.

### How the Paragraph Earns Its Points

| Sentence | Move | Rubric |
|---|---|---|
| "As Laura enters the lane, Mansfield shifts the imagery..." | Topic sentence states a claim from the line of reasoning, not a device | Row B: claim in a line of reasoning |
| "smoky and dark"; "a shadow, crab-like" | Short quotations embedded in the sentence | Row B: specific evidence |
| "an image that makes the poor seem strange and almost inhuman to her" | Explains the effect of one word through Laura's perspective | Row B: commentary |
| "An exclamation that earlier in the day would have expressed delight now expresses alarm" | Tracks a shift in technique across the story | Row B: commentary on how elements work together |
| "She is learning how she looks to others before she has learned what she owes them" | Ties the evidence back to the thesis's tension | Row B: consistent explanation; Row C: explores complexity |
`
    },
    {
      id: 'englitsh6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Map It to the Rubric** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A defensible interpretation that responds to the prompt earns the point in ___',
            options: ['Row A', 'Row B', 'Row C', 'no row']
          },
          {
            label: 'Specific evidence for every claim, consistently explained, earns ___ points in Row B',
            options: ['4', '3', '2', '1']
          },
          {
            label: 'Accounting for an alternative interpretation of the dead man scene can earn the point in ___',
            options: ['Row C', 'Row A', 'Row B', 'no row']
          }
        ],
        correctAnswers: ['Row A', '4', 'Row C'],
        hint1: 'The thesis row comes first.',
        hint2: 'Consistent explanation is the top of the evidence-and-commentary scale.',
        hint3: 'Alternative interpretations are one route to sophistication.',
        explanation: 'Row A is the thesis. The top Row B score requires specific evidence and consistent explanation. Accounting for an alternative reading is one way to earn Row C.'
      }
    },
    {
      id: 'englitsh6-commentary',
      type: 'text' as const,
      content: `
## Commentary and Evidence

### Commentary (Skill 7.C)

Commentary is where most essays gain or lose points. Compare:

| Weak commentary | Strong commentary |
|---|---|
| "This shows that Laura feels bad." | "The exclamation that once expressed delight now expresses alarm, as her clothing becomes a light she cannot put out." |
| "Mansfield uses imagery here." | "The crab-like shadow makes the cottagers seem strange to Laura, revealing how far her sympathy has to travel." |
| "This is symbolism." | "The hat her family praised now shames her, so a single object carries her change of view." |

Strong commentary answers **how** and **why**: how does this word or image create its effect, and why does that matter to the claim?

### Evidence (Skill 7.D)

- Quote **short**: a phrase or a few words, built into your own sentence.
- Choose evidence that does **work**: a detail with a surprising word, a shift or a pattern.
- Range across the passage: beginning, middle and end.
- Never quote a long sentence and leave it to speak for itself.

### Reaching for Row C

Sophistication grows out of the argument, not a final flourish. Here, one route is to **account for an alternative interpretation**:

> One could read Laura's vision of the "wonderful, beautiful" sleeper as the moment her sympathy finally becomes real. Yet the vision also lets her look away from the swollen face of the widow she has just met; by turning death into peace and beauty, Laura repeats, more gently, her family's habit of keeping suffering at a pleasant distance.

> 🔑 **AP Connection:** A Q2 essay rarely fails for lack of devices. It fails for lack of commentary. If a paragraph contains more quotation than explanation, the Row B score usually drops.
`
    },
    {
      id: 'englitsh6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In context, the image of "a shadow, crab-like" moving across a cottage window primarily serves to',
            options: [
              'convey how strange the people of the lane seem to Laura',
              'suggest that someone in the cottage means to harm her',
              'show the widow preparing her husband\'s body for burial',
              'signal that night has fallen over the Sheridans\' garden'
            ],
            correctAnswer: 0,
            explanation: 'The comparison to a crab reflects Laura\'s unease, making the cottagers seem alien to her. Nothing suggests a threat or a funeral preparation, and the image belongs to the lane, not the garden.'
          },
          {
            question: 'Which sentence would best serve as commentary on the quotation "if only it was another hat!"?',
            options: [
              'Laura wishes she had worn a different hat to the cottage.',
              'This quotation uses an exclamation to express Laura\'s strong feelings.',
              'The hat her family praised now marks her as an outsider in the lane.',
              'Mansfield uses the hat as a symbol in several parts of the story.'
            ],
            correctAnswer: 2,
            explanation: 'The strongest commentary explains how the detail works and connects it to the change in Laura\'s view. The others paraphrase, name a device or label a symbol without explaining it.'
          }
        ]
      }
    }
  ]
}
