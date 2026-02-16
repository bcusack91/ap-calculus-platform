import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Creating additional ACT Reading content...')

  const act = await prisma.course.findUnique({
    where: { slug: 'act-prep' }
  })

  if (!act) {
    throw new Error('ACT Prep course not found')
  }

  const actReading = await prisma.category.findUnique({
    where: { slug: 'act-reading' }
  })

  if (!actReading) {
    throw new Error('ACT Reading category not found')
  }

  // Topic 1: Making Inferences
  const inferences = await prisma.topic.upsert({
    where: { slug: 'act-making-inferences' },
    update: {},
    create: {
      slug: 'act-making-inferences',
      title: 'Making Inferences and Drawing Conclusions',
      description: 'Read between the lines and understand implied meanings',
      order: 2,
      categoryId: actReading.id,
      isPremium: false,
      textContent: `
# Making Inferences and Drawing Conclusions

## What is an Inference?

**Inference** = A logical conclusion based on evidence in the text + reasoning

**Not stated directly, but can be figured out**

### Example:
**Text:** "Maria grabbed her umbrella and rain boots before heading outside."

**Inference:** It's raining or about to rain (not directly stated!)

## Types of Inference Questions

### Character Inferences

**Question types:**
- "The narrator's attitude toward X can best be described as..."
- "The passage suggests that the character..."
- "Based on the passage, the reader can infer that..."

**Look for:**
- What characters **say** and **do**
- How they **react** to events
- Their **word choices** (reveal feelings)
- Context clues

### Author's Purpose/Tone

**"The author's tone in this passage is..."**

**Common tones:**
- **Objective:** Neutral, fact-based
- **Critical:** Disapproving, negative
- **Admiring:** Respectful, positive
- **Nostalgic:** Looking back fondly
- **Skeptical:** Doubtful, questioning
- **Enthusiastic:** Excited, passionate

### Cause and Effect

**"The passage suggests that X caused Y because..."**

**Strategy:**
- Identify the **effect** (what happened)
- Look for the **cause** (why it happened)
- May be implied, not directly stated

## How to Make Valid Inferences

### Rule 1: Stay Close to the Text
✓ **Valid:** Supported by specific evidence
❌ **Invalid:** Wild guess or outside knowledge

### Rule 2: Don't Go Too Far
✓ **Valid:** Small logical step from evidence
❌ **Invalid:** Huge leap not supported

### Rule 3: Consider Multiple Clues
- Look for **patterns**
- Combine evidence from **different parts**
- One detail might not be enough

## Common Wrong Answer Types

### 1. Too Extreme
**Watch for:** always, never, must, only, cannot

**Example:**
- Text mentions one benefit of exercise
- Wrong answer: "Exercise is the ONLY way to stay healthy"

### 2. Opposite
- States the **opposite** of what's implied
- Easy to eliminate if you read carefully

### 3. Not Supported
- Might be true in real life
- But **not supported by this passage**

### 4. Too Literal
- States something directly from text
- Inference questions need you to **read between lines**

## Strategies for Success

### Before Reading
1. **Skim** the questions first (know what to look for)
2. Note if questions ask about specific lines

### While Reading
1. **Underline** emotional language
2. **Mark** transitions and attitude shifts
3. **Note** repeated ideas

### Answering Questions
1. **Reread** relevant section
2. **Eliminate** obviously wrong answers
3. **Prove** your answer with text evidence
4. Choose answer with **strongest support**

## Practice Approach

**Sample scenario:**

*"When Dr. Chen received the lab results, she immediately called the team together. Her usual calm demeanor had shifted; she paced as she spoke, her words coming faster than normal."*

**Question:** "What can be inferred about the lab results?"

**Think:**
- Normal = calm
- Now = pacing, speaking fast
- This suggests: **Results were unexpected/concerning**

## ACT Tips

- **Extreme words** in answers are usually wrong
- **Look for patterns** of evidence, not single details
- **Eliminate** answers that contradict the passage
- If stuck between two answers, choose the one **closer to the text**
- **Don't overthink** - the answer is supported by evidence
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: inferences.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Short passage:\n\n"Jake checked his watch for the third time in five minutes and tapped his foot against the floor. He glanced toward the door every time someone walked past."\n\nWhat can be inferred about Jake?',
        solution: `
**Solution:**

**Evidence from text:**
- Checking watch repeatedly
- Tapping foot (sign of impatience)
- Looking at door frequently

**These behaviors suggest:** Jake is **waiting for someone/something** and is **impatient or anxious**

**Answer:** Jake is waiting for someone and is feeling impatient/anxious

**ACT Tip:** Look at actions and behaviors to infer emotions and situations!
`
      },
      {
        topicId: inferences.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Passage excerpt:\n\n"The documentary presented new archaeological evidence from three different sites. While the findings were intriguing, Dr. Martinez noted in her review that the sample size was limited and the dating methods had not been independently verified."\n\nWhat is Dr. Martinez\'s attitude toward the documentary?',
        solution: `
**Solution:**

**Positive language:** "intriguing" (shows some interest)

**Cautious language:** 
- "While" (contrast word - signals "but")
- "limited" sample size
- "not been independently verified"

**Tone:** Interested BUT skeptical/cautious

**Answer:** Dr. Martinez is interested but skeptical about the documentary's claims

**ACT Tip:** Contrast words (while, but, however) often signal mixed or complex attitudes!
`
      },
      {
        topicId: inferences.id,
        order: 3,
        difficulty: 'HARD',
        question: 'Which type of wrong answer should you avoid in inference questions?\n\nA) Answers that require evidence from the passage\nB) Answers that use extreme language like "only" or "never"\nC) Answers that make logical connections\nD) Answers supported by specific details',
        solution: `
**Solution:**

**Good answer characteristics:**
- A) ✓ Supported by evidence
- C) ✓ Makes logical connections
- D) ✓ Supported by details

