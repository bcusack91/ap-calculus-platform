import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Creating ACT Reading and additional Science content...')

  const act = await prisma.course.findUnique({
    where: { slug: 'act-prep' }
  })

  if (!act) {
    throw new Error('ACT Prep course not found')
  }

  // Category: ACT Reading
  const actReading = await prisma.category.upsert({
    where: { slug: 'act-reading' },
    update: {},
    create: {
      slug: 'act-reading',
      name: 'ACT Reading',
      order: 4,
      courseId: act.id
    }
  })

  // Topic 1: Main Ideas and Details
  const mainIdeas = await prisma.topic.upsert({
    where: { slug: 'act-main-ideas-details' },
    update: {},
    create: {
      slug: 'act-main-ideas-details',
      title: 'Main Ideas and Supporting Details',
      description: 'Identify central themes, main ideas, and supporting evidence',
      order: 1,
      categoryId: actReading.id,
      isPremium: false,
      textContent: `
# Main Ideas and Supporting Details (ACT Reading)

## ACT Reading Format

**4 passages, 10 questions each (40 questions total)**

**Passage types:**
1. **Prose Fiction** - literary narratives
2. **Social Science** - psychology, sociology, economics
3. **Humanities** - arts, literature, philosophy
4. **Natural Science** - biology, chemistry, physics

**Time:** 35 minutes (≈ 9 minutes per passage)

## Finding Main Ideas

### Main Idea vs. Supporting Detail

**Main Idea:**
- The **central point** of the passage
- What the **entire passage** is about
- Usually more **general**

**Supporting Detail:**
- **Specific facts** or examples
- **Evidence** for the main idea
- Usually more **specific**

### Where to Find Main Ideas

**Check:**
1. **First paragraph** (often introduces main idea)
2. **Last paragraph** (often summarizes)
3. **Topic sentences** (first sentence of paragraphs)
4. **Repeated concepts** throughout passage

### Question Types

**"The main idea of the passage is..."**
- Look for the **big picture**
- Avoid answers that are too narrow or too broad

**"According to the passage..."**
- **Direct lookup** - find it in the text
- Don't rely on outside knowledge

**"The author's primary purpose is to..."**
- Inform? Persuade? Entertain?
- Describe? Explain? Argue?

## Supporting Details

### Detail Questions
**"According to the passage, which is true?"**

**Strategy:**
1. Scan for **keywords** from the question
2. Read the **relevant section** carefully
3. Match to answer choices
4. Eliminate wrong answers

### "EXCEPT" Questions
**"All of the following are mentioned EXCEPT..."**

**Strategy:**
1. Check **each answer choice**
2. Find 3 that ARE in the passage
3. The one NOT mentioned is the answer
4. These take more time - do them last if needed

## Inference Questions

**"It can reasonably be inferred..."**
**"The passage suggests..."**

**Tips:**
- Must be **supported by text**
- Not stated directly, but **logically follows**
- Avoid answers that go **too far** beyond the text

## ACT Tips

- **Read the passage first** (don't go to questions first)
- **Underline** main ideas and key details
- **Skim difficult sections** - you can return if needed
- **Prove every answer** with text evidence
- **Eliminate obviously wrong** answers first
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: mainIdeas.id,
        order: 1,
        difficulty: 'EASY',
        question: 'What is the difference between a main idea and a supporting detail?',
        solution: `
**Solution:**

**Main Idea:**
- The central point or theme
- What the whole passage/paragraph is about
- More **general**

**Supporting Detail:**
- Specific facts, examples, or evidence
- Supports or proves the main idea
- More **specific**

**Example:**

Main Idea: "Dogs make excellent pets"

Supporting Details:
- "They are loyal companions"
- "Studies show they reduce stress"
- "They encourage physical activity"

**ACT Tip:** Main idea is like an umbrella - details fit under it!
`
      },
      {
        topicId: mainIdeas.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'When a question asks "According to the passage...", what should you do?',
        solution: `
**Solution:**

This is a **direct lookup question** - the answer IS in the passage.

**Strategy:**
1. Identify **keywords** in the question
2. **Scan** the passage for those keywords
3. Read that section carefully
4. Match to answer choices
5. Don't use outside knowledge!

**ACT Tip:** These are the most straightforward - make sure to get them right!

**Time-saving:** If you remember where you saw the info while reading, go straight there.
`
      },
      {
        topicId: mainIdeas.id,
        order: 3,
        difficulty: 'HARD',
        question: 'What\'s the best strategy for "All of the following are mentioned EXCEPT..." questions?',
        solution: `
**Solution:**

These are **reverse questions** - find what's NOT mentioned.

**Strategy:**
1. Check each answer choice against the passage
2. Mark the 3 that ARE mentioned (✓)
3. The remaining one is your answer
4. **Be thorough** - don't rush

**Why they're hard:**
- Require checking 4 locations
- Easy to miss one
- Time-consuming

**ACT Tip:** Save these for last in each passage if you're running short on time. Do the quick lookups first!
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: mainIdeas.id,
        front: 'How long should you spend on each ACT Reading passage?',
        back: 'About 9 minutes per passage (35 minutes ÷ 4 passages)'
      },
      {
        topicId: mainIdeas.id,
        front: 'Where are main ideas usually located in a passage?',
        back: 'First paragraph (introduction), last paragraph (conclusion), or topic sentences of paragraphs'
      },
      {
        topicId: mainIdeas.id,
        front: 'What type of ACT Reading question is most straightforward?',
        back: '"According to the passage..." - direct lookup questions where the answer is stated in the text'
      }
    ]
  })

  console.log('✓ Created topic: Main Ideas and Supporting Details (3 examples, 3 flashcards)')

  // Additional Science Topic
  const actScience = await prisma.category.findUnique({
    where: { slug: 'act-science' }
  })

  if (!actScience) {
    throw new Error('ACT Science category not found')
  }

  // Topic 2: Research Summaries
  const researchSummaries = await prisma.topic.upsert({
    where: { slug: 'act-research-summaries' },
    update: {},
    create: {
      slug: 'act-research-summaries',
      title: 'Research Summaries',
      description: 'Understand experimental design, variables, and controls',
      order: 2,
      categoryId: actScience.id,
      isPremium: false,
      textContent: `
# Research Summaries (ACT Science)

## Experimental Design

### Key Components

**1. Independent Variable**
- What the **experimenter changes**
- The **cause** in cause-and-effect
- Example: Temperature, time, amount of fertilizer

**2. Dependent Variable**
- What is **measured or observed**
- The **effect** in cause-and-effect
- Example: Plant growth, reaction rate, test score

**3. Control Variables**
- Factors kept **constant**
- Ensures fair test
- Example: Same soil type, same water amount

**4. Control Group**
- Does **not** receive the treatment
- Provides **baseline** for comparison
- Example: Plant with no fertilizer

**5. Experimental Group**
- **Receives** the treatment
- Compared to control group

## Types of Experiments

### Single Variable Experiments
- Change **one** independent variable
- Measure its effect on dependent variable
- Example: Test 3 temperatures, measure growth rate

### Multiple Trial Experiments
- Repeat experiment **several times**
- Average results to reduce error
- Increases **reliability**

## Common Question Types

### Identifying Variables
**"What was the independent variable in Experiment 2?"**
- Look for what the researchers **changed**

**"What was measured in this experiment?"**
- The dependent variable

### Understanding Purpose
**"What was the purpose of using a control group?"**
- To provide comparison/baseline

**"Why did the researchers perform 3 trials?"**
- To increase reliability/reduce error

### Design Questions
**"Which experiment would test the hypothesis?"**
- Match the variables tested to the hypothesis

**"How could the experiment be improved?"**
- Add control group, more trials, control more variables

## Reading Research Summaries

### Passage Structure
1. **Introduction:** Background and hypothesis
2. **Methods:** What was done
3. **Results:** Data tables/graphs
4. **Conclusion:** What was learned (sometimes)

### Strategy
1. **Skim** the introduction for context
2. **Focus on methods** - who did what?
3. **Study the data** carefully
4. **Don't read every word** - go to questions

## ACT Tips

- **Independent = what you change**
- **Dependent = what you measure**
- **Control = what stays the same**
- Questions often test whether you understand **why** scientists made certain choices
- **Use process of elimination** on design questions
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: researchSummaries.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Students tested how temperature affects plant growth. They grew plants at 15°C, 20°C, and 25°C and measured height after 2 weeks. What is the independent variable?',
        solution: `
**Solution:**

**Independent variable** = what the experimenter **changes**

In this experiment:
- Changed: **Temperature** (15°C, 20°C, 25°C)
- Measured: Height (dependent variable)
- Kept same: Time (2 weeks), type of plant, etc. (controls)

**Answer:** Temperature

**ACT Tip:** Independent comes FIRST (cause), dependent comes SECOND (effect)
`
      },
      {
        topicId: researchSummaries.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Why would researchers perform an experiment 3 times instead of just once?',
        solution: `
**Solution:**

**Multiple trials** serve several purposes:

1. **Reduce random error** - one trial might have flukes
2. **Calculate averages** - more accurate results
3. **Increase reliability** - consistent results across trials
4. **Detect anomalies** - spot outliers

**Answer:** To increase reliability and reduce the impact of random error

**ACT Tip:** More trials = more reliable data!
`
      },
      {
        topicId: researchSummaries.id,
        order: 3,
        difficulty: 'HARD',
        question: 'An experiment tested 3 fertilizers (A, B, C) on tomato plants. All plants received the same amount of water and sunlight. What is the purpose of keeping water and sunlight constant?',
        solution: `
**Solution:**

These are **control variables** (kept constant).

**Purpose:**
- Ensure the **only difference** is the type of fertilizer
- Allows **fair comparison** between groups
- If water varied, couldn't tell if growth differences were from fertilizer or water

**This is called a "controlled experiment"**

**Answer:** To ensure that any differences in plant growth are due to the fertilizer type and not other factors

**ACT Tip:** Control variables eliminate confounding factors!
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: researchSummaries.id,
        front: 'What is the difference between independent and dependent variables?',
        back: 'Independent = what you CHANGE (cause); Dependent = what you MEASURE (effect)'
      },
      {
        topicId: researchSummaries.id,
        front: 'Why do scientists use control groups in experiments?',
        back: 'To provide a baseline for comparison - shows what happens without the treatment'
      },
      {
        topicId: researchSummaries.id,
        front: 'What are control variables and why are they important?',
        back: 'Factors kept constant during an experiment - ensure fair test by eliminating confounding factors'
      }
    ]
  })

  console.log('✓ Created topic: Research Summaries (3 examples, 3 flashcards)')

  console.log('\n✅ Successfully created ACT Reading and Science content!')
  console.log('   New categories: 1 (ACT Reading)')
  console.log('   New topics: 2')
  console.log('   Total example problems added: 6')
  console.log('   Total flashcards added: 6')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
