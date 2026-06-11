import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Creating final ACT Science topic...')

  const act = await prisma.course.findUnique({
    where: { slug: 'act-prep' }
  })

  if (!act) {
    throw new Error('ACT Prep course not found')
  }

  const actScience = await prisma.category.findUnique({
    where: { slug: 'act-science' }
  })

  if (!actScience) {
    throw new Error('ACT Science category not found')
  }

  // Topic: Conflicting Viewpoints
  const conflictingViewpoints = await prisma.topic.upsert({
    where: { slug: 'act-conflicting-viewpoints' },
    update: {},
    create: {
      slug: 'act-conflicting-viewpoints',
      title: 'Conflicting Viewpoints',
      description: 'Compare and analyze competing scientific theories and hypotheses',
      order: 3,
      categoryId: actScience.id,
      isPremium: false,
      textContent: `
# Conflicting Viewpoints (ACT Science)

## What Are Conflicting Viewpoints Passages?

**Unique to ACT Science!** (Only 1 passage of this type)

### Format
- **One passage** presents **2-3 different viewpoints** on a scientific topic
- Each viewpoint = different hypothesis, theory, or explanation
- All viewpoints address the **same phenomenon**

### What's Being Tested
- Understanding each viewpoint
- Identifying similarities and differences
- Recognizing supporting evidence
- Determining what would strengthen/weaken each theory

## Passage Structure

### Introduction
- Describes the **phenomenon** or **question** being debated
- Provides background information
- Sets up the controversy

### Scientist 1 (or Student 1/Hypothesis 1)
- Presents first explanation
- Provides supporting evidence
- May explain mechanism

### Scientist 2 (or Student 2/Hypothesis 2)
- Presents alternative explanation
- Provides different evidence
- May contradict Scientist 1

### Scientist 3 (sometimes)
- Third perspective
- May combine elements of 1 and 2
- Or offer completely different view

## Common Question Types

### 1. Understanding Each Viewpoint

**"According to Scientist 1, X occurs because..."**
**"Scientist 2 would claim that..."**

**Strategy:**
- Go to that scientist's section
- Find the specific claim
- Don't confuse with other scientists

### 2. Comparing Viewpoints

**"On which point would Scientists 1 and 2 agree?"**
**"Scientists 1 and 2 disagree about..."**

**Strategy:**
- Find points mentioned by BOTH
- Agreement = same conclusion
- Disagreement = different conclusions

### 3. Identifying Similarities

**"Both scientists would agree that..."**
**"All three hypotheses assume that..."**

**What they often agree on:**
- Basic observations/facts
- The phenomenon exists
- Certain background information
- General principles

**What they disagree on:**
- The EXPLANATION
- The MECHANISM
- The CAUSE
- Which factors are important

### 4. Supporting/Weakening Evidence

**"Which finding would support Scientist 2's hypothesis?"**
**"Which observation would weaken Scientist 1's claim?"**

**Strategy:**
- Understand what each scientist claims
- Support = evidence that matches their prediction
- Weaken = evidence that contradicts their prediction

### 5. Prediction Questions

**"Based on Scientist 1's viewpoint, if X increased, then Y would..."**

**Strategy:**
- Apply the scientist's logic
- Make prediction consistent with their explanation
- Think about cause-and-effect they proposed

## How to Read Conflicting Viewpoints Passages

### Step 1: Read the Introduction Carefully
- Understand the **phenomenon** being explained
- Note what is **observed/known**
- Identify the **question** being debated

### Step 2: Summarize Each Viewpoint
**As you read each scientist, note:**
- Main claim/hypothesis
- Key evidence
- Mechanism explained
- One key difference from others

### Step 3: Create a Mental Table

| Aspect | Scientist 1 | Scientist 2 |
|--------|-------------|-------------|
| Main claim | ... | ... |
| Key evidence | ... | ... |
| Mechanism | ... | ... |

### Step 4: Answer Questions
- Go back to specific sections
- Compare across viewpoints
- Apply the logic of each scientist

## Types of Scientific Disagreements

### 1. Different Explanations, Same Data
- Both observe the same thing
- Disagree on WHY it happens

**Example:**
- Observation: Dinosaurs went extinct
- Scientist 1: Asteroid impact
- Scientist 2: Volcanic activity

### 2. Different Emphasis on Factors
- Agree multiple factors exist
- Disagree on which is most important

**Example:**
- Both agree genes AND environment matter
- Scientist 1: Genes are primary
- Scientist 2: Environment is primary

### 3. Different Mechanisms
- Agree on outcome
- Disagree on HOW it happens

**Example:**
- Both agree evolution occurs
- Scientist 1: Gradual changes
- Scientist 2: Rapid changes after long stability

## Common Wrong Answer Traps

### 1. Mixing Up Scientists
- Attributing Scientist 1's claim to Scientist 2
- **Fix:** Clearly note who says what

### 2. Overgeneralizing Agreement
- Saying they agree when they only agree on basics
- **Fix:** Look for substantive agreement, not just background

### 3. Picking Irrelevant Evidence
- For support/weaken questions
- Evidence doesn't relate to their specific claim
- **Fix:** Match evidence to the KEY claim

### 4. Reversing Support/Weaken
- Picking evidence that weakens when asked for support
- **Fix:** Double-check what the question asks

## Strategies for Success

### Time Management
- These passages take **longer** (more reading)
- But questions are often straightforward
- Spend time understanding viewpoints first

### Active Reading
**Underline or note:**
- Each scientist's main claim
- Key pieces of evidence
- Words showing contrast (however, unlike, in contrast)

### Use Comparison
**Make quick notes:**
- "S1: claims A, S2: claims B"
- "Both agree: X, Disagree: Y"

### Elimination Strategy
- Cross out answers that contradict the passage
- Eliminate answers mixing up scientists
- Choose best remaining answer

## Key Phrases to Watch

### Agreement Indicators
- "Both scientists acknowledge..."
- "All hypotheses agree..."
- "Neither scientist disputes..."

### Disagreement Indicators
- "Unlike Scientist 1, Scientist 2..."
- "In contrast to..."
- "Scientist 1 claims X, while Scientist 2 claims Y"

### Support/Weaken Clues
- "Would strengthen..." = find consistent evidence
- "Would weaken..." = find contradictory evidence
- "Is consistent with..." = matches the viewpoint

## Sample Approach

**Topic:** Why do leaves change color in fall?

**Scientist 1:** Temperature triggers chemical changes
- Evidence: Happens at same temp each year
- Mechanism: Cold breaks down chlorophyll

**Scientist 2:** Day length (photoperiod) is the trigger
- Evidence: Happens at same date, different latitudes
- Mechanism: Shorter days signal chemical changes

**Both agree:**
- Leaves change color
- It's a biological process
- Happens in fall

**They disagree:**
- What triggers the change (temp vs. day length)

## ACT Tips

- **Only 1 passage** of this type on ACT (usually 7 questions)
- **Don't need science knowledge** - all info is in the passage
- **Make a simple chart** comparing viewpoints
- **Watch for:** "both," "neither," "all" - check carefully!
- **Support/weaken questions:** Think like each scientist
- **Take your time** - understanding viewpoints makes questions easier
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: conflictingViewpoints.id,
        order: 1,
        difficulty: 'EASY',
        question: 'In a Conflicting Viewpoints passage, what do the different scientists typically AGREE about?\n\nA) The explanation for why something happens\nB) The basic observations and facts\nC) Which evidence is most important\nD) The mechanism behind the phenomenon',
        solution: `
**Solution:**

**Scientists typically DISAGREE on:**
- A) Explanation/interpretation ❌
- C) Which evidence matters most ❌
- D) The mechanism/how it works ❌