**Bad answer characteristic:**
- B) ✓ **AVOID extreme language**

**Why avoid extremes?**
- "Only," "never," "always," "must," "cannot" are rarely supported
- Passages usually present nuanced views
- Extreme claims are hard to prove

**Answer:** B - Avoid answers with extreme language

**ACT Tip:** If you see "always" or "never," be very skeptical!
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: inferences.id,
        front: 'What is an inference?',
        back: 'A logical conclusion based on evidence in the text plus reasoning - not directly stated but can be figured out'
      },
      {
        topicId: inferences.id,
        front: 'What words in answer choices suggest the answer is probably wrong?',
        back: 'Extreme words: always, never, only, must, cannot (too absolute for most passages)'
      },
      {
        topicId: inferences.id,
        front: 'How can you identify a character\'s emotions in a passage?',
        back: 'Look at their actions, word choices, reactions to events, and behaviors'
      }
    ]
  })

  console.log('✓ Created topic: Making Inferences and Drawing Conclusions (3 examples, 3 flashcards)')

  // Topic 2: Comparative Relationships
  const comparative = await prisma.topic.upsert({
    where: { slug: 'act-comparative-relationships' },
    update: {},
    create: {
      slug: 'act-comparative-relationships',
      title: 'Comparative Relationships and Contrasts',
      description: 'Understand comparisons, contrasts, and relationships between ideas',
      order: 3,
      categoryId: actReading.id,
      isPremium: false,
      textContent: `
# Comparative Relationships and Contrasts

## Types of Relationships

### 1. Comparison (Similarities)
**Signal words:**
- Similarly, likewise, also, both
- In the same way, just as
- Comparable to, resembles

**Example:**
"Like birds, bats are capable of flight. Both groups have evolved adaptations for aerial movement."

### 2. Contrast (Differences)
**Signal words:**
- However, but, although, while
- In contrast, on the other hand
- Unlike, whereas, nevertheless
- Despite, yet

**Example:**
"While birds use feathers for flight, bats rely on stretched skin between their fingers."

### 3. Cause and Effect
**Signal words:**
- Because, since, therefore, thus
- As a result, consequently
- Due to, leads to, causes

### 4. Sequence/Time
**Signal words:**
- First, next, then, finally
- Before, after, meanwhile
- Subsequently, previously

## Question Types

### Direct Comparison Questions

**"Unlike X, Y is characterized by..."**

**Strategy:**
1. Find where X and Y are discussed
2. Identify the **key difference**
3. Match to answer choices

### Relationship Questions

**"The relationship between X and Y can best be described as..."**

**Common relationships:**
- Cause and effect
- Problem and solution
- Example and generalization
- Contrast/opposition
- Support/evidence

### Author's Contrast Questions

**"The author contrasts X and Y in order to..."**

**Asking:** Why did the author make this comparison?

**Possible purposes:**
- Clarify a concept
- Emphasize a difference
- Support an argument
- Provide context

## Paired Passages (Comparative Reading)

**Format:** Two shorter passages on related topics

**Question types:**

### 1. Individual Passage Questions
**"According to Passage A..."**
- Only look at that passage
- Ignore the other one

### 2. Comparison Questions
**"Both passages mention..."**
- Find common elements
- Must appear in BOTH

### 3. Contrast Questions
**"Unlike Passage A, Passage B..."**
- Identify key differences
- Often about tone, focus, or argument

### 4. Synthesis Questions
**"How would the author of Passage B respond to Passage A's claim that..."**
- Need to understand BOTH perspectives
- Make logical connection

## Strategies for Paired Passages

### Step 1: Read Passage A
- Answer questions about Passage A only
- Don't look at Passage B yet

### Step 2: Read Passage B
- Note similarities and differences to Passage A
- Compare main ideas, tones, evidence

### Step 3: Answer Comparison Questions
- Now you have both perspectives
- Can compare/contrast effectively

## Finding Relationships in Text

### Look for Transition Words
These signal the type of relationship:

**Similarity:** also, similarly, likewise
**Contrast:** but, however, although
**Cause:** because, since, therefore
**Example:** for instance, such as
**Emphasis:** indeed, in fact, especially

### Identify Structure
**Compare/Contrast structure:**
- Presents two things
- Shows how they're alike/different

**Problem/Solution structure:**
- Presents a problem
- Proposes solution(s)

**Chronological structure:**
- Events in time order
- Shows sequence

## Common Wrong Answers

### 1. Reverses the Relationship
- Says X caused Y when Y caused X
- Gets the comparison backwards

### 2. Overstates Similarity/Difference
- Says they're "completely opposite" when they have one difference
- Says they're "identical" when they have similarities

### 3. Not Supported by Both
- For "both passages" questions
- Answer only appears in one passage

## ACT Tips

- **Underline transition words** - they show relationships
- **For paired passages:** Read one at a time, then compare
- **Watch for:** "both," "only," "neither" (check carefully!)
- **Relationship questions:** Think about the author's PURPOSE
- **Use process of elimination** - cross out obviously wrong answers
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: comparative.id,
        order: 1,
        difficulty: 'EASY',
        question: 'What transition word signals a CONTRAST between two ideas?\n\nA) Similarly\nB) Therefore\nC) However\nD) Furthermore',
        solution: `
**Solution:**

**Check each transition type:**

**A) Similarly** = Shows similarity/comparison
**B) Therefore** = Shows cause/effect or conclusion
**C) However** = Shows contrast/difference ✓
**D) Furthermore** = Adds additional similar information

