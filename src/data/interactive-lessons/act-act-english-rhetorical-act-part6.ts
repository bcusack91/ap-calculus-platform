export const actRhetoricalPart6Data = {
  topicSlug: 'act-english-rhetorical-act',
  sections: [
    {
      id: 'act-rh6-intro',
      type: 'text' as const,
      content: `
# 📖 Author's Purpose & Audience

**Part 6 of 7 — Why the Author Wrote It, Who the Audience Is & Evaluating Effectiveness**

Some ACT questions zoom out and ask about the **big picture**: why a passage exists, who it's written for, and whether it achieves its goal.

**Three Question Types:**

| Type | Typical Question |
|------|-----------------|
| **Purpose** | "The primary purpose of this passage is to …" |
| **Audience** | "This passage is most likely written for …" |
| **Effectiveness** | "Does this essay successfully accomplish [goal]?" |

**Common Author Purposes:**
- **Inform** — present facts neutrally (news article, textbook)
- **Persuade** — convince the reader of a position (editorial, speech)
- **Entertain** — engage the reader with a story (narrative, memoir)
- **Describe** — paint a vivid picture (travel writing, character sketch)
- **Explain** — break down a process or concept (how-to, science explainer)

**ACT Tip:** Look at the passage's **tone, evidence, and structure** to determine purpose. Persuasive passages use arguments and emotional language; informative passages use neutral facts and data.
      `
    },
    {
      id: 'act-rh6-purpose',
      type: 'text' as const,
      content: `
## Identifying Author's Purpose

**Step 1:** Ask "What is the passage mostly doing?"
- Presenting both sides? → **Informing**
- Arguing one side? → **Persuading**
- Telling a story? → **Entertaining / Narrating**

**Step 2:** Check the language:
- Emotional, urgent, or imperative language → **Persuasion**
- Neutral, factual, data-heavy → **Informing**
- Sensory details, dialogue, first person → **Narrating / Entertaining**

**Example Passage Clues:**

*"Studies show that students who eat breakfast score 20% higher on standardised tests. Schools should therefore implement universal breakfast programmes."*

- Purpose: **Persuade** — the author uses data as evidence for a recommendation ("should implement").

*"The monarch butterfly migrates up to 3,000 miles each autumn, travelling from Canada to central Mexico."*

- Purpose: **Inform** — neutral presentation of a fact, no opinion expressed.

**ACT Nuance:** Some passages **both** inform and persuade. In that case, look at the overall thrust: if the passage ends with a call to action or recommendation, the primary purpose is persuasion, even if it includes informative sections.
      `
    },
    {
      id: 'act-rh6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Purpose & Audience** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A passage describes the chemical process of photosynthesis using technical vocabulary and includes a labelled diagram. The most likely audience is:',
            options: [
              'Young children learning to read',
              'Biology students studying for an exam',
              'Professional chefs looking for recipes',
              'Tourists visiting a national park'
            ],
            correctAnswer: 1,
            explanation: 'Technical vocabulary and diagrams indicate an academic audience. Biology students preparing for an exam would be the most likely readers of such content.'
          },
          {
            question: '"We must act now to protect our oceans. Every plastic bag that enters the sea threatens marine life." The author\'s primary purpose is to:',
            options: [
              'Entertain readers with an ocean adventure story',
              'Explain the chemical composition of plastic',
              'Persuade readers to take action on ocean pollution',
              'Describe the beauty of marine ecosystems'
            ],
            correctAnswer: 2,
            explanation: 'The imperative "we must act now" and the emotionally charged language ("threatens marine life") signal persuasion. The author wants the reader to change behaviour.'
          }
        ]
      }
    },
    {
      id: 'act-rh6-audience',
      type: 'text' as const,
      content: `
## Identifying the Audience

**Clues to the intended audience:**

| Clue | Likely Audience |
|------|----------------|
| Technical jargon without definitions | **Specialists** in that field |
| Simple language, basic explanations | **General public** or younger readers |
| References to "students" or "exam prep" | **Students** |
| Industry-specific advice | **Professionals** in that industry |
| Casual tone, pop culture references | **Young adults / teens** |

**ACT-Style Example:**

*"For first-time homebuyers, understanding mortgage rates is crucial. A fixed-rate mortgage locks in your interest rate for the entire loan term …"*

Audience: **First-time homebuyers** — the passage directly addresses them and explains concepts they wouldn't already know.

**Effectiveness Questions:**

The ACT sometimes asks: *"Suppose the writer's goal was to [X]. Does this essay achieve that goal?"*

**How to answer:**
1. Identify the stated goal.
2. Check whether the passage's **content, scope, and focus** match that goal.
3. Even if the essay is well-written, it might not achieve the *specific* goal stated in the question.
      `
    },
    {
      id: 'act-rh6-input1',
      type: 'input-boxes' as const,
      content: `
**Purpose Identification** 📝

For each description, write the author's primary purpose (inform, persuade, entertain, describe, or explain).

1) A newspaper article reporting election results with no editorial commentary → __________

2) A speech urging citizens to volunteer at local food banks → __________

3) A step-by-step guide on how to change a car tyre → __________
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['inform', 'persuade', 'explain'],
        hint1: 'Neutral reporting of facts without opinion = presenting information.',
        hint2: 'Urging someone to act = trying to convince them.',
        hint3: 'Step-by-step instructions = breaking down a process.',
        explanation: 'A neutral news report informs. A speech urging action persuades. A how-to guide explains a process. Recognising purpose helps you answer big-picture ACT questions.'
      }
    },
    {
      id: 'act-rh6-effectiveness',
      type: 'text' as const,
      content: `
## Evaluating Effectiveness

**"Does this essay successfully [goal]?"** questions appear at the end of ACT passages.

**Answer "Yes" when:**
- The passage directly addresses the stated goal.
- Most of the content is relevant to that goal.
- The passage provides sufficient detail or evidence.

**Answer "No" when:**
- The passage only *touches on* the goal but focuses on something else.
- The scope is too narrow or too broad for the stated goal.
- Key aspects of the goal are missing.

**Example:**

*Goal: "Describe the cultural impact of jazz music across multiple decades."*

The essay discusses jazz in the 1920s extensively but never mentions any other era.

**Answer: No** — the essay focuses on only one decade, so it doesn't cover "multiple decades" as the goal requires.

**ACT Tip:** Even if you personally think the essay is good, evaluate it **strictly against the stated goal**. Quality and goal-fulfilment are different things.
      `
    },
    {
      id: 'act-rh6-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Purpose & Effectiveness** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'An essay uses emotional language and ends with "We must act now." The purpose is:',
            options: ['to inform', 'to persuade', 'to entertain', 'to describe']
          },
          {
            label: 'A passage about volcanoes includes diagrams and defines technical terms. The audience is most likely:',
            options: ['professional volcanologists', 'students or general readers', 'young children', 'fiction readers']
          },
          {
            label: 'An essay\'s goal is to "compare two artists." It discusses only one artist in detail. The essay:',
            options: ['achieves the goal because it is well-written', 'does not achieve the goal because it only covers one artist', 'achieves the goal because one artist is enough', 'does not achieve the goal because it lacks emotional appeal']
          }
        ],
        correctAnswers: ['to persuade', 'students or general readers', 'does not achieve the goal because it only covers one artist'],
        hint1: '"We must act now" is a call to action — that is persuasion.',
        hint2: 'Diagrams + definitions = educational content for learners, not experts.',
        hint3: 'The goal says "compare two" — covering only one fails that specific requirement.',
        explanation: 'Calls to action signal persuasion. Defined terms and diagrams target learners. An essay must match the specific scope of the stated goal to be effective.'
      }
    }
  ]
};