**Scientists typically AGREE on:**
- B) Basic facts and observations ✓
- That the phenomenon exists
- Background information
- General principles

**Example:**
- Both agree: Dinosaurs went extinct (fact)
- Disagree: Why (asteroid vs. volcanoes)

**Answer:** B - The basic observations and facts

**ACT Tip:** They usually agree on WHAT happened, disagree on WHY or HOW!
`
      },
      {
        topicId: conflictingViewpoints.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Scenario:\n\nScientist 1 claims climate change is primarily caused by solar activity.\nScientist 2 claims climate change is primarily caused by greenhouse gas emissions.\n\nWhich finding would SUPPORT Scientist 2\'s hypothesis?',
        solution: `
**Solution:**

**Scientist 2's claim:** Greenhouse gases cause climate change

**Supporting evidence would:**
- Show correlation between CO₂ and temperature
- Demonstrate greenhouse gas warming effect
- Rule out solar activity as primary cause

**Examples of support:**
- "Temperature increased as CO₂ levels rose"
- "Laboratory shows CO₂ traps heat"
- "Solar activity remained constant while temps rose"

**Wrong answers would:**
- Support Scientist 1 (solar activity correlation)
- Be irrelevant to either claim
- Weaken Scientist 2

**Answer:** Evidence showing a strong correlation between greenhouse gas levels and temperature increases

**ACT Tip:** Supporting evidence makes their prediction come true!
`
      },
      {
        topicId: conflictingViewpoints.id,
        order: 3,
        difficulty: 'HARD',
        question: 'Two scientists propose different mechanisms for how birds navigate during migration:\n\nScientist 1: Birds use Earth\'s magnetic field\nScientist 2: Birds use visual landmarks and the sun\n\nBoth scientists would likely agree that:',
        solution: `
**Solution:**

**What they DISAGREE on:**
- The mechanism (magnetic field vs. visual cues)
- How birds navigate

**What they would AGREE on:**
- Birds DO migrate (basic fact) ✓
- Migration is a real phenomenon ✓
- Birds can navigate long distances ✓
- Navigation involves some sensory input ✓

**Common "both agree" answers involve:**
- The phenomenon exists
- General observations
- Underlying assumptions
- Broader context

**Answer:** Birds successfully navigate long distances during migration

**ACT Tip:** "Both agree" answers are usually more GENERAL than each specific hypothesis!
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: conflictingViewpoints.id,
        front: 'How many Conflicting Viewpoints passages appear on the ACT Science section?',
        back: 'Only 1 passage (usually with 7 questions) - it presents 2-3 different scientific viewpoints on the same topic'
      },
      {
        topicId: conflictingViewpoints.id,
        front: 'What do scientists in Conflicting Viewpoints passages typically agree vs. disagree about?',
        back: 'AGREE: Basic facts, observations, that phenomenon exists; DISAGREE: Explanation, mechanism, cause, which factors are important'
      },
      {
        topicId: conflictingViewpoints.id,
        front: 'How can you tell if evidence supports or weakens a scientist\'s hypothesis?',
        back: 'SUPPORTS: Evidence matches their prediction/is consistent with their claim; WEAKENS: Evidence contradicts their prediction'
      }
    ]
  })

  console.log('✓ Created topic: Conflicting Viewpoints (3 examples, 3 flashcards)')

  console.log('\n✅ Successfully created final ACT Science topic!')
  console.log('   New topics: 1')
  console.log('   Total example problems added: 3')
  console.log('   Total flashcards added: 3')
  console.log('\n🎉 ACT Science section is now COMPLETE!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
