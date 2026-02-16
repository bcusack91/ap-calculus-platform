import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Creating additional ACT English content...')

  const act = await prisma.course.findUnique({
    where: { slug: 'act-prep' }
  })

  if (!act) {
    throw new Error('ACT Prep course not found')
  }

  const actEnglish = await prisma.category.findUnique({
    where: { slug: 'act-english' }
  })

  if (!actEnglish) {
    throw new Error('ACT English category not found')
  }

  // Topic 1: Rhetorical Skills
  const rhetoricalSkills = await prisma.topic.upsert({
    where: { slug: 'act-rhetorical-skills' },
    update: {},
    create: {
      slug: 'act-rhetorical-skills',
      title: 'Rhetorical Skills',
      description: 'Strategy, organization, and style for effective writing',
      order: 2,
      categoryId: actEnglish.id,
      isPremium: false,
      textContent: `
# Rhetorical Skills (ACT English)

## Strategy

### Main Idea Questions
**Question types:**
- "Which choice best introduces the essay?"
- "Which sentence should be added/deleted?"
- "The writer wants to emphasize..."

**Tips:**
- Consider the **purpose** of the paragraph/essay
- Look for the **main point** being made
- Avoid tangents or irrelevant details

### Audience and Purpose
**Consider:**
- Who is reading? (experts vs. general public)
- What's the goal? (inform, persuade, entertain)
- What tone is appropriate? (formal vs. casual)

## Organization

### Paragraph Order
**Questions ask:** "Where should this sentence be placed?"

**Strategy:**
1. Look for **transition words** (however, therefore, for example)
2. Check for **pronouns** that need clear antecedents
3. Follow **logical flow** of ideas
4. Watch for **chronological order** in narratives

### Sentence Order Within Paragraphs
**Look for:**
- Topic sentence (usually first)
- Supporting details
- Concluding/transition sentence

### Transition Words

**Addition:** also, furthermore, moreover, in addition
**Contrast:** however, nevertheless, on the other hand, although
**Cause/Effect:** therefore, consequently, as a result, thus
**Example:** for instance, for example, specifically
**Time:** first, next, finally, meanwhile

## Style

### Word Choice
**Questions:** "Which word is most appropriate?"

**Prefer:**
- **Precise** over vague
- **Concise** over wordy
- **Appropriate tone** for context

❌ "The thing was very big"
✓ "The skyscraper was massive"

### Redundancy
**Eliminate repetition:**

❌ "The reason is because..." (reason = because)
✓ "The reason is..."

❌ "In my personal opinion..." (opinion is always personal)
✓ "In my opinion..."

❌ "Past history" (history is always past)
✓ "History"

### Wordiness
**Shorter is better (if meaning is clear):**

❌ "Due to the fact that"
✓ "Because"

❌ "In spite of the fact that"
✓ "Although"

❌ "At this point in time"
✓ "Now"

## ACT Tips

- **"OMIT the underlined portion"** is often correct when eliminating redundancy
- **Match the tone** of the rest of the essay
- **Read the full sentence** before and after for context
- **Trust your ear** but verify with rules
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: rhetoricalSkills.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Which transition word best fits?\n\n"I studied all night. _____, I felt prepared for the exam."\n\nA) However\nB) Therefore\nC) For example\nD) On the other hand',
        solution: `
**Solution:**

The sentences show **cause and effect:**
- Cause: studied all night
- Effect: felt prepared

Need a transition showing **result/consequence**

**A) However:** Shows contrast ❌
**B) Therefore:** Shows result ✓
**C) For example:** Introduces example ❌
**D) On the other hand:** Shows contrast ❌

**Answer:** B - Therefore

**ACT Tip:** Identify relationship between sentences before choosing transition!
`
      },
      {
        topicId: rhetoricalSkills.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Which is MOST concise?\n\nA) Due to the fact that it was raining\nB) Because of the rain\nC) For the reason that it was raining\nD) On account of the fact that it rained',
        solution: `
**Solution:**

All mean essentially the same thing, but we want **most concise:**

**A) "Due to the fact that" = 6 words**
**B) "Because of" = 3 words** ✓
**C) "For the reason that" = 5 words**
**D) "On account of the fact that" = 7 words**

**Answer:** B - Because of the rain

**ACT Tip:** Eliminate wordy phrases! "Due to the fact that" = "Because"
`
      },
      {
        topicId: rhetoricalSkills.id,
        order: 3,
        difficulty: 'HARD',
        question: 'The writer wants to add a sentence emphasizing the historical significance of the discovery. Which would be BEST?\n\nA) It was a really important discovery.\nB) This discovery revolutionized our understanding of ancient civilizations.\nC) Many people thought it was cool.\nD) The discovery happened a long time ago.',
        solution: `
**Solution:**

Need to emphasize **historical significance** (importance to history/knowledge)

**A)** "Really important" - vague, informal ❌
**B)** "Revolutionized understanding" - specific, shows impact ✓
**C)** "Thought it was cool" - too casual ❌
**D)** "Long time ago" - about timing, not significance ❌

**Answer:** B

**ACT Tip:** Match the level of formality and be specific about the type of importance!
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: rhetoricalSkills.id,
        front: 'What transition words show cause and effect?',
        back: 'Therefore, consequently, as a result, thus'
      },
      {
        topicId: rhetoricalSkills.id,
        front: 'What is redundant about "past history"?',
        back: 'History is already past by definition - just use "history"'
      },
      {
        topicId: rhetoricalSkills.id,
        front: 'ACT English: What should you do if a choice is "OMIT the underlined portion"?',
        back: 'Consider it carefully! It\'s often correct when removing redundancy or unnecessary info'
      }
    ]
  })

  console.log('✓ Created topic: Rhetorical Skills (3 examples, 3 flashcards)')

  console.log('\n✅ Successfully created additional ACT English content!')
  console.log('   New topics: 1')
  console.log('   Total example problems added: 3')
  console.log('   Total flashcards added: 3')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