**Answer:** C - However

**Other contrast words:** but, although, while, in contrast, on the other hand, unlike, nevertheless, despite

**ACT Tip:** Knowing transition words helps you predict what's coming next!
`
      },
      {
        topicId: comparative.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Passage excerpt:\n\n"Renewable energy sources like solar and wind power produce electricity without emitting greenhouse gases. Coal power plants, on the other hand, release significant amounts of carbon dioxide."\n\nWhat relationship is being shown?',
        solution: `
**Solution:**

**Signal phrase:** "on the other hand" = CONTRAST

**Two things being compared:**
1. Renewable energy (solar/wind) - no emissions
2. Coal power plants - significant emissions

**Relationship:** Showing **difference/contrast** between renewable and non-renewable energy sources

**Answer:** Contrast - highlighting the difference in emissions between renewable and coal energy

**ACT Tip:** "On the other hand" is a classic contrast signal phrase!
`
      },
      {
        topicId: comparative.id,
        order: 3,
        difficulty: 'HARD',
        question: 'Paired passage question:\n\nPassage A argues that social media increases connectivity.\nPassage B argues that social media can increase feelings of isolation.\n\nBoth passages would likely agree that:',
        solution: `
**Solution:**

**What they disagree on:**
- Effects on relationships (one says positive, one says negative)

**What they must agree on:**
- Social media EXISTS and is widely used
- It AFFECTS social relationships (even if they disagree on how)
- It's worth studying/discussing

**Strategy for "both agree" questions:**
1. Find points that are MORE GENERAL
2. Avoid claims specific to one argument
3. Look for underlying assumptions

**Likely answer:** "Social media has a significant impact on how people interact"

**ACT Tip:** "Both passages agree" answers are usually broader/more general than each individual argument!
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: comparative.id,
        front: 'What are common transition words that signal CONTRAST?',
        back: 'However, but, although, while, in contrast, on the other hand, unlike, nevertheless, despite, yet'
      },
      {
        topicId: comparative.id,
        front: 'For paired passage questions asking "both passages mention...", what must be true?',
        back: 'The answer must appear in BOTH passages, not just one'
      },
      {
        topicId: comparative.id,
        front: 'What is the best strategy for reading paired passages?',
        back: 'Read Passage A and answer its questions first, then read Passage B, then answer comparison questions'
      }
    ]
  })

  console.log('✓ Created topic: Comparative Relationships and Contrasts (3 examples, 3 flashcards)')

  // Topic 3: Author's Craft and Structure
  const authorsCraft = await prisma.topic.upsert({
    where: { slug: 'act-authors-craft' },
    update: {},
    create: {
      slug: 'act-authors-craft',
      title: 'Author\'s Craft and Text Structure',
      description: 'Analyze how authors develop ideas and organize passages',
      order: 4,
      categoryId: actReading.id,
      isPremium: false,
      textContent: `
# Author's Craft and Text Structure

## Understanding Author's Craft

**Author's Craft** = The techniques and choices authors use to communicate ideas

### Elements to Analyze

**1. Word Choice (Diction)**
- Formal vs. informal language
- Technical vs. common terms
- Emotional vs. neutral words

**2. Tone**
- Author's attitude toward subject
- Can change throughout passage
- Revealed through word choice

**3. Point of View**
- First person (I, we)
- Second person (you)
- Third person (he, she, they)
- Omniscient vs. limited

**4. Literary Devices**
- Metaphor and simile
- Imagery (descriptive language)
- Repetition for emphasis
- Rhetorical questions

## Text Structure

### Common Organizational Patterns

**1. Chronological/Sequential**
- Events in time order
- **Signal words:** first, next, then, finally, before, after

**2. Compare and Contrast**
- Shows similarities and differences
- **Signal words:** similarly, however, unlike, on the other hand

**3. Cause and Effect**
- Shows why things happen
- **Signal words:** because, therefore, as a result, consequently

**4. Problem and Solution**
- Presents problem, proposes fix
- Common in social science passages

**5. Description/Classification**
- Describes characteristics
- Groups into categories
- Common in natural science

## Question Types

### Function Questions

**"The author mentions X in order to..."**
**"The primary function of the third paragraph is to..."**

**What's being asked:** WHY did the author include this?

**Common purposes:**
- Provide an example
- Support an argument
- Introduce a new idea
- Contrast with previous point
- Transition to new topic

### Development Questions

**"The passage develops the idea that X by..."**

**Look for:**
- Examples
- Evidence
- Explanations
- Comparisons
- Expert opinions

### Structure Questions

**"The passage is organized primarily by..."**

**Strategy:**
1. Look at how paragraphs connect
2. Identify overall pattern
3. Focus on MAIN structure (not minor elements)

### Effect Questions

**"The author's use of X creates a sense of..."**

**Analyze:**
- How does the technique affect the reader?
- What feeling or understanding does it create?

## Analyzing Paragraph Function

### Introduction Paragraphs
**Typical functions:**
- Present main topic
- Provide background
- State thesis/argument
- Engage reader with hook

### Body Paragraphs
**Typical functions:**
- Support main idea
- Provide evidence
- Develop argument
- Present examples

### Conclusion Paragraphs
**Typical functions:**
- Summarize main points
- Restate thesis
- Provide final thoughts
- Call to action (persuasive)

## Rhetorical Devices

### Repetition
**Purpose:** Emphasize important ideas

**Example:** "We shall fight on the beaches, we shall fight on the landing grounds..."

### Rhetorical Questions
**Purpose:** Engage reader, emphasize point

**Example:** "How can we ignore this problem?"
(Not expecting an answer - making a point)

### Parallel Structure
**Purpose:** Create rhythm, emphasize connection

**Example:** "She came, she saw, she conquered."

### Contrast/Juxtaposition
**Purpose:** Highlight differences, create emphasis

**Example:** Placing opposing ideas side by side

## Point of View Impact

### First Person (I/We)
- **Effect:** Personal, subjective
- **Common in:** Memoirs, personal essays

### Third Person Limited
- **Effect:** Focus on one character's perspective
- **Common in:** Fiction

### Third Person Omniscient
- **Effect:** Broader view, multiple perspectives
- **Common in:** Novels with multiple characters

## Tone Analysis

**How to identify tone:**

1. **Word choice** - positive, negative, or neutral words?
2. **Details emphasized** - what does author focus on?
3. **Overall feeling** - how does passage make you feel?

**Common tones:**
- Academic/scholarly
- Enthusiastic
- Critical
- Nostalgic
- Objective/neutral
- Skeptical
- Admiring

## ACT Tips

- **Function questions:** Think about PURPOSE, not just content
- **"In order to"** = asking WHY the author did something
- **Main structure** might have minor variations (that's okay!)
- **Tone questions:** Eliminate extreme answers
- **Don't overthink** - structure questions have clear patterns
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: authorsCraft.id,
        order: 1,
        difficulty: 'EASY',
        question: 'A passage describes events in the order they occurred, from earliest to latest. What organizational pattern is this?',
        solution: `
**Solution:**

Events in **time order** = **Chronological/Sequential** organization

**Signal words you'd expect:**
- First, next, then, finally
- Before, after, meanwhile
- Dates and times

**Other common patterns:**
- Compare/contrast (similarities and differences)
- Cause/effect (why things happen)
- Problem/solution (issue and fix)
- Description (characteristics)

**Answer:** Chronological or Sequential organization

**ACT Tip:** Chronological = time order (chrono = time)
`
      },
      {
        topicId: authorsCraft.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Passage excerpt:\n\n"The experiment yielded surprising results. Three independent labs confirmed the findings. Critics, however, pointed out limitations in the methodology."\n\nWhat is the function of the final sentence?',
        solution: `
**Solution:**

**First two sentences:** Positive view of experiment
- Surprising results
- Confirmed by three labs

**Third sentence:** **"However"** signals contrast
- Introduces criticism
- Points out limitations

**Function:** To present an **opposing viewpoint** or **limitation/criticism** after presenting positive information

**Answer:** To introduce a contrasting perspective on the experiment's validity

**ACT Tip:** "However" is a red flag that function is changing - usually to show contrast!
`
      },
      {
        topicId: authorsCraft.id,
        order: 3,
        difficulty: 'HARD',
        question: 'An author repeats the phrase "we must act now" at the end of three consecutive paragraphs. What is the MOST likely purpose of this repetition?',
        solution: `
**Solution:**

**Repetition** is a rhetorical device (persuasive technique)

**Purpose of repetition:**
1. **Emphasize** an important idea
2. Create **rhythm** and **impact**
3. Make idea **memorable**
4. Show **urgency** (in this case)

**"We must act now" repeated 3 times:**
- Shows urgency/importance
- Emphasizes call to action
- Persuades reader

**Answer:** To emphasize the urgency of taking action

**ACT Tip:** When authors repeat phrases, ask yourself - what idea are they trying to hammer home?
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: authorsCraft.id,
        front: 'What are the five common text organizational patterns?',
        back: '1) Chronological/Sequential 2) Compare/Contrast 3) Cause/Effect 4) Problem/Solution 5) Description/Classification'
      },
      {
        topicId: authorsCraft.id,
        front: 'When a question asks "The author mentions X in order to...", what is it asking?',
        back: 'The PURPOSE or FUNCTION - WHY the author included that information, not just WHAT was said'
      },
      {
        topicId: authorsCraft.id,
        front: 'What is a rhetorical question and why do authors use it?',
        back: 'A question not expecting an answer - used to emphasize a point or engage the reader'
      }
    ]
  })

  console.log('✓ Created topic: Author\'s Craft and Text Structure (3 examples, 3 flashcards)')

  console.log('\n✅ Successfully created additional ACT Reading content!')
  console.log('   New topics: 3')
  console.log('   Total example problems added: 9')
  console.log('   Total flashcards added: 9')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
